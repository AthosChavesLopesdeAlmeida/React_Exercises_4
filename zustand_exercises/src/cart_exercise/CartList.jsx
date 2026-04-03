import { useProductsStore } from './productStore'

const CartList = () => {
  const cart = useProductsStore((state) => state.cart)
  const removeItem = useProductsStore((state) => state.removeItem)
  const total = useProductsStore((state) =>
    state.cart.reduce((sum, item) => sum + item.price, 0)
  )

  return (
    <div>
      <h1>Total price: {total}</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <button onClick={() => removeItem(item.id)}>Remove item</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartList