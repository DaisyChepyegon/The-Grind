import React,{useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import "./Login.css"
import home from "./Home.jpg"




  function Login (setLoggedIn) {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("user-info")){
      navigate("/home")
    }
  },[])
  
 
  function handleSubmit(event) {
    let item={password,email}

    event.preventDefault();
    let result = fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
    setLoggedIn(true)
    navigate("/home")

      localStorage.setItem("user-info",JSON.stringify(result))
  }

  return (
    <div className="lgn">

      <div className="img">
        <img src={home} alt="display" height={550} width={500}/>
      </div>
      
      <div className="login">
      <h1>Login</h1>
       <form className="log">
        <label>Email </label>
        <input type="email" placeholder="Email"
        onChange={e => setEmail( e.target.value)}
        />
        <label>Password</label>
        <input type="password" placeholder="Password"
        onChange={e => setPassword( e.target.value)}
         />
      
        <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
  
}
export default Login
