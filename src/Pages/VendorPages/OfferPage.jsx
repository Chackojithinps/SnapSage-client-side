import React from 'react'
import Offer from '../../Components/Vendor/Offers/Offer'
import VendorNav from '../../Components/Vendor/VendorNav/VendorNav'
import VendorSidebar from '../../Components/Vendor/VendorNav/VendorSidebar'

function OfferPage() {
  return (
    <div>
      <VendorNav/>
      <div className='flex'>
      <VendorSidebar/>
      <Offer/>
      </div>
    </div>
  )
}

export default OfferPage
