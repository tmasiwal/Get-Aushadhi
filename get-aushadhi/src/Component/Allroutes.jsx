import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../page/Home'
import Calender from '../page/Calender'
import Profile from '../page/Profile'
import Product from '../page/Product'
import Cart from '../page/Cart'
const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/calender' element={<Calender/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/medicineData/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default Allroutes
