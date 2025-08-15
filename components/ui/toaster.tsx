"use client"

import { ToastComponent } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col gap-2 p-4">
      {toasts.map(toast => (
        <ToastComponent key={toast.id} toast={toast} onRemoveAction={dismiss} />
      ))}
    </div>
  )
}
