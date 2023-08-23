import React from 'react'

function StudioImages() {
  return (
    <>
      <div className='w-3/5 flex  -red-500 h-[27rem] ms-24 my-3'>
          <div className='w-[27rem]  -green-500 h-[27rem]'>
             <img className='object-cover h-[27rem] rounded-tl-xl rounded-bl-xl' src='https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200' alt='' />
          </div>
          <div className=' grid grid-cols-2 gap-3 -black h-[27rem] w-[29rem] ms-3'>
             <div className='w-[14rem]  -yellow-400 h-[13rem]'>
             <img className=' w-[14rem] h-[13rem] object-cover' src='https://us.123rf.com/450wm/dmitryag/dmitryag2105/dmitryag210506008/174519729-woman-outdoors-photographer-landscape-travel-professional-recreation.jpg?ver=6' alt='' />
            
             </div>
             <div className='w-[14rem]  -yellow-400 h-[13rem]'>
             <img className='bg-no-repeat w-[14rem] h-[13rem] rounded-tr-xl object-cover' src='https://us.123rf.com/450wm/dmitryag/dmitryag2105/dmitryag210506008/174519729-woman-outdoors-photographer-landscape-travel-professional-recreation.jpg?ver=6' alt='' />
                 
             </div>
             <div className='w-[29rem]  -yellow-500'>
             <img className='object-cover h-[13rem] w-[29rem] rounded-br-xl' src='https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200' alt='' />

             </div>
          </div>
      </div>
      <div>

      </div>

    </>
  )
}

export default StudioImages
