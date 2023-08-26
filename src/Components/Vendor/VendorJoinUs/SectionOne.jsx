import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SectionOne() {
  const navigate = useNavigate()
//  const VendorRegister = useSelector((state)=>state.vendor.message?.state.vendor.message)
 const VendorRegister = useSelector((state) => state.vendor.message);
  console.log("vendorRegister : ",VendorRegister)
  return (
    <>
      <div className='flex my-5' style={{ fontFamily: 'Noto Serif' }} >
        
        <div className='  flex flex-col gap-5 -red-500  h-[40rem] ms-28 w-[40rem]'>
          <h1 className='text-[2rem] font-bold mt-10'> <span className='font-bold' style={{fontFamily: 'Yellowtail'}}>The Knot </span>+ SnapSage</h1>
          <h1 className='text-[3rem] text-[#2e1065] font-bold' >Grow your wedding business with the industry leaders couples love</h1>
          <p className='text-xl text-gray-800'>WeddingPro combines The Knot and WeddingWire, two of the best wedding advertising marketplaces, to give you access to more couples in your area and increase your booking opportunities.</p>
          {!VendorRegister?
          <div className='mx-auto'>
          <button className='py-4 rounded bg-[#2e1065] text-white mt-5 px-4  -red-500 w-[17rem]' onClick={()=>navigate('/vendor/register')}>Let's partener together</button>
          <p className='ms-7 my-7'>Already a vendor? <span className='text-red-500 cursor-pointer hover:underline' onClick={()=>navigate('/vendor/login')}>Login</span> </p>
          </div>
          :<div><p className='text-black flex items-center justify-center font-bold text-xl mt-6 bg-gray-200 h-[3rem]'>{VendorRegister}</p></div>}
        </div>
        <div className='  -red-500 h-[40rem] w-[45rem]'>
          <img src='https://pros.weddingpro.com/wp-content/uploads/2023/07/Hero.png' alt=''/>
        </div>
      </div>
    </>
  )
}

export default SectionOne
