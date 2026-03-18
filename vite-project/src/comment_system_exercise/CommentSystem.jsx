import PostCard from './PostCard'
import { useContext } from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import CommentContext, { CommentProvider } from './CommentContext'

const CommentContent = () => {
  const { post, comments, handleDelete } = useContext(CommentContext)

  return (
    <main>
      <section className="content_section">
        <div className="post_div">
          {post && <PostCard post={post} />}
        </div>
        <div className="comments_div">
          {comments && <CommentList comments={comments} handleDelete={handleDelete} />}
        </div>
      </section>
      <section className="form_section">
        <CommentForm/>
      </section>
    </main>
  )
}

const CommentSystem = () => {
  return (
    <CommentProvider>
      <CommentContent />
    </CommentProvider>
  )
}

export default CommentSystem