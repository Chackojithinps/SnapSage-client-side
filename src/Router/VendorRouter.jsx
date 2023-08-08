import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/VendorPages/Dashboard'
import LoginPage from '../Pages/VendorPages/LoginPage'
import RegisterPage from '../Pages/VendorPages/RegisterPage'
import OtpPage from '../Pages/VendorPages/OtpPage'

function VendorRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/getOtp' element={<OtpPage/>}/>
      </Routes>
    </div>
  )
}

export default VendorRouter
