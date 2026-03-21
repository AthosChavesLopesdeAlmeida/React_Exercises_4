import './system.css'
import { useContext, useState } from 'react'
import CommentContext from './CommentContext'

const CommentForm = () => {
  const { handleAdd, isLoadingAdd } = useContext(CommentContext)
  const [name, setName] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAdd({ name, body })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder="Your comment" value={body} onChange={(e) => setBody(e.target.value)}/>
      <button type="submit" disabled={isLoadingAdd}>
        {isLoadingAdd ? 'Posting...' : 'Post'}
      </button>
    </form>
  )
}

export default CommentForm