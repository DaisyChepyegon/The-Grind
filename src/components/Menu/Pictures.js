import React from 'react'

function Pictures({image}) {
  return (
    <div>
      <img src={image} alt="images" height={200} width={200} />
    </div>
  )
}

export default Pictures
