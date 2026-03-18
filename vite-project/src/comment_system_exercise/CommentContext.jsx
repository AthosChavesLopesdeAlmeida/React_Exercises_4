import { createContext, useState, useEffect } from "react";

const CommentContext = createContext()

function CommentProvider ({ children }) {
  const [comments, setComments] = useState([])
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)
  const [isLoadingAdd, setIsLoadingAdd] = useState(false)
  const [isLoadingDelete, setIsLoadingDelete] = useState(null)


  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [postResult, commentsResult] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts/1'),
          fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        ])

        if (!postResult.ok) throw new Error(`Error fetching post: ${postResult.status}`)
        if (!commentsResult.ok) throw new Error(`Error fetching comments: ${commentsResult.status}`)

        const postData = await postResult.json()
        const commentsData = await commentsResult.json() 
        
        setPost(postData)
        setComments(commentsData)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchInitialData()
  }, [])

  const handleDelete = async (id) => {
    setIsLoadingDelete(id)

    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'DELETE'
      })

      if (!result.ok) throw new Error(`Error deleting: ${result.status}`)
      
      setComments(comments.filter(comment => comment.id !== id))
    } catch (error) {
      setError(error.message)
      setIsLoadingDelete(null)
    }
  }

  const handleAdd = async ({name, body}) => {
    if (!name || !body) return

    setIsLoadingAdd(true)
    setError(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      const result = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          postId: 1,
          name,
          body
        })
      })

      if (!result.ok) throw new Error(`Erro ao adicionar comentário: ${result.status}`)

      const newComment = await result.json()
      setComments([...comments, newComment])
      console.log('Added comment!')
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoadingAdd(false)
    }
  }

  const value = {
    handleAdd,
    handleDelete,
    post,
    comments,
    error,
    isLoadingAdd,
    isLoadingDelete
  }

  return (
    <CommentContext.Provider value={value}>
      {children}
    </CommentContext.Provider>
  )
}

export {CommentProvider}
export default CommentContext