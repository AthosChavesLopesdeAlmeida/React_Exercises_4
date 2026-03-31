import PostsBusca from './PostsBusca.jsx'

export default async function Posts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <main>
      <h1>Posts</h1>
      <PostsBusca posts={posts} />
    </main>
  )
}