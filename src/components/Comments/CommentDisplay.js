import React,{useState, useEffect} from 'react'
import axios from 'axios'
import CommentContainer from './CommentContainer'
import CommentsForm from './CommentsForm'
import home from './Home.jpg'
import "./Comment.css"

function CommentDisplay() {
  const [comments, setComments] =useState([])


  const getComments = () =>{
    axios.get("http://localhost:3000/comments")
    .then((resp => {
      setComments(resp.data)
      // console.log(resp.data)
    }))
  }

  const addData =(newdata) =>{
    axios.post("http://localhost:3000/comments", newdata)
  }

  const addcomment=(newData) => {
    setComments(
      [...comments,newData]
    )
    addData(newData)
  }
  const updateComment= async (id,objdata) => {
    return await axios.patch(`${"http://localhost:3000/comments"}/${id}`,objdata)
 
   }
   const updatedom =(id)=>{
     let update =  comments.filter((comment) => 
       comment.id !== id)
       setComments(update)
   }
   const deleteComment=(id) => {
    updatedom(id);
    axios.delete(`${"http://localhost:3000/comments"}/${id}`)
  
    }


  useEffect(() => {
    getComments()
  },[])

  return (
    <div className='contact'>
    <div>
      <img src={home} alt="image0" height={750} width={600}/>
    </div>
    <div>
      <CommentsForm addcomment={addcomment} />
    
      <CommentContainer 
          comments={comments}
          deleteComment={deleteComment}
          updateComment={updateComment}
      />
      </div>
    </div>
  )
}

export default CommentDisplay
