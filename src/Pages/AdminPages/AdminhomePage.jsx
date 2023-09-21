import React from 'react'
// import AdminHome from '../../Components/Admin/AdminHome'
import AdminNav from '../../Components/Admin/AdminNavbar/AdminNav'
import AdminSidebar from '../../Components/Admin/AdminNavbar/AdminSidebar'
import AdminHome from '../../Components/Admin/AdminDashboard/AdminHome'

function AdminhomePage() {
  return (
    <div style={{ fontFamily: 'Noto Serif' }}>
      <AdminNav />
      <div className='flex'>
        <AdminSidebar />
        <AdminHome />
      </div>
    </div>
  )
}

export default AdminhomePage
