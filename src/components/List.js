import React from 'react'
import { FaRegHeart } from "react-icons/fa";

function List({name}) {
  return (
    <>
    
    <ul>
      {name}
      <br />
      <FaRegHeart />
    </ul>
    </>

  )
}

export default List
