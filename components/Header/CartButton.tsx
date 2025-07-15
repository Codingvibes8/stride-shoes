import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart-store"

export function CartButton() {
  const { toggleCart, getTotalItems } = useCartStore()
  const totalItems = getTotalItems()

  return (
    <Button variant="ghost" size="icon" onClick={toggleCart} className="relative">
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  )
}
