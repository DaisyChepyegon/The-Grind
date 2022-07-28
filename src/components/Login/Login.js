import axios from "axios";
import React,{ Component } from "react";
import "./Login.css"
import home from "./Home.jpg"


export default class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();

    const data ={
      email: this.email,
      password: this.password,
    }
    axios.post("http://localhost:8000/register", data)
    .then(resp => {
      console.log(resp)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){

  return (
    <div className="lgn">

      <div className="img">
        <img src={home} alt="image0" height={550} width={500}/>
      </div>
      
      <div className="login">
      <h1>Login</h1>
       <form onSubmit={this.handleSubmit} className="log">
        <label>Email </label>
        <input type="email" placeholder="Email"
          onChange={e => this.email = e.target.value}
        />
        <label>Password</label>
        <input type="password" placeholder="Password"
          onChange={e => this.password = e.target.value}
         />
      
        <button>Login</button>
        </form>
      </div>
    </div>
  );
  }
}
