import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AdminApi } from '../../../Apis/UserApi'
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { toast } from 'react-hot-toast';
function VendorVerify() {
    const [vendorList, setVendorList] = useState([])
    const [varify, setVarify] = useState(false)
    const [vendorRejected,setVendorRejected] = useState(false)
    const [message,setMessage] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const handleVarify = async (id) => {
        const res = await axios.patch(`${AdminApi}/verifyVendor?id=${id}`)
        if (res.data.success) {
            toast.success("Request accepted")
            setVarify(!varify)
        
        }
    }

    const handleReject = async(id)=>{
        try {
            const res = await axios.post(`${AdminApi}/rejectVendor?id=${id}`)
            if (res.data.success) {
             toast.error("Request rejected")
            //  setVarify(!varify)
             setVendorRejected(!vendorRejected)
            }
        } catch (error) {
            console.log("handle reject : ",error.message)
        }
    }

    const getUnVerifiedreq = async () => {
        try {
            const res = await axios.get(`${AdminApi}/getUnverified?search=${searchInput}`)
            if (res.data.success) {
                if(res.data.message){
                    setMessage(res.data.message)
                }else{
                    setMessage("")
                    setVendorList(res.data.Vendorlists)
                }
            }
        } catch (error) {
            console.log("getunverified : ", error.message)
        }
    }
    useEffect(() => {
        getUnVerifiedreq()
    }, [varify,vendorRejected,searchInput])
    return (
        <>
            <div className='flex flex-col'>
                <div className='ms-5 mt-5' >
                    <input className='py-4 w-[75rem] border border-gray-300 bg-gray-50 px-5 outline-none' onChange={(e)=>setSearchInput(e.target.value)} placeholder='Search here ' />
                </div>

                {!message?<div className='flex flex-col '>
                    <div class="overflow-hidden rounded-lg shadow-md m-5 w-[75rem] max-h-[30rem] overflow-y-scroll">
                        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                            <thead class="bg-white">
                                <tr className='font-bold'>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Name</th>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Phone</th>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Email</th>
                                    <th scope="col" class=" py-4 font-bold text-gray-900">Company name</th>
                                    <th scope="col" class="mx-3 py-4 font-bold text-gray-900">View</th>

                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Accept/Reject</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                                {vendorList.map(user => (
                                    <tr class="hover:bg-gray-50">
                                        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                            <div class="relative h-10 w-10">
                                                <img
                                                    class="h-full w-full rounded-full object-cover object-center"
                                                    src={`${user.image}`}
                                                    alt=""
                                                />
                                            </div>
                                            <div class="text-sm">
                                                <div class="font-medium text-gray-700">{user.fname} {user.lname}</div>
                                                <div class="text-gray-400">{user.email}</div>
                                            </div>
                                        </th>

                                        <td class="px-6 py-4">{user.phone}</td>

                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                            {user.companyName}
                                        </td>
                                        <td>
                                            <button>View</button>
                                        </td>
                                        <div className='flex flex-row gap-4 mx-8 cursor-pointer'>

                                            <td className=''>
                                                <div className='flex' >
                                                    <TaskAltSharpIcon color='success' onClick={() => handleVarify(user._id)} />

                                                </div>

                                            </td>
                                            <td className='flex'>
                                                <CloseSharpIcon style={{ color: 'red' }} onClick={()=>handleReject(user._id)}/>
                                            </td>
                                        </div>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                :
                <div className='w-full'>
                    <p className='mt-5 text-center'>
                        {message}
                    </p>
                </div>}
            </div>
        </>
    )
}

export default VendorVerify
