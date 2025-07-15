"use client"

import { createContext, useContext, useState, useCallback, type ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"
import { ToastComponent, type Toast } from "@/components/ui/toast"

interface ToastContextType {
  toast: (props: Omit<Toast, "id">) => void
  dismiss: (id: string) => void
  toasts: Toast[]
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const toast = useCallback((props: Omit<Toast, "id">) => {
    const id = crypto.randomUUID()
    const newToast: Toast = {
      ...props,
      id,
      duration: props.duration || 5000,
    }
    setToasts((prev) => [...prev, newToast])
  }, [])

  const contextValue: ToastContextType = {
    toast,
    dismiss,
    toasts,
  }

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {mounted &&
        createPortal(
          <div className="fixed top-0 right-0 z-50 flex flex-col gap-2 p-4 pointer-events-none">
            {toasts.map((toast) => (
              <ToastComponent key={toast.id} toast={toast} onRemove={dismiss} />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  )
}

// Convenience hook with pre-configured toast types
export function useToastHelpers() {
  const { toast } = useToast()
  return {
    success: (title: string, description?: string) =>
      toast({
        type: "success",
        title,
        description,
      }),
    error: (title: string, description?: string) =>
      toast({
        type: "error",
        title,
        description,
      }),
    warning: (title: string, description?: string) =>
      toast({
        type: "warning",
        title,
        description,
      }),
    info: (title: string, description?: string) =>
      toast({
        type: "info",
        title,
        description,
      }),
  }
}