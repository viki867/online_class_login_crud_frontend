import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'
import Users from './pages/Users'
import Update from './pages/Update'
import Create from './pages/Create'
function App() {
let [loggedIn,setLogin]=useState(false); //setlogin(true)
return (
<BrowserRouter>
  <Nav loggedIn={loggedIn} setLogin={setLogin}/>
  <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/signup' element={<Signup setLogin={setLogin} />}></Route>
      <Route path='/login' element={<Login setLogin={setLogin}/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
    
  </Routes>

</BrowserRouter>

  )
}

export default App