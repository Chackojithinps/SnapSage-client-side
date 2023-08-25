import React from 'react'
import AdminNav from '../../Components/Admin/AdminNavbar/AdminNav'
import VendorLists from '../../Components/Admin/VendorManagement/VendorLists'
import AdminSidebar from '../../Components/Admin/AdminNavbar/AdminSidebar'

function VendorlistPage() {
  return (
    <>
       <AdminNav/>

    <div className='flex' style={{ fontFamily: 'Noto Serif' }}>
      <div>
        <AdminSidebar/>
      
      </div>
      <div className='bg-gray-50'>

       <VendorLists/>
      </div>
    </div>
    </>
  )
}

export default VendorlistPage
