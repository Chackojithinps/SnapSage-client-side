import React from 'react'
import UserLists from '../../Components/Admin/UserManagement/UserLists'
import AdminNav from '../../Components/Admin/AdminNavbar/AdminNav'

function UserlistPages() {
  return (
    <div style={{ fontFamily: 'Noto Serif' }}>
       <AdminNav/>
       
       <UserLists/>
    </div>
  )
}

export default UserlistPages
