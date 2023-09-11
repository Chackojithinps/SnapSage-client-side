import React, { useState } from 'react'

function Offer() {
    const [list,setList] = useState(false)
  
  return (
    <div className='flex flex-col' style={{ fontFamily: 'Noto Serif' }}>
    {/* <div className='flex mt-7 ms-6 text-white'>
        <button className='py-2 px-20 rounded bg-violet-600 flex'>Add Offer</button>
    </div> */}
    <div className='ms-5 mt-5' >
        <input className='py-4 w-[75rem] border border-gray-300 bg-gray-100 px-5 outline-none' placeholder='Search here ' />
    </div>

   <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[75rem] max-h-[30rem] overflow-y-scroll">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-100">
                <tr> 
                    <th scope="col" class="px-10 py-4 font-bold text-gray-900 ">Offer Name</th>
                    <th scope="col" class="px- py-4 font-bold text-gray-900">Offer Percentage</th>
                   
                    <th scope="col" class="px-9 py-4 font-bold text-gray-900">Description</th>
                   

                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Block/Unblock</th>


                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
    
                    <tr class="hover:bg-gray-50">
                        <td class="flex gap-3 px-6 py-8 font-normal text-gray-900">
                           
                            <div class="text-sm">
                                <div class=" text-gray-700"></div>
                                <div class= "text-gray-400"></div>
                            </div>
                        </td>
                        
{/* 
                        <td class="py-4">
                            {bookings.categories.map((category) => (
                                <div className='flex gap-1'>
                                    <FiberManualRecordIcon style={{ fontSize: '10px', marginTop: '5px' }} />
                                    <p className='w-[10rem]'>{category.categoryId.categoryName}</p>
                                </div>

                            ))}
                        </td> */}
                        
                        <td className='px-9'>
                           <p className=''></p>
                        </td>
                        <td className='px-9'>
                           <p className=' font-bold'>jithn</p>
                        </td>
                        <td className='px-8'>
                            <div className='' onClick={()=>setList(!list)}>
                                {list?
                               <button className='py-1 px-4 rounded-3xl bg-green-500 text-black text-white'>Unlist</button>:
                               <button className='py-1 px-4 rounded-3xl bg-red-500 text-white'>List</button>
                                }
                            </div>

                        </td>
                       
                    </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Offer
