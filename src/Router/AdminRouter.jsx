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
  const adminToken = useSelector((state)=>state.admin.adminToken)
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
        {/* <Route path='/login' element={adminToken?<LoginPage/>} /> */}
        <Route path='/userlists' element={<UserlistPages/>}/>
        <Route path='/vendorlists' element={<VendorlistPage/>}/>
        <Route path='/categories' element={<CategoryPage/>} />
        <Route path='/vendorRequests' element={<VendorvarifyPage/>} />
        <Route path='/studioVarify' element={<StudiovarifyPage/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
