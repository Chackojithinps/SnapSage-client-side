import React from 'react'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
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
                     <img className=' w-[14rem] h-[13rem] object-cover' src={studio.images.images[1].photos[4]}  alt='' />

                  </div>
                  <div className='w-[14rem]  -yellow-400 h-[13rem]'>
                     <img className='bg-no-repeat w-[14rem] h-[13rem] rounded-tr-xl object-cover' src={studio.images.images[1].photos[3]}  alt='' />

                  </div>
                  <div className='w-[29rem]  -yellow-500'>
                     <img className='object-cover h-[13rem] w-[29rem] rounded-br-xl' src={studio.images.images[0].photos[3]} alt='' />

                  </div>
               </div>
            </div>
            <div className='border border-red-500 w-[25rem] mx-10 h-[27rem] my-4 sticky top-16 right-5'>
               <div className='flex flex-col gap-3'>
                  <p className='font-bold text-[22px]'>{studio.companyName}</p>
                  <p>rating</p>
                  <div className='flex gap-2'>

                     <AddLocationAltOutlinedIcon color='action' />
                     <p className='text-gray-700 hover:underline'>{studio.district},{studio.city}</p>
                  </div>
                  <div className='flex gap-2'>
                     <LocalOfferOutlinedIcon color='action' />
                     <p className='text-red-500 hover:underline'>20% discount</p>
                  </div>
                  <button>Request Pricing</button>

               </div>
            </div>
         </div>
      </>
   )
}

export default StudioImages
