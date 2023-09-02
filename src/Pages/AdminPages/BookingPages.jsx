import React from 'react'
import Bookings from '../../Components/Vendor/Bookings/Bookings'
import VendorSidebar from '../../Components/Vendor/VendorNav/VendorSidebar'
import VendorNav from '../../Components/Vendor/VendorNav/VendorNav'

function BookingPages() {
  return (
    <>
            <VendorNav/>

    <div className='flex'>
        <div>
            <VendorSidebar/>
        </div>
        <div>
          <Bookings/>
        </div>
    </div>
    </>
  )
}

export default BookingPages
