import React from 'react'

const CommentItem = ({comment, handleDelete}) => {
  return (
    <div className='comment'>
      <p><strong>{comment.name}</strong></p>
      <p>{comment.body}</p>
      <button onClick={() => handleDelete(comment.id)}>Delete</button>
    </div>
  )
}

export default CommentItem