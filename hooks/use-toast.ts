import { create } from 'zustand'

interface Toast {
  id: string
  title: string
  description?: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

interface ToastStore {
  toasts: Toast[]
  toast: (props: Omit<Toast, 'id'>) => void
  dismiss: (id: string) => void
}

export const useToast = create<ToastStore>((set) => ({
  toasts: [],
  toast: (props) => {
    const id = crypto.randomUUID()
    const newToast: Toast = {
      ...props,
      id,
      duration: props.duration || 5000,
    }
    set((state) => ({ toasts: [...state.toasts, newToast] }))
  },
  dismiss: (id) => {
    set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) }))
  },
}))
