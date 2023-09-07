import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { showProfile } from '../../../Store/userAuth'


function StudioImages({ studio, open, successMessage }) {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(showProfile({ status: false }))
   }, [])
   return (
      <>
         <div className={`flex ${open || successMessage ? 'inset-0 opacity-80' : 'opacity-1'}`}>
            <div className='w-[60rem] flex  -red-500 h-[27rem] ms-24 my-3'>
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

            {/* ----------------------------------------------Right side -------------------------------------------- */}




         </div>

      </>
   )
}

export default StudioImages
