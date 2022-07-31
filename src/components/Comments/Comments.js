import React from 'react'

function Comments({name, comment, key, updateComment, deleteComment}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{comment}</p>
      <botton onClick={() => {deleteComment(key)}}>Delete</botton>
    </div>
  )
}

export default Comments
