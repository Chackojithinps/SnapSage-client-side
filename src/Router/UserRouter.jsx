import React from 'react'
import {Routes,Route} from 'react-router-dom'
import UserHomepage from '../Pages/UserPages/UserHomepage'
import RegisterPage from '../Pages/UserPages/RegisterPage'
import UserLoginpage from '../Pages/UserPages/UserLoginpage'
import UserotpPage from '../Pages/UserPages/UserotpPage'
import ProfilePage from '../Pages/UserPages/ProfilePage'
function UserRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserHomepage/>}/>
            <Route path='/login' element={<UserLoginpage/>}/>
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/getotp' element={<UserotpPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
            
        </Routes>
    </div>
  )
}

export default UserRouter
