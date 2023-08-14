import React from 'react'
import AdminSidebar from '../AdminNavbar/AdminSidebar'

function AddCategory() {
  return (
    <div className='flex'>
       <div>
         <AdminSidebar/>
       </div>
       <div className='flex flex-col items-center justify-center h-screen w-full'>
          <div>
             <input type='text' className='border border-gray-500 py-2 px-2'placeholder='Add Categories' />
          </div>
          <div>
             <p>Bridal</p>
             <p>Bridal</p>
             <p>Bridal</p>
             <p>Bridal</p>
             <p>Bridal</p>
          </div>
       </div>
    </div>
  )
}

export default AddCategory
