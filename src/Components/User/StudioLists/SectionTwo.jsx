import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStudiosHome } from '../../../Utils/UserEndpoints'

function SectionTwo() {
    const [studioDetails,setStudioDetails] = useState([])
    const navigate = useNavigate()
    const getStudios = async () => {
        try {
            const res = await getStudiosHome()
            if (res.data.success) {
                setStudioDetails(res.data.studioDetails)
            }
        } catch (error) {
            console.log("getSTudios : ", error.message)
        }
    }
    useEffect(()=>{
       getStudios()
    },[])
    return (
        <div>
            <div className='mx-14 px-2 mt-7'>
                <div className='flex justify-end me-3'>
                    <div className='bg-gray-300 w-[28rem] h-[3rem] flex'>
                        
                    </div>
                </div>
                
                <div class="grid-cols-1 grid lg:grid-cols-4 md:grid-cols-2" >
                   {studioDetails.map((studio)=>(

                    <div
                        className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <div className='cursor-pointer' onClick={()=>navigate(`/studioDetails/${studio._id}`,{ state: { studio } })}>
                            <img className='h-[15rem] w-full object-cover' src={studio?.images?.images[0]?.photos[0]} alt='' />
                        </div>
                        <div className="p-6">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-black dark:black cursor-pointer">
                                Weddding Mubark
                            </h5>
                            <p className="mb-4 text-base text-black">
                                Hello
                            </p>
                            <p className="mb-4 text-base text-black">
                                Hello
                            </p>
                            <p className="mb-4 text-base text-black">
                                Hello
                            </p>
                        </div>
                    </div>
                   ))}

{studioDetails.map((studio)=>(
<div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
    <div className='cursor-pointer'>
        <img className='h-[15rem] w-full object-cover' src={studio?.images?.images[0]?.photos[0]} alt=''/>
    </div>
    <div className="p-6">
        <h5
            className="mb-2 text-xl font-medium leading-tight text-black dark:black cursor-pointer">
            {studio.companyName}
        </h5>
        <p className="mb-4 text-base text-black">
            {studio.district}
        </p>
        <p className="mb-4 text-base text-black">
            Hello
        </p>
        <p className="mb-4 text-base text-black">
            Hello
        </p>
        <button
            className="py-2 px-2 w-full border border-red-500 text-red-500 rounded-[7px] font-bold hover:bg-red-500 hover:text-white"
            
          >
            Request Pricing
          </button>
    </div>
   
    
</div>
))}
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
