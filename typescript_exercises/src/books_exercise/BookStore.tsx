type Category = 'ficção' | 'técnico' | 'biografia'

interface Book {
  id: number
  title: string  
  author: string
  price: number
  desc?: string
  category: Category
}

export default function BookStore () {
  const filterFunc = (catalog: Book[], category: Category) => {
    return catalog.filter(book => book.category === category)
  }

  const catalog: Book[] = [
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J.R.R Tolkien',
      price: 89.90,
      category: 'ficção'
    },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      price: 74.50,
      category: 'técnico'
    },
    {
      id: 3,
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      price: 59.50,
      category: 'biografia'
    },
    {
      id: 4,
      title: 'Data Structures and Algorithms',
      author: 'Thomas Cormen',
      price: 120.00,
      category: 'técnico'
    }
  ]

  const techBooks = filterFunc(catalog, "técnico")

  return (
    <main>
      <header>
        <h1>Book Store with TypeScript</h1>
      </header>
      <section>
        <ul>
          {techBooks.map(book => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <h5>{book.author}</h5>
              <p>{book.category}</p>
              <span>{book.price}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}