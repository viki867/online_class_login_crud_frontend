import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
let [email,setEmail]=useState('');

axios.defaults.withCredentials=true;

useEffect(()=>{
axios.get('https://online-login-crud-authentication-ba.vercel.app/dashboard')
.then((res)=>{
console.log(res.data.message);
setEmail(res.data.email)
})
})
  return (
    <div>
    {email}

    Dashboard</div>
  )
}

export default Dashboard