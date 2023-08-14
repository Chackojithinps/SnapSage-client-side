import React from 'react'
import {Routes,Route, useNavigate,Navigate} from 'react-router-dom'
import UserHomepage from '../Pages/UserPages/UserHomepage'
import RegisterPage from '../Pages/UserPages/RegisterPage'
import UserLoginpage from '../Pages/UserPages/UserLoginpage'
import UserotpPage from '../Pages/UserPages/UserotpPage'
import ProfilePage from '../Pages/UserPages/ProfilePage'
import { useSelector } from 'react-redux'
function UserRouter() {
  const userToken = useSelector((state)=>state.user.userToken)
  console.log("userToken page : " ,userToken)
  const navigate=useNavigate()
  return (

    <div>
        <Routes>
            <Route path='/' element={<UserHomepage/>}/>
            <Route path='/login' element={userToken?<UserHomepage/>:<UserLoginpage/>}/>
            <Route path='/register' element={userToken?<UserHomepage /> :<RegisterPage/>} />
            <Route path='/getotp' element={<UserotpPage/>} />
            {/* <Route  path='/profile' element={userToken?<ProfilePage/>:navigate('/login')} /> */}
            <Route path='/profile' element={userToken ? <ProfilePage /> : <UserLoginpage/> }/> 
            
        </Routes>
    </div>
  )
}

export default UserRouter
