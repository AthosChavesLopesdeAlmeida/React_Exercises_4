import './grid.css'
import FullCard from "./FullCard";
import { useShop } from "../context/UseShop";
import type { Product } from "../types/product";

interface GridProps {
  products: Product[]
}

export default function CardsGrid ({products}: GridProps) {
  const { isGrid } = useShop()

  return (
    <div className={isGrid ? 'cards_grid' : 'cards_column'}>
      {products.map(product => (
        <FullCard product={product}/>
      ))}
    </div>
  )
}