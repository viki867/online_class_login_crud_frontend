import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import './create.css'
function Update() {

let [name,setName]=useState('');
let [email,setEmail]=useState('');
let [phone,setPhone]=useState('');

let {id}=useParams();

console.log(id);

useEffect(()=>{
axios.get(`https://online-login-crud-authentication-ba.vercel.app/getuser/${id}`)
.then((res)=>{console.log(res.data)
let user=res.data;
console.log(user);
//user=[{name:"info",email:"ss",phone:"1234"},{},{},{}]
//user[0]={name:"info",email:"ss",phone:"1234"}
console.log(user[0].name);
setName(user[0].name);
setEmail(user[0].email);
setPhone(user[0].phone);
})
},[id])

const handlesubmit=(e)=>{
e.preventDefault();
axios.put(`https://employee-management-backend-xi.vercel.app/updateuser/${id}`,{name,email,phone},{ withCredentials: true })
.then((res)=>{
if(res.data.message){
toast.success(res.data.message)
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
<button type="submit" className="submit-btn">Update User</button>
</form>
</div>
</>
  )
}

export default Update
