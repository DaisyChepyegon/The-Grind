import React,{useState, useEffect} from "react";
import axios from "axios";
import "./Login.css"
import home from "./Home.jpg"


 function Login () {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  
  function handleSubmit(){
    let item={email,password}
    console.log(item)
 
  }

  const fetchData = () =>{
    axios.get("http://localhost:3000/users")
    .then((resp => {
      setEmail(resp.item)
      console.log(resp.item)
    }))
  }

  useEffect(() => {
    fetchData()
  },[])

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
