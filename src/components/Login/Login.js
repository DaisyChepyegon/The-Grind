import { useRef, useState, useEffect } from "react"


function Login() {
  const userRef= useRef();
  const errRef = useRef();

  const [user, setUser] =useState('');
  const [password, setPassword] =useState('');
  const [errMsg, setErrMsg] =useState('');

  return (
    <div>
      
    </div>
  )
}

export default Login
