import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import type { Product } from "../types/product";

interface FullCardInterfce {
  product: Product
}

export default function FullCard ({product}: FullCardInterfce) {
  return (
    <div>
      <CardTop product={product}/>
      <CardBottom product={product}/>
    </div>
  )
} 