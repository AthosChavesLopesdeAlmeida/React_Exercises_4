"use client"

import { useState } from "react"

export default function PostsBusca({ posts }) {
  const [busca, setBusca] = useState('')

  const postsFiltrados = posts.filter(post =>
    post.title.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar posts..."
        value={busca}
        onChange={e => setBusca(e.target.value)}
      />

      <ul>
        {postsFiltrados.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}