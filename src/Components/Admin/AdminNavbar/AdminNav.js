import React from 'react'

function AdminNav() {
  return (
    
     <div className='' style={{ fontFamily: 'Noto Serif' }}>
      <nav className="bg-white border border-gray-200  p-4 flex items-center justify-between">
        <div>
          <h1 className="text-blacki text-xl font-semibold ms-10">Admin Side</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* <span className="text-black">Bienvenido</span> */}
          <button className='py-2 border text-black border-gray-500 w-[7rem]'>Sign out</button>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
      </nav>
    </div>
    
  )
}

export default AdminNav
