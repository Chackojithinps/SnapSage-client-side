import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
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
import BookingPages from '../Pages/AdminPages/BookingPages'
import UpcomingEventsPage from '../Pages/VendorPages/UpcomingEventsPage'
import UnpaidBookingsPage from '../Pages/VendorPages/UnpaidBookingsPage'
import WorkHistoryPage from '../Pages/VendorPages/WorkHistoryPage'
function VendorRouter() {
  const dispatch = useDispatch()
  useEffect(()=>{
     const vendorToken = localStorage.getItem('vendorToken')
     console.log("vendorDetailsssssssssssssssssssssssssssssss: " ,vendorToken)

     if(vendorToken){
        // console.log("vendorDetailsssssssssssssssssssssssssssssss: " ,vendorDetails)
        dispatch(addvendorDetails({token:vendorToken}))
     }
  },[])

  const vendorToken = useSelector((state)=>state.vendor.vendorToken)
  console.log("vendorToken : ",vendorToken)

  return (
    <div>
      <Routes>
        <Route path='/' element={vendorToken?<Dashboard/>:<JoinusPage/>}/>
        <Route path='/login' element={vendorToken?<Navigate to='/vendor'/>:<LoginPage/>}/>
        <Route path='/register' element={vendorToken?<Navigate to='/vendor'/>:<RegisterPage/>}/>
        <Route path='/profile' element={vendorToken?<ProfilePage/>:<Navigate to='/vendor/login'/>}/>
        <Route path='/addStudio' element={vendorToken?<AddstudioPage/>:<Navigate to='/vendor/login'/>}/>
        <Route path='/addPhotos' element={vendorToken?<AddphotosPage/>:<Navigate to='/vendor/login'/>}/>
        <Route path='/bookings' element={vendorToken?<BookingPages/>:<Navigate to='/vendor/login'/>}/>
        <Route path='/upcomingEvents' element={vendorToken?<UpcomingEventsPage/>:<Navigate to='/vendor/login'/>}/>
        <Route path='/unpaidBookings' element={vendorToken?<UnpaidBookingsPage/>:<Navigate to='/vendor/login'/>}/>
        <Route path='/workHistory' element={vendorToken?<WorkHistoryPage/>:<Navigate to='/vendor/login'/>}/>
      </Routes>
    </div>

  )
}

export default VendorRouter
