import React from 'react'
import AddCategory from '../../Components/Admin/Categories/AddCategory'
import AdminNav from '../../Components/Admin/AdminNavbar/AdminNav'
import AdminSidebar from '../../Components/Admin/AdminNavbar/AdminSidebar'

function CategoryPage() {
  return (
    <div>
      <AdminNav/>
      <AddCategory/>
    </div>
  )
}

export default CategoryPage
