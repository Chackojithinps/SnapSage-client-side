import React from 'react'
import VendorVerify from '../../Components/Admin/VendorManagement/VendorVerify'
import AdminNav from '../../Components/Admin/AdminNavbar/AdminNav'
import AdminSidebar from '../../Components/Admin/AdminNavbar/AdminSidebar'
function VendorvarifyPage() {
  return (
    <div>
          <AdminNav/>

      <div className='flex' style={{ fontFamily: 'Noto Serif' }}>
        <div>
        <AdminSidebar/>
        </div>
        <div className='bg-gray-50'>
          <VendorVerify/>
        </div>
      </div>
    </div>
  )
}

export default VendorvarifyPage

