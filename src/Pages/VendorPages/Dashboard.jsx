import React from 'react'
import VendorHome from '../../Components/Vendor/VendorSidebar'
import VendorSidebar from '../../Components/Vendor/VendorSidebar'
import Vendordashboard from '../../Components/Vendor/VendorDashboard/Vendordashboard'
import VendorNav from '../../Components/Vendor/VendorNav'

function Dashboard() {
  return (
    <div>
      <VendorNav/>
      <Vendordashboard/>
    </div>
  )
}

export default Dashboard
