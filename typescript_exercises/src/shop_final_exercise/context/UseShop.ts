import { useContext } from "react";
import { ShopContext } from "./ShopContext";

export function useShop () {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error('useShop deve ser usado dentro de um ShopProvider')
  }
  return context
}