import React,{useState} from 'react'
import './Contact.css'
import home from './Home.jpg'

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
    <>
    <div className='contact'>

    <div>
     <img src={home} alt="image0" height={550} width={500}/>
    </div>
    <div>
      
      <form  onSubmit={handleSubmit} className="info">
      v
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
    </div>

    <div className="Map" id="Map">
            <iframe title="MapLink" className="MapLink" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19442.651250298743!2d13.321824!3d52.473135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7177f67d9c0767b4!2swild+caff%C3%A8!5e0!3m2!1sde!2sus!4v1543937031005" allowFullScreen></iframe>
    </div>
   
</>
  )
}

export default Contact
