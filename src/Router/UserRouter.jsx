import React, { useEffect } from 'react'
import {Routes,Route} from 'react-router-dom'
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


function UserRouter() {
  const dispatch = useDispatch()
  const userToken = useSelector((state)=>state.user.userToken)
  console.log("userToken page : " ,userToken)

  useEffect(()=>{
    dispatch(showProfile({status:true}))

    if(localStorage.getItem('token')){

       dispatch(adduserDetails({token: localStorage.getItem('token') }))
    }
  },[])
  return (

    <div>
        <Routes>
            <Route path='/' element={<UserHomepage/>}/>
            <Route path='/login' element={userToken?<UserHomepage/>:<UserLoginpage/>}/>
            <Route path='/register' element={userToken?<UserHomepage /> :<RegisterPage/>} />
            <Route path='/getotp' element={<UserotpPage/>} />
            {/* <Route  path='/profile' element={userToken?<ProfilePage/>:navigate('/login')} /> */}
            <Route path='/profile' element={userToken ? <ProfilePage /> : <UserLoginpage/> }/> 
            <Route path='/studioDetails/:id' element={<StudiodetailsPage/>}/> 
            <Route path='/bookings' element={userToken?<BookingsPage/>:<UserLoginpage/>}/>
            
        </Routes>
    </div>
  )
}

export default UserRouter
