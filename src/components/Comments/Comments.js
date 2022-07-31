import React from 'react'

function Comments({name, comment, id, updateComment, deleteComment}) {
  
  console.log()
  return (
    <div>
      <h3>{name}</h3>
      <p>{comment}</p>
      <button onClick={() => {deleteComment(id)}}>Delete</button>
    </div>
  )
}

export default Comments
