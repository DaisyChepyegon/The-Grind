import React,{useState} from 'react'
import './Contact.css'

function Contact() {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phonenumber:"",
    message:"",
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
    console.log(formData)
  }


  return (
    <div className='contact'>
      <form  onSubmit={handleSubmit} className="info">
      <input 
       name="name"
       type="text"
       placeholder="name"
       onChange={handleChange}
       value={formData.name}
      
       />
      <input 
      name="email"
      type="text"
      placeholder="email"
      onChange={handleChange}
       value={formData.email}
    
       />
       <input 
      name="phone number"
      type="text"
      placeholder="phone number"
      onChange={handleChange}
       value={formData.phonenumber}
      
       />
      <textarea 
      name="message"
      placeholder="Write your message here..." rows={10}
      onChange={handleChange}
      value={formData.message}
    
       />
      <input className='btn' type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Contact
