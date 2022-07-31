import React from 'react'
import Comments from './CommentsForm'

function CommentContainer({comments, updateComment, deleteComment}) {
  return (
    <div className='cont'>
      {comments.map((comment) =>(
        <Comments 
        key={comment.id}
        name={comment.name}
        comment={comment.comment}
        updateComment={updateComment}
        deleteComment={deleteComment}
        />
      ))}
    </div>
  )
}

export default CommentContainer
