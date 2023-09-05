import React from 'react'
import UpcomingEvents from '../../Components/Vendor/Bookings/UpcomingEvents'
import VendorNav from '../../Components/Vendor/VendorNav/VendorNav'
import VendorSidebar from '../../Components/Vendor/VendorNav/VendorSidebar'

function UpcomingEventsPage() {
  return (
    <div>
      <VendorNav/>
      <div className='flex'>
        <VendorSidebar/>
      <UpcomingEvents/>
      </div>
        
    </div>
  )
}

export default UpcomingEventsPage

