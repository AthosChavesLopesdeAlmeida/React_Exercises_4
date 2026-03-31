import './send.css'
import { useState } from 'react'

const SendData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [post, setPost] = useState(null)
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('') 

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!body || !title) return

    setPost(null)
    setError(null)
    setIsLoading(true)

    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title, body: body})
      })

      if (!result.ok) throw new Error(`Error posting: ${result.status}`)
      const data = await result.json()
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
      <h1>Create a new post</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Post title'/>
        <input type="text" onChange={(e) => setBody(e.target.value)} placeholder='Post content:'/>
        <button type="submit">Post</button>
      </form>

      <section>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>Error: {error}</h2>
        ) : post ? (
          <div className='post'>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <span>Id: {post.id}</span>
          </div>
        ) : null
        }
      </section>
    </main>
  )
}

export default SendData