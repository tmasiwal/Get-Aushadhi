import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../page/Home'
import Calender from '../page/Calender'
import Profile from '../page/Profile'
const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/calender' element={<Calender/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}

export default Allroutes
