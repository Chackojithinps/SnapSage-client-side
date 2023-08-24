import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AdminApi } from '../../../Apis/UserApi'
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

function VendorVerify() {
    const [vendorList, setVendorList] = useState([])
    const [varify,setVarify] = useState(false)

    const handleVarify= async (id) =>{
         const res=await axios.patch(`${AdminApi}/verifyVendor?id=${id}`)
         if(res.data.success){
            setVarify(!varify)
         }
    }

    const getUnVerifiedreq = async () => {
        try {
            const res = await axios.get(`${AdminApi}/getUnverified`)
            if (res.data.success) {
                setVendorList(res.data.unVarifiedUser)
            }
        } catch (error) {
            console.log("getunverified : ", error.message)
        }
    }
    useEffect(() => {
        getUnVerifiedreq()
    }, [varify])
    return (
        <>
            <div className='flex flex-col'>
                <div className='ms-5 mt-5' >
                   <input className='py-4 w-[75rem] border border-gray-300 bg-gray-50 px-5 outline-none' placeholder='Search here '/>
                </div>
                
                <div className='flex flex-col '>
                    <div class="overflow-hidden rounded-lg shadow-md m-5 w-[75rem] max-h-[30rem] overflow-y-scroll">
                        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                            <thead class="bg-white">
                                <tr className='font-bold'>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Name</th>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">status</th>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">phone</th>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">email</th>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">company name</th>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">action</th>
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
                                        <td class="px-6 py-4">
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                            >
                                                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                                Active
                                            </span>
                                        </td>
                                        <td class="px-6 py-4">{user.phone}</td>

                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                            {user.companyName}
                                        </td>
                                      <div className='flex flex-row gap-4'>

                                        <td className='flex'>
                                            {/* <button className='bg-green-500 text-white hover:text-black hover:bg-white py-1 w-20 px-3 border border-gray-500 rounded' 
                                             onClick={()=>handleVarify(user._id)}>Verify</button> */}
                                             <TaskAltSharpIcon color='success'/>
                                             <p>Accept</p>
                                        </td>
                                        <td className='flex'>
                                            {/* <button className='bg-red-500 text-white hover:text-black hover:bg-white  py-1 w-20 px-3  border border-gray-500 rounded'>Reject</button> */}
                                            <CloseSharpIcon style={{ color: 'red' }} />
                                            <p>reject</p>
                                        </td>
                                      </div>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default VendorVerify
