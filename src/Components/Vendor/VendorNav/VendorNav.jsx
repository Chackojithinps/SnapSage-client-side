import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { vendorLogout } from '../../../Store/vendorAuth'
import { VendorApi } from '../../../Apis/UserApi';
import axios from 'axios';

function VendorNav() {

  const [vendorData, setVendorData] = useState({})
  const dispatch = useDispatch()
  const vendorToken = JSON.parse(localStorage.getItem('vendorDetails')).vendorToken;

  // ------------------------------------- HandleLogout---------------------------------
  const handleLogout = () => {
    dispatch(vendorLogout())
    localStorage.removeItem("vendorDetails")
  }
  // ------------------------------------- getProfile---------------------------------

  const getProfile = async () => {
    const res = await axios.get(`${VendorApi}/profile`, {
      headers: {
        Authorization: `Bearer ${vendorToken}`
    }
    })
    if (res.data.success) {
      console.log("userDetail : ", res.data.vendorDetail)
      setVendorData(res.data.vendorDetail)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className=''>
      <nav className="p-4 flex items-center justify-between ">
        <div>

          <h1 className="text-black text-xl font-semibold">Vendor Side</h1>
        </div>
        <div className='flex gap-4 relative'>
          <div className="flex items-center space-x-4">
            <span className="text-black"></span>
            <i className="fas fa-user-circle text-white text-2xl"></i>
          </div>
          <div className='flex gap-7'>
            <div className="flex gap-2 cursor-pointer">

              <img src={vendorData.profile} alt="" className=" w-[40px] object-cover h-[40px] rounded-full" />
            <p className='mt-2 font-bold'>{vendorData.fname} {vendorData.lname}</p>

            </div>
            <button className="border border--500 py-2 px-5 bg-blue-500 rounded-[5px] me-10 text-white font-bold" onClick={handleLogout}>Logout</button>
          </div>
        </div>
       
      </nav>
     
    </div>
  )
}

export default VendorNav
