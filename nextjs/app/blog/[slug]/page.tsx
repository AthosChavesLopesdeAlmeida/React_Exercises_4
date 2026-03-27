type Params = {params: Promise<{slug: string}>}

export async function generateMetadata({ params }: Params) {
  const {slug} = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  const post = await res.json()

  return {
    title: post.title,
    description: post.body,
    openGraph: {
      title: post.title,
      description: post.body,
      type: 'article'
    }
  }
}

export default async function PostDetails ({ params }: Params) {
  const {slug} = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    next:{ revalidate:60 }
  })
  const post = await res.json()

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  )
}