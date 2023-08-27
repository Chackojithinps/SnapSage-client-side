import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UserApi } from '../../../Apis/UserApi'


function SectionThree() {
   const [studioDetails,setStudioDetails] = useState([])
   console.log("studioDetail : ",studioDetails)
 const getStudios=async ()=>{
    try {
        const res = await axios.get(`${UserApi}/getStudios`)
        if(res.data.success){
            // console.log(res.data)
        
            setStudioDetails(res.data.studioDetails)
        }
    } catch (error) {
        console.log("getSTudios : ",error.message)
    }
 }
 useEffect(()=>{
    getStudios()
 },[])
    return (
        <>
            <div className='mx-16' style={{ fontFamily: 'Noto Serif' }} >
                <p className='text-2xl'>Featured wedding vendors</p>
                <p className='my-2 text-[12px] md:text-[15px]'>Start planning your wedding with us, it's free!</p>
            </div>
            <div className='mx-14'>

                {studioDetails?(<div class="grid-cols-1 grid lg:grid-cols-4 md:grid-cols-2" >
                    {studioDetails.map((studio)=>(
                        <div
                        className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <a href="#!">
                            {studio.images?(<img className='h-[15rem] w-full object-cover' src={studio.images.images[0].photos[0]} alt=''/>):(<img
                                className="rounded-t-lg"
                                src="https://anakoskaphotography.com/wp-content/uploads/2018/09/professional-picture-of-a-cute-baby-boy-in-white.jpg"
                                alt="Hollywood Sign on The Hill" />)}
                        </a>
                        <div className="p-6">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-black dark:black">
                                {studio && studio.companyName}
                            </h5>
                            <p className="mb-4 text-base text-black">
                            {studio && studio.district}
                            </p>
                        </div>
                        </div>
                    ))}
                    
                   

            </div>):<p>Loading............</p>
}
</div>
        </>
    )
}

export default SectionThree
