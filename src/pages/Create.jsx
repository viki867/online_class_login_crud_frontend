import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './create.css'
function Create() {
let [name,setName]=useState('');
let [email,setEmail]=useState('');
let [phone,setPhone]=useState('');
const handlesubmit=(e)=>{
e.preventDefault();
axios
axios.post('https://online-login-crud-authentication-ba.vercel.app/adduser',{name,email,phone}, { withCredentials: true })
.then((res)=>{
if(res.data.message){
toast.success(res.data.message,{position:"top-center"});
setPhone('');
setName('');
setEmail('')
}

})
}

  return (
   <>
<div className="container">

<button className="back-btn"><Link to='/users'>Back</Link></button>


<form onSubmit={handlesubmit} className="form">
<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter your name' />
<input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter your email' />
<input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder='Enter your phone' />
<button type="submit" className="submit-btn">Add User</button>
</form>
</div>
</>
  )
}

export default Create
