import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import "./Login.css"
import home from "./Home.jpg"


 function Login ({onLogin}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((user) => {
        onLogin(user);
        // after logging the user in, redirect to the home page!
        navigate('/Home')
      });
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
        onChange={handleChange}
        />
        <label>Password</label>
        <input type="password" placeholder="Password"
        onChange={handleChange}
         />
      
        <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
  
}
export default Login
