import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useProductsStore = create(
  persist(
    (set) => ({
      cart: [],
      addItem: (product) => set((state) => {
        const exists = state.cart.some((item) => item.id === product.id)
        if (exists) return state
        return {cart: [...state.cart, product]}
      }),
      removeItem: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id)
      }))
    }),
    {
      name: 'cart_storage'
    }
  )
)

export { useProductsStore }