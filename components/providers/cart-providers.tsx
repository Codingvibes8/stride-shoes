"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { useUser } from "@clerk/nextjs";
import { useCartStore } from "@/store/cart-store";
import { supabase } from "@/lib/supabase";
import type { CartItem } from "@/types/types";

interface CartContextType {
  syncCart: () => Promise<void>;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCartSync() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartSync must be used within a CartProvider");
  }
  return context;
}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const { user, isSignedIn } = useUser();
  const { items } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);

  const syncCart = useCallback(async () => {
    if (!isSignedIn || !user) return;

    setIsLoading(true);
    try {
      const { data: dbCart, error } = await supabase
        .from("cart_items")
        .select("*")
        .eq("user_id", user.id);

      if (error) throw error;

      if (items.length > 0) {
        const cartItemsToInsert = items.map((item) => ({
          user_id: user.id,
          product_id: item.product_id,
          variant_id: item.variant_id,
          quantity: item.quantity,
          price: item.price,
          name: item.name,
          image: item.image,
        }));

        await supabase.from("cart_items").upsert(cartItemsToInsert, {
          onConflict: "user_id,product_id,variant_id",
        });
      }

      if (items.length === 0 && dbCart?.length) {
        const cartItems: CartItem[] = dbCart.map((item: any) => ({
          id: item.id,
          user_id: item.user_id,
          product_id: item.product_id,
          variant_id: item.variant_id,
          quantity: item.quantity,
          price: item.price,
          name: item.name,
          image: item.image,
          size: item.size,
          color: item.color,
          created_at: item.created_at,
        }));

        cartItems.forEach((item) => {
          useCartStore.getState().addItem(item);
        });
      }
    } catch (error) {
      console.error("Error syncing cart:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isSignedIn, user, items]);

  useEffect(() => {
    if (isSignedIn) {
      syncCart();
    }
  }, [isSignedIn, syncCart]);

  useEffect(() => {
    if (!isSignedIn || !user || items.length === 0) return;

    const saveCartToDatabase = async () => {
      try {
        const cartItemsToSave = items.map((item) => ({
          user_id: user.id,
          product_id: item.product_id,
          variant_id: item.variant_id,
          quantity: item.quantity,
          price: item.price,
          name: item.name,
          image: item.image,
        }));

        await supabase.from("cart_items").upsert(cartItemsToSave, {
          onConflict: "user_id,product_id,variant_id",
        });
      } catch (error) {
        console.error("Error saving cart to database:", error);
      }
    };

    const timeoutId = setTimeout(saveCartToDatabase, 1000);
    return () => clearTimeout(timeoutId);
  }, [items, isSignedIn, user]);

  const contextValue: CartContextType = {
    syncCart,
    isLoading,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
