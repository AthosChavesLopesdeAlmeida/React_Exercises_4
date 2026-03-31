interface PhysicalProduct {
  id: number
  name: string
  price: number
  weight: number
}

interface DigitalProduct {
  id: number
  name: string
  price: number
  downloadURL: string
}

type Product = PhysicalProduct | DigitalProduct

function isPhysicalProduct(value: PhysicalProduct | DigitalProduct): value is PhysicalProduct {
  return 'weight' in value
}

function calculateShipping (product: Product): number {
  let shippingPrice = 0

  if (isPhysicalProduct(product)) {
    shippingPrice = product.weight * 5
  } else {
    shippingPrice = 0
  }

  return shippingPrice
}

export default function TypesStoreUI () {
  const products: Product[] = [
    {
    id: 1,
    name: 'Mechanical Keyboard',
    price: 350,
    weight: 1.2
  },
  {
    id: 2,
    name: 'Monitor 27"',
    price: 1200,
    weight: 4.5
  },
  {
    id: 3,
    name: 'React Course',
    price: 99,
    downloadURL: 'https://courses.com/react'
  },
  {
    id: 4,
    name: 'TypeScript Handbook',
    price: 49,
    downloadURL: 'https://books.com/typescript'
  }
  ]

  return (
    <main>
      <h1>Store</h1>
      <section>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <p>{product.name}</p>
              <span>Price: {product.price}</span>
              <span>Shipping: {calculateShipping(product)}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}