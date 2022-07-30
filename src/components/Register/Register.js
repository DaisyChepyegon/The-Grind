import React,{useState} from "react";
import "./Register.css"
import home from "./Home.jpg"


 function Register() {
   const [name, setName] =useState("")
   const [email, setEmail] =useState("")
   const [password, setPassword] =useState("")

  function handleSubmit(){
    let item={name,password,email}
    console.warn(item)

    fetch("http://localhost:3000/users",{
      method:"POST",
      body:JSON.stringify(item),
    })
  }

  return (
    <div className="reg">
     
      <div className="signup">
      <div className="imgs">
      <img src={home} alt="image0" height={550} width={500}/>
      </div>
      <div className="frm">
      <h1>Sign Up</h1>
      <form className="sign">
        
        <label> Name</label>
        <input type="text" placeholder="Name" 
          value={name}
          onChange={e => setName ( e.target.value)}
        />
        <label>Email </label>
        <input type="email" placeholder="Email"
          value={email}
          onChange={e => setEmail( e.target.value)}
        />
        <label>Password</label>
        <input type="password" placeholder="Password"
          value={password}
           onChange={e => setPassword( e.target.value)}
         />
        <button onClick={handleSubmit}>Sign Up</button>
        </form>
        </div>
      </div>
    </div>
  );
  
}
export default Register


