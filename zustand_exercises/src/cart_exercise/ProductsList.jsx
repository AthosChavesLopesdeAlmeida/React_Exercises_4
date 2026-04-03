import products from './products'
import { useProductsStore } from './productStore'

const ProductsList = () => {
  const addItem = useProductsStore((state) => state.addItem)

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => addItem(product)}>Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList