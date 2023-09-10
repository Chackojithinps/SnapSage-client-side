import React from 'react'
import { useDispatch } from 'react-redux'
import { adminLogout } from '../../../Store/AdminAuth'
import { useNavigate } from 'react-router-dom'
function AdminNav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () =>{
    try {
       localStorage.removeItem('AdminToken')
       dispatch(adminLogout())
       navigate('/admin')
    } catch (error) {
      console.log("error : ",error.message)
    }
  }
  return (
    
     <div className='' style={{ fontFamily: 'Noto Serif' }}>
      <nav className="bg-white border border-gray-200  p-4 flex items-center justify-between">
        <div>
          <h1 className="text-blacki text-xl font-semibold ms-10">Admin Side</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* <span className="text-black">Bienvenido</span> */}
          <button className='py-2 border text-black border-gray-500 w-[7rem]' onClick={handleLogout}>Sign out</button>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
      </nav>
    </div>
  )
}

export default AdminNav
