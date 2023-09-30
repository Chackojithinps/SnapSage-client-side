import React from 'react'
import { useNavigate } from 'react-router-dom'

function SectionTwo() {
  const navigate = useNavigate()
  return (
    <>
      <div className='flex flex-col h-[37rem]'>
         <div className=' px-8 my-4 mx-12' style={{fontFamily:'Noto Serif'}}>
            <h2 className='text-2xl'>Enjoy planning your Day</h2>
            <p className='my-2 text-[12px] md:text-[15px]'>Start planning your day wedding with us!</p>
         </div>
         {/* Card Section starts------------------------------------------------------ */}
         <div className=' my-5 h-[50rem] md:max-h-[13rem] py-3 mx-12 flex md:flex-row overflow-x-auto md:overflow-x-hidden overflow-y-hidden '>
            
           <div class="flex flex-col lg:flex-row min-w-[80%] md:min-w-[20rem] lg:min-w-[30rem]  shadow-lg mx-6 h-[20rem] md:h-[11rem]"  style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <img class="h-[50%] md:h-full w-full lg:w-[20rem] object-cover rounded-lg rounded-r-none pb-5/6" src="https://media.istockphoto.com/id/1222589192/photo/outdoor-garden-wedding-ceremony-flower-arch.webp?b=1&s=170667a&w=0&k=20&c=Z_yrXRXY9tq_R8aD4jv2qwHv2SwOqFX4aybyqWugUeo=" alt="bag" />
            <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                <div class="flex items-center">
                    <h2 class="text-xl text-gray-800 font-medium mr-auto" style={{fontFamily:'Noto Serif'}}>Wedding Venues</h2>
                   
                </div>
                <p class="text-gray-700 mt-4">
                      Photos, reviews, and so much more... get in touch from here! 
                </p>
                <p className='text-red-600 mt-5 font-bold cursor-pointer' onClick={()=>navigate('/studioLists')}>
                    Start your search</p>
            </div>
           </div>

           <div class="flex flex-col lg:flex-row border min-w-full  md:min-w-[20rem]  lg:min-w-[30rem]  shadow-lg mx-6 h-[20rem] md:h-[11rem]"  style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <img class="h-[50%] md:h-full w-full md:w-[20rem] object-cover rounded-lg rounded-r-none pb-5/6" src="https://images.squarespace-cdn.com/content/v1/5727974359827e5304ee8ddf/1484159631426-D3B1NBM7UL57F8VPAKNQ/5J5A9793-1.jpg?format=2500w" alt="bag" />
            <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                <div class="flex items-center">
                <h2 class="text-xl text-gray-800 font-medium mr-auto" style={{fontFamily:'Noto Serif'}}>Kids Photography</h2>

                </div>
                <p class="text-gray-700 mt-4">
                Photos, reviews, and so much more... get in touch from here! 

                </p>
                <p className='text-red-600 mt-5 font-bold cursor-pointer' onClick={()=>navigate('/studioLists')}>
                    Start your search</p>
            </div>
           </div>

          
         </div>
         {/* End of card seciton------------------------------------------------ */}
         {/* Starts Small Card section---------------------------------------------------------- */}

         <div className='  my-5 h-[11rem] mx-12 justify-center hidden lg:flex'>
            <div class="md:flex shadow-lg   mx-3 w-[31%] h-[11rem]"  style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                    <div class="flex items-center">
                        <h2 class="text-xl text-gray-800 font-medium mr-auto  w-[18rem]" style={{fontFamily:'Noto Serif'}}>Groom Photography</h2>
                    
                    </div>
                    <p class="text-gray-700 mt-4 w-[10rem] lg:w-[20rem]">
                        Photos, reviews, and so much more... get in touch from here! 
                    </p>
                    <p className='text-red-600 mt-5 font-bold cursor-pointer' onClick={()=>navigate('/studioLists')}>
                    Start your search</p>
                </div>
            </div>

            <div class="md:flex shadow-lg  mx-3 w-[31%] h-[11rem]"  style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                    <div class="flex items-center">
                        <h2 class="text-xl text-gray-800 font-medium mr-auto  w-[18rem] " style={{fontFamily:'Noto Serif'}}>Candid Photography</h2>
                    
                    </div>
                    <p class="text-gray-700  w-[15rem] mt-4 lg:w-[20rem]">
                    Photos, reviews, and so much more... get in touch from here! 

                    </p>
                    <p className='text-red-600 mt-5 font-bold cursor-pointer' onClick={()=>navigate('/studioLists')}>
                    Start your search</p>
                </div>
            </div>

            <div class="md:flex shadow-lg  mx-3 w-[31%] h-[11rem]"  style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                    <div class="flex items-center">
                        <h2 class="text-xl text-gray-800 font-medium mr-auto w-[18rem]" style={{fontFamily:'Noto Serif'}}>Drone Shoot</h2>
                    
                    </div>
                    <p class="text-gray-700 mt-4 w-[15rem] lg:w-[20rem]">
                    Photos, reviews, and so much more... get in touch from here! 

                    </p>
                    <p className='text-red-600 mt-5 font-bold cursor-pointer' onClick={()=>navigate('/studioLists')}>
                    Start your search</p>
                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default SectionTwo
