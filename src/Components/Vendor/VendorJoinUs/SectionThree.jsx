import React from 'react'

function SectionThree() {
  return (
    <div>
       <div className='flex'style={{ fontFamily: 'Noto Serif' }} >
        
       <div className=' ms-28 mt-10 flex flex-col gap-5  -red-500  h-[30rem] w-[40rem]'>
          {/* <h1 className='text-[2rem] font-bold mt-10'> <span className='font-bold' style={{fontFamily: 'Yellowtail'}}>The Knot </span>+ SnapSage</h1> */}
          <h1 className='w-[37rem] text-[2rem] mt-[4rem] text-[#2e1065] font-bold' >Monitor your business growth and advertising with ease</h1>
          <p className='w-[37rem] text-gray-800'>Our robust Insights tool measures your performance from every interaction to make it easy for you to view, track and understand the ROI of partnering with us.</p>
          <button className='py-4 rounded hover:bg-[#2e1065] hover:text-white  text-black border border-[#2e1065] mt-5 px-4  -red-500 w-[17rem]'>Get in touch</button>
        </div>
        <div className=' -red-500 mt-10 h-[30rem] w-[45rem]'>
          <img className='w-[40rem] ms-10' src='https://pros.weddingpro.com/wp-content/uploads/2023/07/Homepage_Insights.png' alt=''/>
        </div>
       
      </div>
    </div>
  )
}

export default SectionThree
