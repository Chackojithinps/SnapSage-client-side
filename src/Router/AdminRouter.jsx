import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoginPage from '../Pages/AdminPages/LoginPage'
import AdminhomePage from '../Pages/AdminPages/AdminhomePage'

function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminhomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </div>
  )
}

export default AdminRouter
