import React, { useEffect, useState } from 'react'
import AdminSidebar from '../AdminNavbar/AdminSidebar'
import axios from 'axios'
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { AdminApi } from '../../../Apis/UserApi'

function StudioUnvarified() {
    const [studios,setStudios] = useState([])
    const [searchInput,setSearchInput] = useState("")
    const [message,setMessage] = useState("")
     
    const handleVarify = () =>{

    }
    const handleReject = () => {

    }
    const getUnvarifiedStudios=async()=>{
        try {
            const res = await axios.get(`${AdminApi}/getUnvarifiedStudios?search=${searchInput}`)
            if(res.data.success){
                if(res.data.message){
                    setMessage(res.data.message)
                }
                console.log("stuidoDatas : ",res.data.studioDatas)
                setStudios(res.data.studioDatas)
            }
        } catch (error) {
            console.log("unvarified studios",error.message)
        }
    }
    useEffect(()=>{
        getUnvarifiedStudios()
    },[searchInput])
  return (
    <div className='flex' style={{ fontFamily: 'Noto Serif' }}>
    <div >
        <AdminSidebar />
    </div>
    <div className='flex flex-col bg-gray-50'>
        <div className='ms-5 mt-5' >
            <input className='py-4 w-[75rem] border border-gray-300 bg-gray-50 px-5 outline-none' placeholder='Search here ' onChange={(e)=>setSearchInput(e.target.value)}  />
        </div>
           {!message?
            <div className="overflow-hidden rounded-lg bg-gray-50 border border-gray-200 shadow-md m-5 w-[75rem]">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-200">
                        <tr className='font-bold'>
                            <th scope="col" className="px-6 py-4 font-bold text-gray-900">Name</th>
                            <th scope="col" className="px-6 py-4 font-bold text-gray-900">District</th>
                            <th scope="col" className="px-6 py-4 font-bold text-gray-900">City</th>
                            <th scope="col" className="px-6 py-4 font-bold text-gray-900">Email</th>
                            <th scope="col" className="px-6 py-4 font-bold text-gray-900">Accept/Reject</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {studios.map(studio => (
                            <tr key={studio._id} className="hover:bg-gray-50">
                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="relative h-10 w-10">
                                        <img
                                            className="h-full w-full rounded-full object-cover object-center"
                                            src={`${studio.image}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">{studio.companyName}</div>
                                        <div className="text-gray-400">{studio.email}</div>
                                    </div>
                                </th>
                                
                                <td className="px-6 py-4">{studio.district}</td>
                                <td className="px-6 py-4">{studio.city}</td>

                                <td>
                                    {studio.email}
                                </td>

                                <div className='flex flex-row gap-4 mx-8 cursor-pointer'>

                                            <td className=''>
                                                <div className='flex' >
                                                    <TaskAltSharpIcon color='success' onClick={() => handleVarify(studio._id)} />
                                                </div>

                                            </td>
                                            <td className='flex'>
                                                <CloseSharpIcon style={{ color: 'red' }} onClick={()=>handleReject(studio._id)}/>
                                            </td>
                                        </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
            :  <div className='w-full'>
     <p className='mt-5 text-center'>
         {message}
     </p>
 </div> }
    </div>
</div>
  )
}

export default StudioUnvarified
// onClick={() => handleBlock(studio._id)}
// onClick={() => handleUnblock(studio._id)}