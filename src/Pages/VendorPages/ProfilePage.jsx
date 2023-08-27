import React from 'react'
import VendorProfile from '../../Components/Vendor/VendorProfile/VendorProfile'
import VendorNav from '../../Components/Vendor/VendorNav/VendorNav'
import Footer from '../../Components/Vendor/Footer/Footer'
function ProfilePage() {
  return (
    <div className=''>
      <VendorNav/>
      <VendorProfile/>
      <Footer/>
    </div>
  )
}

export default ProfilePage
