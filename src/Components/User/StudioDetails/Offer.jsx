import React from 'react'

function Offer() {
  return (
    <div className='mt-20 mx-24'  style={{ fontFamily: "Noto Serif" }} >
      <p className='underline'>Promotions</p>
      <div className=' w-[25rem] h-[17rem] px-4 rounded-xl mt-8 bg-gradient-to-br from-red-200 to-gray-300'>
         <button className='bg-white py-1 mt-5 rounded px-5'>EXCLUSIVE</button>
         <p className='mt-4 font-bold text-[29px]'>5% Discount for your First Booking with Wedding wire</p>
         <button className='py-2 px-5 bg-red-500 mt-4 rounded text-white font-bold'>SN137</button>
      </div>
    </div>
  )
}

export default Offer
