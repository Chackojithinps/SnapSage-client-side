import React from 'react'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
function StudioImages({ studio }) {
   return (
      <>
         <div className='flex' style={{ fontFamily: 'Noto Serif' }}>
            <div className='w-3/5 flex  -red-500 h-[27rem] ms-24 my-3'>
               <div className='w-[27rem]  -green-500 h-[27rem]'>
                  <img className='object-cover h-[27rem] rounded-tl-xl rounded-bl-xl' src={studio.images.images[0].photos[0]} alt='' />

               </div>
               <div className=' grid grid-cols-2 gap-3 -black h-[27rem] w-[29rem] ms-3'>
                  <div className='w-[14rem]  -yellow-400 h-[13rem]'>
                     <img className=' w-[14rem] h-[13rem] object-cover' src={studio.images.images[1].photos[4]} alt='' />

                  </div>
                  <div className='w-[14rem]  -yellow-400 h-[13rem]'>
                     <img className='bg-no-repeat w-[14rem] h-[13rem] rounded-tr-xl object-cover' src={studio.images.images[1].photos[3]} alt='' />

                  </div>
                  <div className='w-[29rem]  -yellow-500'>
                     <img className='object-cover h-[13rem] w-[29rem] rounded-br-xl' src={studio.images.images[0].photos[3]} alt='' />

                  </div>
               </div>
            </div>
            <div className=' rounded-2xl px-7 py-7 w-[25rem] mx-10 h-[25em] my-4 sticky top-16 right-5' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
               <div className='flex flex-col gap-3'>
                  <p className='font-bold text-[25px]'>{studio.companyName}</p>

                  <div class="flex items-center space-x-1">
                     <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <p className='font-bold px-3'>5.0 Fantastic  </p>
                     <p className='underline'> 18 reviews</p>
                  </div>

                  <div className='flex gap-2'>

                     <AddLocationAltOutlinedIcon color='action' />
                     <p className='text-gray-700 hover:underline'>{studio.district},{studio.city}</p>
                  </div>
                  <div className='flex gap-2'>
                     <LocalOfferOutlinedIcon color='action' />
                     <p className='text-red-500 hover:underline'>20% discount</p>
                  </div>
                  
                  <div className='flex items-center justify-center'>
                     <p className='text-center text-[12px]'>Responds within 24 hours </p>
                     <BoltOutlinedIcon color='warning' style={{height:'17px'}}/>
                  </div>
                  <button className='py-2 px-2 2-full bg-red-600 text-white rounded-[3px] hover:bg-red-500'>Request Pricing</button>
                  <div className='flex gap-2'>
                     <TrendingUpIcon color='success'/>
                  <p className='text-[13px]'>Popular in your area</p>
                  </div>
                  <div className='flex gap-2 '>
                     <StarBorderOutlinedIcon color='warning'/>
                     <p className='text-[13px]'>Highly recommended in your area</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default StudioImages
