import React, { useEffect } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import LoginPage from '../Pages/AdminPages/LoginPage'
import AdminhomePage from '../Pages/AdminPages/AdminhomePage'
import UserlistPages from '../Pages/AdminPages/UserlistPages'
import VendorlistPage from '../Pages/AdminPages/VendorlistPage'
import CategoryPage from '../Pages/AdminPages/CategoryPage'
import VendorvarifyPage from '../Pages/AdminPages/VendorvarifyPage'
import { useDispatch, useSelector } from 'react-redux'
import { addAdminDetails } from '../Store/AdminAuth'
import StudiovarifyPage from '../Pages/AdminPages/StudiovarifyPage'
import ChatBoxPage from '../Pages/AdminPages/ChatBoxPage'

function AdminRouter() {
  const dispatch = useDispatch()
  const adminToken = useSelector((state)=>state.admin.AdminToken)
  console.log("adminToken inrouter page : ",adminToken)

  useEffect(()=>{
     if(localStorage.getItem("token")){
       const AdminDetails =localStorage.getItem('token')
       console.log("admintoken in router page 2 ")
       dispatch(addAdminDetails({"token":AdminDetails}))
     }
  },[])

  return (
    <div>
      <Routes>
        <Route path='/' element={adminToken?<AdminhomePage/>:<Navigate to='/admin/login'/>}/>
        <Route path='/login' element={adminToken?<Navigate to='/admin' />:<LoginPage/>} />
        <Route path='/userlists' element={adminToken?<UserlistPages/>:<Navigate to='/admin/login' />}/>
        <Route path='/vendorlists' element={adminToken?<VendorlistPage/>:<Navigate to='/admin/login' />}/>
        <Route path='/categories' element={adminToken?<CategoryPage/>:<Navigate to='/admin/login'/>} />
        <Route path='/vendorRequests' element={adminToken?<VendorvarifyPage/>:<Navigate to='/admin/login'/>} />
        <Route path='/studioVarify' element={adminToken?<StudiovarifyPage/>:<Navigate to='/admin/login'/>}/>
        <Route path='/chatBox' element={adminToken?<ChatBoxPage/>:<Navigate to='/admin/login'/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
