import CommentItem from './CommentItem'

const CommentList = ({comments, handleDelete}) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <CommentItem comment={comment} handleDelete={handleDelete} key={comment.id}/>
        )
      })}
    </div>
  )
}

export default CommentList