import Link from 'next/link'
import React from 'react'

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/ex03_posts/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page