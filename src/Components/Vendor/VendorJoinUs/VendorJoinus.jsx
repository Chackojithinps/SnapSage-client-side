import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function VendorJoinus() {
  const navigate = useNavigate()
 const VendorRegister = useSelector((state) => state.vendor.message);

  return (
    <>
     <div className='' style={{ fontFamily: 'Noto Serif' }} >
      <nav className="p-4 flex items-center justify-between">
        <div>
       
          <h1 className="text-black text-3xl font-semibold ">SnapSage</h1>
        </div>
        <div className='flex gap-4'>
        <div className="flex items-center space-x-4">
          <span className="text-black me-5">About us</span>
          {VendorRegister?<button className='py-2 text-white w-[8rem] rounded-3xl px-2 border border-[#2e1065] bg-[#2e1065] ' onClick={()=>navigate('/vendor/register')}>Know more</button>:
          <button className='py-2 text-white w-[8rem] rounded-3xl px-2 border border-[#2e1065] bg-[#2e1065] ' onClick={()=>navigate('/vendor/register')}>Join us</button>}
        </div>
        <div>
          <button ></button>
        </div>
        </div>
      </nav>

    </div>
    </>
  )
}

export default VendorJoinus
