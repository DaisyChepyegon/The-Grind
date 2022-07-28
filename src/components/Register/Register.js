import axios from "axios";
import React,{ Component } from "react";
import "./Register.css"
import home from "./Home.jpg"


export default class Register extends Component {

   handleSubmit = (event) =>{
    event.preventDefault()
    
    const data ={
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.confirmPassword,
    }
    console.log(data)

    axios.post("http://localhost:8000/register",data)
    .then(resp => {
      console.log(resp)
    })
    .catch(err => {
      console.log(err)
    })


  }

  render(){

  return (
    <div className="reg">
     
      <div className="signup">
      <div className="imgs">
      <img src={home} alt="image0" height={550} width={500}/>
      </div>
      <div className="frm">
      <h1>Sign Up</h1>
      <form onSubmit={this.handleSubmit} className="sign">
        <label>First Name</label>
        <input type="text" placeholder="First Name" 
          onChange={e => this.firstName = e.target.value}
        />
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" 
          onChange={e => this.lastName = e.target.value}
        />
        <label>Email </label>
        <input type="email" placeholder="Email"
          onChange={e => this.email = e.target.value}
        />
        <label>Password</label>
        <input type="password" placeholder="Password"
          onChange={e => this.password = e.target.value}
         />
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" 
          onChange={e => this.confirmPassword = e.target.value}
        />
        <button>Sign Up</button>
        </form>
        </div>
      </div>
    </div>
  );
  }
}


