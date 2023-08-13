import React from 'react'

function AdminNav() {
  return (
    
        <div className=''>
      <nav className="bg-blue-500 p-4 flex items-center justify-between">
        <div>
          <h1 className="text-white text-xl font-semibold">Admin Side</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">Bienvenido</span>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
      </nav>

    </div>
    
  )
}

export default AdminNav
