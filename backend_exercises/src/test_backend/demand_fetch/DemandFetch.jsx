import './demand.css'
import { useState } from 'react'

const DemandFetch = () => {
  const [post, setPost] = useState(null)
  const [value, setValue] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!value) return 

    setIsLoading(true)
    setError(null)
    setPost(null)

    try {
      const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${value}`)

      if (!response.ok) throw new Error(`Error searching for this post ${response.status}`)

      const data = await response.json()
      setPost(data)
    } catch (error) {
      setError(error.message)
      console.log('ERROR: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className='general_container'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="number" max={100} min={1} onChange={(e) => setValue(e.target.value)}/>
        <button type="submit">Search</button>
      </form>

      <section className='post_container'>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>Error: {error}</h2>
        ) : post ? (
          <article className='post'>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </article>
        ) : null}
      </section>

    </main>
  )
}

export default DemandFetch