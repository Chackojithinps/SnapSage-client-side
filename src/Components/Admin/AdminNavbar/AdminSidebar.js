import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminSidebar() {
    const navigate = useNavigate()
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <nav>
          <ul className="space-y-2">
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>Dashboard
                  </span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
           
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div onClick={()=>navigate('/admin/vendorlists')} className="flex items-center">
                  <i className="fas fa-money-bill-wave mr-2"></i>
                  <span>Partner</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
              
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-chart-bar mr-2"></i>
                  <span onClick={()=>navigate('/admin/category')}>Categories</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
              <ul className="desplegable ml-4 hidden">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Presupuestos
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Informe médico
                  </a>
                </li>
              </ul>
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div onClick={()=>navigate('/admin/userlists')} className="flex items-center">
                  <i className="fas fa-file-alt mr-2"></i>
                  <span>User Lists</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
              <ul className="desplegable ml-4 hidden">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Firmas pendientes
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                     Userlists
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default AdminSidebar
