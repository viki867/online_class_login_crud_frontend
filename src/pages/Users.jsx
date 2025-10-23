import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './User.css'
import toast from 'react-hot-toast';
function Users() {
  let [data,setData]=useState([]);
  useEffect(()=>{
  axios.get('https://online-login-crud-authentication-ba.vercel.app/getuser',{ withCredentials: true })
  .then((res)=>{
  console.log(res.data)
  setData(res.data)
  })
  },[])
  
  const handledelete=(id)=>{
  axios.delete(`https://online-login-crud-authentication-ba.vercel.app/deleteuser/`+id,{ withCredentials: true })
  .then((res)=>{
  
  toast.success(res.data.message)
      axios.get('https://online-login-crud-authentication-ba.vercel.app/getuser',{ withCredentials: true })
      .then((res)=>setData(res.data))
  }
)}
  
  return (
 <div className="users-container">
    <div className="header">
        <h2>User List</h2>
        <Link to='/create' className="add-btn">Add User</Link>
    </div>


<table className="user-table">
<thead>
<tr>
<th>S.No</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{(data.length==0)?(
    <tr>
      <td colSpan="5" className="no-data">No Data Found</td>
    </tr>
):(data.map((u, index) => (
<tr key={u._id}>
<td>{index + 1}</td>
<td>{u.name}</td>
<td>{u.email}</td>
<td>{u.phone}</td>
<td>
<button className="update-btn">
    <Link to={`/update/`+u._id}>Update</Link>
</button>
<button className="delete-btn" onClick={() => handledelete(u._id)}>Delete</button>
</td>
</tr>
)))}
</tbody>
</table>
</div>
  )
}

export default Users
