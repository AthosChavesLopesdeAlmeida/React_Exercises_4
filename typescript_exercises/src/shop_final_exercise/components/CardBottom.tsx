import { useShop } from "../context/UseShop"
import type { Product, PhysicalProduct, DigitalProduct } from "../types/product"

interface CardBottomInterface {
  product: Product
}

const isPhysical = (p: Product): p is PhysicalProduct => p.type === 'physical'
const isDigital = (p: Product): p is DigitalProduct => p.type === 'digital'

const getProductType = (product: Product) => {
  if (isPhysical(product)) {
    return <p>Stock: {product.stock}</p>
  } 
  if (isDigital(product)) {
    return <p>Size: {product.downloadSize}</p>
  }

  return <p>Duration: {product.duration}</p>
}

export default function CardBottom ({product}: CardBottomInterface) {
  const { addToCart } = useShop()

  return (
    <div>
      <h3>{product.name}</h3>
      {getProductType(product)}
      <span>R$: {product.price}</span>
      <span>{product.rating} &#40;{product.reviews}&#41;</span>
      <section>
        <button onClick={() => addToCart(product)}>Add to cart</button>
        <button>Buy now</button>
      </section>
    </div>
  )
}