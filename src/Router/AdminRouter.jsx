import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoginPage from '../Pages/AdminPages/LoginPage'
import AdminhomePage from '../Pages/AdminPages/AdminhomePage'
import UserlistPages from '../Pages/AdminPages/UserlistPages'
import VendorlistPage from '../Pages/AdminPages/VendorlistPage'

function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminhomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/userlists' element={<UserlistPages/>}/>
        <Route path='/vendorlists' element={<VendorlistPage/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
