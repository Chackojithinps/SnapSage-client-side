import React from 'react'
import { useDispatch } from 'react-redux'
import { vendorLogout } from '../../../Store/vendorAuth'
function VendorNav() {
  const dispatch = useDispatch()
  const handleLogout=()=>{
    dispatch(vendorLogout())
    localStorage.removeItem("vendorDetails")
  }
  return (
      <div className=''>
      <nav className="p-4 flex items-center justify-between">
        <div>
       
          <h1 className="text-black text-xl font-semibold">Vendor Side</h1>
        </div>
        <div className='flex gap-4'>
        <div className="flex items-center space-x-4">
          <span className="text-black">partner name</span>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
        </div>
      </nav>

    </div>
  )
}

export default VendorNav
