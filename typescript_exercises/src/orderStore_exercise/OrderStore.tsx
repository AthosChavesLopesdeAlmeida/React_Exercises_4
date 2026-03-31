import { useState } from "react"

// substitui enum quando 'erasableSyntaxOnly' está ativo
// 'as const' congela os valores
const OrderStatus = {
  Pending: 'Pending',
  Preparing: 'Preparing',
  Sent: 'Sent',
  Delivered: 'Delivered',
  Canceled: 'Canceled'
} as const

// extrai os valores do OrderStatus como união de literais
type OrderStatusType = typeof OrderStatus[keyof typeof OrderStatus]


// interface genérica: <T> é substituído pelo tipo real na hora do uso
interface Response<T> {
  data: T
  success: boolean
  message: string
}

interface Order {
  id: number
  items: string[]
  status: OrderStatusType
}

// <T,> com vírgula evita confusão com JSX em arquivos .tsx
function createResponse<T,>(data: T, success: boolean): Response<T> {
  return {
    data: data,
    success: success,
    message: success ? 'Operation successful' : 'An error occurred'
  }
}

export default function OrderUI () {
  const [orders, setOrders] = useState<Order[]>([])
  const [currentItems, setCurrentItems] = useState<string[]>([])
  const [itemInput, setItemInput] = useState<string>('')

  function advanceStatus(id: number) {
    setOrders(prev => prev.map(order => {
      if (order.id !== id) return order
      const statusValues = Object.values(OrderStatus)
      const currentIndex = statusValues.indexOf(order.status)
      // ?? mantém o status atual se não houver próximo
      const nextStatus = statusValues[currentIndex + 1] ?? order.status
      return { ...order, status: nextStatus }
    }))
  }

  return (
    <main>
      <section>
        <form>
          <input type="text" onChange={(e) => setItemInput(e.target.value)}/>
          <button onClick={() => setCurrentItems(prev => [...prev, itemInput])} type="button">
            Add item
          </button>
          <button onClick={() => {
            const newOrder: Order = {
              id: Date.now(),
              items: currentItems,
              status: OrderStatus.Pending
            }
            // T é inferido automaticamente como Order
            const response = createResponse(newOrder, true)
            setOrders(prev => [...prev, response.data])
            setCurrentItems([])
          }} type="button">
            Create order
          </button>
        </form>
        <ul>
          {currentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <p>Status: {order.status}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button onClick={() => advanceStatus(order.id)} type="button">
                Advance status
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}