import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login({setLogin}) {
  let [email,setEmail]=useState('');
  let [password,setPassword]=useState('');
   const navigate=useNavigate();
   
   axios.defaults.withCredentials=true
  
  const handlesubmit=(e)=>{
  e.preventDefault();
  axios.post('https://online-login-crud-authentication-ba.vercel.app/login',{email,password},{ withCredentials: true })
  .then((res)=>{console.log(res.data)
if(res.data.message=="sucess"){
  setLogin(true);
      navigate('/dashboard')
}
else{
alert(res.data.message)
navigate('/login')
}
    })
  
  }
  return (
    <>
    <form onSubmit={handlesubmit}>
      <input type="email" placeholder='enter your mail' value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder='enter your password' value={password} onChange={e=>setPassword(e.target.value)}/>
    <button type="submit">Login</button>
    </form>
    </>
  )
}

export default Login