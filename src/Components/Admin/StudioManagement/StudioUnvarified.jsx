import React, { useEffect, useState } from 'react'
import AdminSidebar from '../AdminNavbar/AdminSidebar'
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { toast } from 'react-hot-toast';
import { AdminApi } from '../../../Utils/Api';
import { adminAxiosInstance } from '../../../Utils/Axios';
import { getUnvarifiedStudiosData, rejectStudioData, verifyStudioData } from '../../../Utils/AdminEndpoints';

function StudioUnvarified() {
    const [studios,setStudios] = useState([])
    const [searchInput,setSearchInput] = useState("")
    const [message,setMessage] = useState("")
    const [varify,setVarify] = useState(false)
    const [studioRejected,setStudioRejected] = useState(false)

    const handleVarify =async (id) =>{
        // const res = await adminAxiosInstance.patch(`/verifyStudio?id=${id}`)
        const res = await verifyStudioData(id)
        if (res.data.success) {
            toast.success( "Request accepted ")
            setVarify(!varify)
        }
    }
    const handleReject =async (id) => {
        try {
            // const res = await adminAxiosInstance.post(`/rejectStudio?id=${id}`)       
            const res = await rejectStudioData(id)  
            if (res.data.success) {
             toast.error("Request rejected")
            //  setVarify(!varify)
             setStudioRejected(!studioRejected)
            }
        } catch (error) {
            console.log("handle reject : ",error.message)
        }
    }
    const getUnvarifiedStudios=async()=>{
        try {
            // const res = await adminAxiosInstance.get(`/getUnvarifiedStudios?search=${searchInput}`)
            const res = await getUnvarifiedStudiosData(searchInput)
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
    },[searchInput,varify,studioRejected])
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
                            <th scope="col" className="px-6 py-4 font-bold text-gray-900">Company Name</th>
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

                                <div className='flex flex-row gap-4 mx-8 cursor-pointer mb-7'>

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