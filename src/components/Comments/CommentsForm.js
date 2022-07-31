import React,{useState} from 'react'


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
   
      
      <form  onSubmit={handleSubmit} className="info">
      <h2>Comments Section</h2>
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
    
  )
}

export default CommentsForm
