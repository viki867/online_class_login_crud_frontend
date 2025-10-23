import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './nav.css'
function Nav({loggedIn,setLogin}) {
let navigate=useNavigate();
//(condition)?true:false
  return (
    <>
    <nav>
        <h1>viki_cutx</h1>
        <div className='links'>
          
            {loggedIn? ( <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to='/users'>View</Link>
            <button onClick={() => {setLogin(false);navigate("/login");}}>Logout</button>
          </>):
            (<>
              <Link to='/'>Home</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link></>)
        
            }
            
        </div>
    </nav>
    </>
  )
}

export default Nav