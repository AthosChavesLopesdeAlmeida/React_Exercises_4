import PostsSearch from "./PostsSearch"

export default async function Blog () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate:60 }
  })
  const posts = await res.json()

  return (
    <main>
      <h1>Blog</h1>
      <PostsSearch posts={posts}/>
    </main>
  )
}