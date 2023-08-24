import React from 'react'
// import AdminHome from '../../Components/Admin/AdminHome'
import AdminNav from '../../Components/Admin/AdminNavbar/AdminNav'
import AdminSidebar from '../../Components/Admin/AdminNavbar/AdminSidebar'

function AdminhomePage() {
  return (
    <div style={{ fontFamily: 'Noto Serif' }}>
       <AdminNav/>
       <AdminSidebar/>
    </div>
  )
}

export default AdminhomePage
