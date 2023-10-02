import React, { useEffect } from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import UserHomepage from '../Pages/UserPages/UserHomepage'
import RegisterPage from '../Pages/UserPages/RegisterPage'
import UserLoginpage from '../Pages/UserPages/UserLoginpage'
import UserotpPage from '../Pages/UserPages/UserotpPage'
import ProfilePage from '../Pages/UserPages/ProfilePage'
import { useDispatch, useSelector } from 'react-redux'
import StudiodetailsPage from '../Pages/UserPages/StudiodetailsPage'
import { adduserDetails, showProfile } from '../Store/userAuth'
// import UserLogin from '../Components/User/UserLogin'
import BookingsPage from '../Pages/UserPages/bookingsPage'
import PaymentPages from '../Pages/UserPages/paymentPages'
import BookingHistoryPage from '../Pages/UserPages/BookingHistoryPage'
import StudioListspage from '../Pages/UserPages/StudioListspage'
import Error404Page from '../Pages/UserPages/Error404Page'
import Error500Page from '../Pages/UserPages/Error505'
import ReviewPage from '../Pages/UserPages/ReviewPage'
import ChatBoxPage from '../Pages/UserPages/ChatBoxPage'


function UserRouter() {
  const dispatch = useDispatch()
  const userToken = useSelector((state)=>state.user.userToken)
  const userToken1 = localStorage.getItem('token')
  console.log("token again : ___________________  : ",userToken)
  console.log("userToken page : " ,userToken)

  useEffect(()=>{
    dispatch(showProfile({status:false}))
    if(localStorage.getItem('token')){
       dispatch(adduserDetails({token: localStorage.getItem('token')}))
    }
  },[])
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserHomepage/>}/>
            <Route path='/login' element={userToken?<UserHomepage />:<UserLoginpage/>}/>
            <Route path='/register' element={userToken?<UserHomepage/> :<RegisterPage/>} />
            <Route path='/getotp' element={<UserotpPage/>} />
            <Route path='/profile' element={userToken1 ? <ProfilePage /> : <Navigate to='/login'/> }/> 
            <Route path='/studioDetails/:id' element={<StudiodetailsPage/>}/> 
            <Route path='/bookings' element={userToken?<BookingsPage/>:<Navigate to='/login'/>}/>
            <Route path='/payment' element={userToken?<PaymentPages/>:<Navigate to='/login'/>}/>
            <Route path='/bookingHistory' element={userToken?<BookingHistoryPage/>:<Navigate to='/login'/>}/>
            <Route path='/studioLists' element={<StudioListspage/>}/>
            <Route path='/review' element={userToken?<ReviewPage/>:<Navigate to='/login'/>}/>
            <Route path='/chatBox' element={userToken1?<ChatBoxPage/>:<Navigate to='/login'/>}/>
            <Route path='/error404' element={<Error404Page/>}/>
            <Route path='/error503' element={<Error500Page/>}/>
            
        </Routes>
    </div>
  )
}

export default UserRouter
