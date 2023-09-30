// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { showProfile } from '../../../Store/userAuth'


// function StudioImages({ studio, open, successMessage }) {
//    const dispatch = useDispatch()

//    useEffect(() => {
//       dispatch(showProfile({ status: false }))
//    }, [])
//    return (
//       <>
//          <div className={`flex ${open || successMessage ? 'inset-0 opacity-80' : 'opacity-1'}`}>
//             <div className='w-[18rem] md:w-[60rem] flex h-[27rem] ms-5 md:ms-24 my-3'>
//                <div className='w-[15rem] h-[15rem] md:w-[27rem] md:h-[27rem]'>
//                   <img className='object-cover w-[10rem] h-[10rem] md:w-[27rem] md:h-[27rem] rounded-tl-xl rounded-bl-xl' src={studio.images.images[1]?.photos[0]} alt='' />

//                </div>
//                <div className='md:grid grid-cols-2 gap-3  h-[27rem] w-[29rem] ms-3'>
//                   <div className=' w-[5rem] h-[5rem] md:w-[14rem] md:h-[13rem]'>
//                      <img className=' w-[14rem] h-[13rem] object-cover' src={studio.images.images[1]?.photos[2]} alt='' />

//                   </div>
//                   <div className='w-[14rem]  -yellow-400 h-[13rem]'>
//                      <img className='bg-no-repeat w-[14rem] h-[13rem] rounded-tr-xl object-cover' src={studio.images.images[0]?.photos[0]} alt='' />

//                   </div>
//                   <div className='w-[29rem]  -yellow-500'>
//                      <img className='object-cover h-[13rem] w-[29rem] rounded-br-xl' src={studio.images.images[0]?.photos[3]} alt=''/>

//                   </div>
//                </div>
//             </div>
//          </div>

//       </>
//    )
// }

// export default StudioImages




import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { showProfile } from '../../../Store/userAuth'


function    StudioImages({ studio, open, successMessage }) {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(showProfile({ status: false }))
   }, [])
   return (
      <>
         <div className={`flex ${open || successMessage ? 'inset-0 opacity-80' : 'opacity-1'}`}>
            <div className='w-[15rem] md:w-[60rem] flex h-[27rem] ms-5 md:ms-24 my-3'>
               <div className='w-[80rem] h-[27rem] md:w-[27rem] md:h-[27rem]'>
                  <img className='object-cover w-[80rem] h-[27rem] md:w-[27rem] md:h-[27rem] rounded-tl-xl rounded-bl-xl' src={studio.images.images[1]?.photos[0]} alt='' />

               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-3 h-[27rem] w-[29rem] ms-3'>
                  <div className='hidden md:block w-[12rem] h-[5rem] md:w-[14rem] md:h-[13rem]'>
                     <img className=' w-[12rem] h-[13rem] object-cover' src={studio.images.images[1]?.photos[2]} alt='' />

                  </div>
                  <div className='w-[14rem]  -yellow-400 h-[13rem]'>
                     <img className='bg-no-repeat w-[14rem] h-[13rem] rounded-tr-xl object-cover' src={studio.images.images[0]?.photos[0]} alt='' />

                  </div>
                  <div className='w-[14rem] md:w-[29rem]'>
                     <img className='object-cover h-[13rem] w-[14rem] md:w-[29rem] rounded-br-xl' src={studio.images.images[0]?.photos[3]} alt=''/>

                  </div>
               </div>
            </div>
         </div>

      </>
   )
}

export default StudioImages

