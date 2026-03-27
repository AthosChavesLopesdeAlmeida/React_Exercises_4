"use client"

import Link from "next/link"
import { useState } from "react"

interface Post {
  id: number
  title: string
  body: string
}

interface Props {
  posts: Post[]
}

export default function PostsSearch({ posts }: Props) {
  const [search, setSearch] = useState('')

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <input type="text" placeholder="search" value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}