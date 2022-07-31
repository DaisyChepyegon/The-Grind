import React from 'react'
import Comments from './Comments'

function CommentContainer({comments, updateComment, deleteComment}) {
  console.log(comments)
  return (
    <div className='cont'>
      {comments.map((item) =>(
        <Comments 
        key={item.id}
        id={item.id}
        name={item.name}
        comment={item.comment}
        updateComment={updateComment}
        deleteComment={deleteComment}
        />
      ))}
    </div>
  )
}

export default CommentContainer
