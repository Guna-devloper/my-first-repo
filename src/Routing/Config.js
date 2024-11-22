import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Signup from '../Components/SignUp/Signup'
import Home from '../Components/Home/Home'

const Config = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Home/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Config
