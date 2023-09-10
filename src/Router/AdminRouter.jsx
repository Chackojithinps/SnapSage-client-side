import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import LoginPage from '../Pages/AdminPages/LoginPage'
import AdminhomePage from '../Pages/AdminPages/AdminhomePage'
import UserlistPages from '../Pages/AdminPages/UserlistPages'
import VendorlistPage from '../Pages/AdminPages/VendorlistPage'
import CategoryPage from '../Pages/AdminPages/CategoryPage'
import VendorvarifyPage from '../Pages/AdminPages/VendorvarifyPage'
import { useDispatch, useSelector } from 'react-redux'
import { addAdminDetails } from '../Store/AdminAuth'
import StudiovarifyPage from '../Pages/AdminPages/StudiovarifyPage'

function AdminRouter() {
  const dispatch = useDispatch()
  const adminToken = useSelector((state)=>state.admin.AdminToken)
  console.log("adminToken inrouter page : ",adminToken)


  useEffect(()=>{
     if(localStorage.getItem("AdminToken")){
       const AdminDetails =localStorage.getItem('AdminToken')
       console.log("admintoken in router page 2 ")
       dispatch(addAdminDetails({"token":AdminDetails}))
     }
  },[])


  return (
    <div>
      <Routes>
        <Route path='/' element={adminToken?<AdminhomePage/>:<LoginPage/>} />
        <Route path='/userlists' element={adminToken?<UserlistPages/>:<LoginPage/>}/>
        <Route path='/vendorlists' element={adminToken?<VendorlistPage/>:<LoginPage/>}/>
        <Route path='/categories' element={adminToken?<CategoryPage/>:<LoginPage/>} />
        <Route path='/vendorRequests' element={adminToken?<VendorvarifyPage/>:<LoginPage/>} />
        <Route path='/studioVarify' element={adminToken?<StudiovarifyPage/>:<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
