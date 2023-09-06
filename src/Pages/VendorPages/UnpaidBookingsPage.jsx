import React from 'react'
import UnpaidBookings from '../../Components/Vendor/Bookings/UnpaidBookings'
import VendorNav from '../../Components/Vendor/VendorNav/VendorNav'
import VendorSidebar from '../../Components/Vendor/VendorNav/VendorSidebar'
function UnpaidBookingsPage() {
  return (
    <div>
      <VendorNav />
      <div className='flex'>
        <VendorSidebar />
        <UnpaidBookings />
      </div>
    </div>
  )
}

export default UnpaidBookingsPage

