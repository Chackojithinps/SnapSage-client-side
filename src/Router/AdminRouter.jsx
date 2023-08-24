import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoginPage from '../Pages/AdminPages/LoginPage'
import AdminhomePage from '../Pages/AdminPages/AdminhomePage'
import UserlistPages from '../Pages/AdminPages/UserlistPages'
import VendorlistPage from '../Pages/AdminPages/VendorlistPage'
import CategoryPage from '../Pages/AdminPages/CategoryPage'
import VendorvarifyPage from '../Pages/AdminPages/VendorvarifyPage'

function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminhomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/userlists' element={<UserlistPages/>}/>
        <Route path='/vendorlists' element={<VendorlistPage/>}/>
        <Route path='/categories' element={<CategoryPage/>} />
        <Route path='/vendorRequests' element={<VendorvarifyPage/>} />
      </Routes>
    </div>
  )
}

export default AdminRouter
