import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostCard