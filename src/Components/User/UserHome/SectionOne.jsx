import React from 'react';

function SectionOne() {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row md:h-[24rem] w-full overscroll-none'>
        <div className='w-full md:w-[45%] flex border  items-center justify-center' style={{fontFamily:'Noto Serif'}}>
          <div className='w-3/4 flex flex-col items-center justify-center md:justify-start md:items-start'>
            <p className='text-black my-5 text-center md:text-left font-bold text-2xl lg:text-3xl'>
              Discover everything you need to plan your big day
            </p>
            <p className='my-1 md:my-5 text-center md:text-start '>
              Search over 73,000 local professionals with reviews, pricing, and more
            </p>
            <form className='flex'>
              <input
                placeholder='Search for '
                className='border my-5 border-gray-500 py-3 px-4 outline-none  md:w-[14rem] lg:w-[18rem] rounded-bl rounded-tl'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              />
              <button className='py-3 border border-gray-500 w-[10rem] md:w-[6rem] lg:w-[10rem] h-[50px] my-5 bg-red-600 rounded-br rounded-tr'>
                <span className='text-white text-[17px]'>Find</span>
              </button>
            </form>
          </div>
        </div>
        <div className='w-full h-[20rem] border  md:h-[24rem] md:w-[55%] bg-cover bg-center rounded-bl-[10rem] rounded-tr-[10rem]' style={{ backgroundImage: 'url(https://cdn1.weddingwire.in/assets/img/home/bg_home2.jpg)' }}>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
