// import React from 'react'

// function SectionOne() {
//   return (
//     <>
//       <div className='flex flex-col md:flex-row border border-green-500 h-[24rem] w-[100vw] overscroll-none'>
//          <div className='w-[100%] md:w-[45%] flex border border-black items-center justify-center'>
//              <div className='w-3/4 '>
//              <p className='text-black my-5 font-bold text-3xl'>
//                 Discover everything you need to plan your big day
//                 </p>
//                 <p className='my-5'>
//                 Search over 73,000 local professionals with <br/>reviews, pricing, and more
//                 </p>
//                  <form className='flex'>
//                 <input placeholder='Search for ' className='border my-5  border-gray-500 py-3 px-4 outline-none w-[18rem] rounded-bl rounded-tl' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}/>
//                 <button className='py-3 border border-gray-500 w-[10rem] h-[50px] my-5 bg-red-600 rounded-br rounded-tr'><span className='text-white text-[17px]'>Find</span></button>
//                 </form>
//              </div>
               
//          </div >
//            <div className='w-full h-screen md:w-[55%] bg-cover border border-black bg-center rounded-bl-[10rem] rounded-tr-[10rem]' style={{backgroundImage:'url(https://cdn1.weddingwire.in/assets/img/home/bg_home2.jpg)'}}>
//          </div>
//       </div>
//     </>
//   )
// }

// export default SectionOne

import React from 'react';

function SectionOne() {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row   md:h-[24rem] w-full overscroll-none'>
        <div className='w-full md:w-[45%] flex  items-center justify-center'>
          <div className='w-3/4'>
            <p className='text-black my-5 font-bold text-3xl'>
              Discover everything you need to plan your big day
            </p>
            <p className='my-5'>
              Search over 73,000 local professionals with <br />reviews, pricing, and more
            </p>
            <form className='flex'>
              <input
                placeholder='Search for '
                className='border my-5 border-gray-500 py-3 px-4 outline-none w-[18rem] rounded-bl rounded-tl'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              />
              <button className='py-3 border border-gray-500 w-[10rem] h-[50px] my-5 bg-red-600 rounded-br rounded-tr'>
                <span className='text-white text-[17px]'>Find</span>
              </button>
            </form>
          </div>
        </div>
        <div className='w-full h-[20rem] md:h-[24rem] md:w-[55%] bg-cover bg-center rounded-bl-[10rem] rounded-tr-[10rem]' style={{ backgroundImage: 'url(https://cdn1.weddingwire.in/assets/img/home/bg_home2.jpg)' }}>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
