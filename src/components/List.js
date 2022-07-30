import React from 'react'
import { FaRegHeart } from "react-icons/fa";



function List({name}) {
  return (
   
    <ul>
      <li>{name} <FaRegHeart /></li>
    
    </ul>
   

  )
}

export default List
