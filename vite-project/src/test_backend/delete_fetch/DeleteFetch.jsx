import { useState, useEffect } from "react"

const DeleteFetch = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // 1. useEffect — busca a lista ao montar (GET)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        if (!result.ok) throw new Error(`Error: ${result.status}`)

        const data = await result.json()
        setPosts(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleDelete = async (id) => {
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'DELETE'
      })

      if (!result.ok) throw new Error(`Error: ${result.status}`)
      setPosts(posts.filter(post => post.id !== id))
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error {error}</h2>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          ))}
        </div>
      )
      }
    </div>
  )
}

export default DeleteFetch