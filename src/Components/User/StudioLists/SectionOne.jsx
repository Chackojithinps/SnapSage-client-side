import React from 'react'

function SectionOne() {
  return (
    <div className='w-full h-[15rem] flex ' style={{fontFamily:'Noto Serif'}}>
      <div className='justify-center px-20 w-[50%] mt-6 h-[15rem] flex flex-col gap-2'>
         <p className='text-gray-400 font-bold'>Studio / Studio Vendors</p>
         <p className='font-bold text-[40px]'>Studio Vendors</p>
         <form className='flex'>
              <input
                placeholder='Search for '
                className=' my-5 -gray-500 py-3 px-4 outline-none  md:w-[14rem] lg:w-[22rem] rounded-bl rounded-tl'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              />
              <button className='py-3  -gray-500 w-[10rem] md:w-[6rem] lg:w-[10rem] h-[50px] my-5 bg-red-600 rounded-br rounded-tr'>
                <span className='text-white text-[17px]'>Find</span>
              </button>
            </form>
      </div>
      <div className=' -green-500 w-[50%] h-[15rem]'>
          <img className='object-cover w-[90%] h-[15rem]' src='https://cdn1.weddingwire.in/assets/img/home/bg_home3.jpg' alt=''/>
      </div>
    </div>
  )
}

export default SectionOne
