import React from 'react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const [resPost, resComentarios] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  ])

  const post = await resPost.json()
  const comentarios = await resComentarios.json()
  
  return (
    <div>
      <section>

        <h1>Post: {post.title}</h1>
        <p>Post Body: {post.body}</p>
      </section>
      <section>
        {comentarios.map(comentario => (
          <p key={comentario.id}>{comentario.body}</p>
        ))}
      </section>
    </div>
  )
}

export default page