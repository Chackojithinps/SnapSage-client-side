import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArchiveIcon from '@mui/icons-material/Archive';
import RecentActorsIcon from '@mui/icons-material/RecentActors'; 
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ClassIcon from '@mui/icons-material/Class';
import ContactPageIcon from '@mui/icons-material/ContactPage';
function AdminSidebar() {
    const navigate = useNavigate()
  return (
    <div>
    <div className="bg-white text-black w-64 h-screen cursor-pointer p-4" style={{ fontFamily: 'Noto Serif' }}>
        <nav>
          <ul className="space-y-2">
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-100">
                <div className="flex items-center relative">
                  <DashboardIcon  color='primary'/>

                  <span className='mx-2'>Dashboard
                  </span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
           
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-100">
                <div onClick={()=>navigate('/admin/vendorlists')} className="flex items-center">
                  {/* <i className="fas fa-money-bill-wave mr-2"></i> */}
                  <ContactPageIcon color='action'/>
                  <span className='mx-2'>Partner</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
              
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-100">
                <div onClick={()=>navigate('/admin/vendorRequests')} className="flex items-center">
                 <ArchiveIcon  color='warning'/>
                  <span className='mx-2'>Partner Requests</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
              
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-100">
                <div className="flex items-center">
                  <AddAPhotoIcon  color='' />
                  <span className='mx-2' onClick={()=>navigate('/admin/studioVarify')}>Studio Requests</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
             
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-100">
                <div className="flex items-center">
                  <ClassIcon  color='primary'/>
                  <span className='mx-2' onClick={()=>navigate('/admin/categories')}>Categories</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
             
            </li>
            <li className="opcion-con-desplegable">
              <div className="flex items-center justify-between p-2 hover:bg-gray-100">
                <div onClick={()=>navigate('/admin/userlists')} className="flex items-center mx-1">
                  {/* <i className="fas fa-file-alt mr-2"></i> */}
                  <RecentActorsIcon color=''/>
                  <span className='mx-2' >User Lists</span>
                </div>
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
              
            </li>
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default AdminSidebar
