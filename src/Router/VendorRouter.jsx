import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/VendorPages/Dashboard'
import LoginPage from '../Pages/VendorPages/LoginPage'
import RegisterPage from '../Pages/VendorPages/RegisterPage'
import OtpPage from '../Pages/VendorPages/OtpPage'
import ProfilePage from '../Pages/VendorPages/ProfilePage'
import { useDispatch, useSelector } from 'react-redux'
import { addvendorDetails } from '../Store/vendorAuth'
function VendorRouter() {
  const dispatch = useDispatch()
  useEffect(()=>{
     const vendorDetails = JSON.parse(localStorage.getItem('vendorDetails'))
     console.log("vendorDetails: " ,vendorDetails)
     dispatch(addvendorDetails({ name: vendorDetails.vendorName, token:vendorDetails.vendorToken }))

  },[])
  
  const vendorToken = useSelector((state)=>state.vendor.vendorToken)
  console.log("vendorToken : ",vendorToken)

  return (
    <div>
      <Routes>
        <Route path='/' element={vendorToken?<Dashboard/>:<LoginPage/>}/>
        <Route path='/login' element={vendorToken?<Dashboard/>:<LoginPage/>}/>
        <Route path='/register' element={vendorToken?<Dashboard/>:<RegisterPage/>}/>
        <Route path='/getOtp' element={<OtpPage/>}/>
        <Route path='/profile' element={vendorToken?<ProfilePage/>:<LoginPage/>}/>
      </Routes>
    </div>

  )
}

export default VendorRouter
