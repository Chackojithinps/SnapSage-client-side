import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/VendorPages/Dashboard'
import LoginPage from '../Pages/VendorPages/LoginPage'
import RegisterPage from '../Pages/VendorPages/RegisterPage'
import OtpPage from '../Pages/VendorPages/OtpPage'
import ProfilePage from '../Pages/VendorPages/ProfilePage'
import { useDispatch, useSelector } from 'react-redux'
import { addvendorDetails } from '../Store/vendorAuth'
import AddstudioPage from '../Pages/VendorPages/AddstudioPage'
import AddphotosPage from '../Pages/VendorPages/AddphotosPage'
import JoinusPage from '../Pages/VendorPages/JoinusPage'
function VendorRouter() {
  const dispatch = useDispatch()
  useEffect(()=>{
     const vendorDetails = JSON.parse(localStorage.getItem('vendorDetails'))
     if(vendorDetails){
        console.log("vendorDetails: " ,vendorDetails)
        dispatch(addvendorDetails({ name: vendorDetails.vendorName, token:vendorDetails.vendorToken }))
     }
  },[])
  
  const vendorToken = useSelector((state)=>state.vendor.vendorToken)
  console.log("vendorToken : ",vendorToken)

  return (
    <div>
      <Routes>
        {/* <Route path='/' element={vendorToken?<Dashboard/>:<LoginPage/>}/> */}
        <Route path='/login' element={vendorToken?<Dashboard/>:<LoginPage/>}/>
        <Route path='/register' element={vendorToken?<Dashboard/>:<RegisterPage/>}/>
        <Route path='/getOtp' element={<OtpPage/>}/>
        <Route path='/profile' element={vendorToken?<ProfilePage/>:<LoginPage/>}/>
        <Route path='/addStudio' element={vendorToken?<AddstudioPage/>:<LoginPage/>}/>
        <Route path='/addPhotos' element={vendorToken?<AddphotosPage/>:<LoginPage/>}/>
        <Route path='/' element={<JoinusPage/>}/>
      </Routes>
    </div>

  )
}

export default VendorRouter
