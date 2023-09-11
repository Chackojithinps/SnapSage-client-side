import React from 'react'
import VendorNav from '../../Components/Vendor/VendorNav/VendorNav'
import VendorSidebar from '../../Components/Vendor/VendorNav/VendorSidebar'
import AddOffer from '../../Components/Vendor/Offers/AddOffer'

function AddOfferPage() {
  return (
    <div>
      <VendorNav/>
      <div className='flex'>
         <VendorSidebar/>
         <AddOffer/>
      </div>
    </div>
  )
}

export default AddOfferPage
