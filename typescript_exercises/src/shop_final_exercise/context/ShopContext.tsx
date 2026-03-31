import { createContext, useState } from "react";
import type { Product, CartItem } from "../types/product";
import { products as initialProducts } from "../data/data";

interface ShopContextType {
  products: Product[]
  filteredProducts: Product[]
  cartItems: CartItem[] 
  isGrid: boolean
  filterByType: (type: string) => void
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  toggleVisualization: () => void
}

const ShopContext = createContext<ShopContextType | null>(null)

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [products] = useState<Product[]>(initialProducts)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isGrid, setIsGrid] = useState<boolean>(true)

  const toggleVisualization = () => {
    setIsGrid(prev => !prev)
  }

  const filterByType = (type: string) => {
    if (type === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(p => p.type === type))
    }
  }

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== id))
  }

  const value: ShopContextType = {
    products,
    filteredProducts,
    cartItems,
    isGrid,
    filterByType,
    addToCart,
    removeFromCart,
    toggleVisualization
  }

   return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}