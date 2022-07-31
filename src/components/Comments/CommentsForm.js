import React,{useState} from 'react'
import './Contact.css'
import home from './Home.jpg'

function CommentsForm({addcomment}) {

  const [formData, setFormData] = useState({
    name:"",
    comment:""
    
  })

  function handleChange(event){
    const name = event.target.name
    let value = event.target.value

    setFormData({
      ...formData,
      [name]:value,
    })
    //console.log(formData)
  }

  const handleSubmit=(event) =>{
    event.preventDefault()
    addcomment(formData)
    console.log(formData)
  }


  return (
    <>
    <div className='contact'>

    <div>
     <img src={home} alt="image0" height={550} width={500}/>
    </div>
    <div>
      
      <form  onSubmit={handleSubmit} className="info">
      <h2>Contact Us</h2>
      <input 
       name="name"
       type="text"
       placeholder="name"
       onChange={handleChange}
       value={formData.name}
      
       />
      <textarea 
      name="comment"
      placeholder="Write your comment here..." rows={8}
      onChange={handleChange}
      value={formData.comment}
    
       />
      <input className='btn' type="submit" value="Send" />
    </form>
    </div>
    </div>

   
</>
  )
}

export default CommentsForm
