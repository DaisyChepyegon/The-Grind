import React from 'react'

function Comments({name, comment, id, updateComment, deleteComment}) {
  
  console.log()
  return (
    <div className='flex'>
      <div className='comment'>
      <h3>{name}</h3>
      <p>{comment}</p>
      </div>
      
      <button className='delete' onClick={() => {deleteComment(id)}}>Delete</button>
    </div>
  )
}

export default Comments
