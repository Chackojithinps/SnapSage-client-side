import React from 'react'

function SectionTwo() {
  return (
    <>
       <div className='flex my-[5rem]'style={{ fontFamily: 'Noto Serif' }} >
        
       
        <div className=' ms-28 -red-500 h-[20rem] w-[45rem]'>
          <img className='w-[40rem]' src='https://pros.weddingpro.com/wp-content/uploads/2023/07/Photo-17-e1690491335739.png' alt=''/>
        </div>
        <div className='  flex flex-col gap-5 -red-500  h-[20rem] w-[40rem]'>
          {/* <h1 className='text-[2rem] font-bold mt-10'> <span className='font-bold' style={{fontFamily: 'Yellowtail'}}>The Knot </span>+ SnapSage</h1> */}
          <h1 className='text-[2rem] mt-[3rem] text-[#2e1065] font-bold' >Boost your business’ credibility</h1>
          <p className='w-[31rem] text-gray-800'>Build your reputation by investing in wedding advertising on The Knot and WeddingWire, two of the most trusted wedding marketplaces hosting more than 9 million couple reviews.</p>
          <button className='py-4 rounded  text-black border border-[#2e1065] hover:bg-[#2e1065] hover:text-white mt-5 px-4  -red-500 w-[17rem]'>Know More</button>
        </div>
      </div>
    </>
  )
}

export default SectionTwo
