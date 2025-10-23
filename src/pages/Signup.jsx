import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup({setLogin}) {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post('https://online-login-crud-authentication-ba.vercel.app/signup',{name,email,password},{ withCredentials: true })
    .then((res)=>{console.log(res.data);
      if(res.data.error){
        alert("user already registerd")
      }
      else{
        setLogin(true);

      navigate('/dashboard');
      }
    })
    .catch((err)=>console.log(err.message))
    
  }

  return (
<>
<form onSubmit={handlesubmit}>
  <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='enter your name'/><br/>
  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='enter your email'/><br/>
  <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='enter your password'/><br/>
  <button type="submit">Signup</button>
</form>
<Link to='/login'>Already have an account</Link>
</>
  )
}

export default Signup