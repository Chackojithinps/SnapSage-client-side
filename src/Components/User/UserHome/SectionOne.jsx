import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showProfile } from '../../../Store/userAuth';

function SectionOne() {
  const dispatch = useDispatch()
  const profileOpen = useSelector((state)=>state.user.status)
  console.log("status : ",profileOpen)
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch(showProfile({ status: false }))
  },[])
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row md:h-[24rem] w-full overscroll-none'>
        <div className='w-full md:w-[45%] flex   items-center justify-center' style={{fontFamily:'Noto Serif'}}>
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
                className=' my-5 py-3 px-4 outline-none  md:w-[14rem] lg:w-[18rem] rounded-bl rounded-tl'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              />
              <button className='py-3 w-[10rem] md:w-[6rem] lg:w-[10rem] h-[50px] my-5 bg-red-600 rounded-br rounded-tr'>
                <span className='text-white text-[17px]'>Find</span>
              </button>
            </form>
          </div>
        </div>
        <div className='w-full h-[20rem] border  md:h-[24rem] md:w-[55%] bg-cover bg-center rounded-bl-[10rem] rounded-tr-[10rem]' style={{ backgroundImage: 'url(https://cdn1.weddingwire.in/assets/img/home/bg_home2.jpg)' }}>
        </div>
        
      </div>
      {
          profileOpen && <div className="bg-white absolute top-[6rem] right-[8rem] w-[15rem] h-[20rem]" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} >
             <ul className='flex flex-col py-4 px-4 rounded-[5px] ' style={{fontFamily:'Noto Serif'}}>
               <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={()=>navigate('/profile')}>Profile</li>
               <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={()=>navigate('/bookings')}>Bookings</li>
               <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={()=>navigate('/bookingHistory')}>Booking History</li>
               <li className='cursor-pointer py-3 px-3 hover:bg-gray-300'>Logout</li>

             </ul>
          </div>
        }
    </>
  );
}

export default SectionOne;
