import React from 'react'
import Signup from './Signup'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Home'
import Details from './Details'
import Cart from './Cart'
import Login from './Login'
import Nav from './Nav'




function Allroutes() {
  return (
    <div>
           <Nav> </Nav>
    <Routes>
     <Route path = "/" element={<Home/>}></Route>
     <Route path = "/Login" element={<Login/>}></Route>
     <Route path = "/Signup" element={<Signup/>}></Route>
     <Route path = "/Details/:id" element={<Details/>}></Route>
     <Route path = "Cart" element={<Cart/>}></Route>

     </Routes>

    </div>
  )
}

export default Allroutes