import React from 'react'
import VendorRegister from '../../Components/Vendor/VendorRegister/VendorRegister'
import VendorNav from '../../Components/Vendor/VendorNav/VendorNav'
import SectionOne from '../../Components/Vendor/VendorRegister/SectionOne'
import Footer from '../../Components/Vendor/VendorRegister/Footer'
import RegisterNav from '../../Components/Vendor/VendorRegister/RegisterNav'

function RegisterPage() {
  return (
    <div>
      <RegisterNav/>
      <VendorRegister/>
      <SectionOne/>
      <Footer/>
    </div>
  )
}

export default RegisterPage
