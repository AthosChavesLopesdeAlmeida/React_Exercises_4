import type { Product } from "../types/product"

interface CardTopProduct {
  product: Product
}

export default function CardTop ({product}: CardTopProduct) {
  return (
    <div>
      {product.badges.map((badge, index) => (
        <span key={index}>{badge}</span>
      ))}
    </div>
  )
}