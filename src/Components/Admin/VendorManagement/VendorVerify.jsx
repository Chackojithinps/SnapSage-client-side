import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AdminApi } from '../../../Apis/UserApi'
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-hot-toast';

import { Fragment, useRef } from 'react'


function VendorVerify() {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    const [vendorList, setVendorList] = useState([])
    const [varify, setVarify] = useState(false)
    const [vendorRejected, setVendorRejected] = useState(false)
    const [message, setMessage] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const [view, setView] = useState(false)
    const [selectedVendor, setSelectedVendor] = useState({})

    console.log("selected Vendor : ", selectedVendor)
    console.log("vendor list : ", vendorList)
    const handleVarify = async (id) => {
        const res = await axios.patch(`${AdminApi}/verifyVendor?id=${id}`)
        if (res.data.success) {
            toast.success("Request accepted")
            setVarify(!varify)

        }
    }

    const handleReject = async (id) => {
        try {
            const res = await axios.post(`${AdminApi}/rejectVendor?id=${id}`)
            if (res.data.success) {
                toast.error("Request rejected")
                //  setVarify(!varify)
                setVendorRejected(!vendorRejected)
            }
        } catch (error) {
            console.log("handle reject : ", error.message)
        }
    }

    const getUnVerifiedreq = async () => {
        try {
            const res = await axios.get(`${AdminApi}/getUnverified?search=${searchInput}`)
            if (res.data.success) {
                if (res.data.message) {
                    setMessage(res.data.message)
                } else {
                    setMessage("")
                    setVendorList(res.data.Vendorlists)
                }
            }
        } catch (error) {
            console.log("getunverified : ", error.message)
        }
    }

    const handleView = (id) => { // Pass the vendor's ID as an argument
        console.log("id : ", id)
        const selectedVendor = vendorList.find(vendor => vendor._id === id);
        console.log("first vendor : ", selectedVendor)
        setSelectedVendor(selectedVendor);
        setView(true);
    }

    useEffect(() => {
        getUnVerifiedreq()
    }, [varify, vendorRejected, searchInput])
    return (
        <>
            <div className='flex flex-col'>
                <div className='ms-5 mt-5' >
                    <input className='py-4 w-[75rem] border border-gray-300 bg-gray-50 px-5 outline-none' onChange={(e) => setSearchInput(e.target.value)} placeholder='Search here ' />
                </div>

                {!message ? <div className='flex flex-col '>
                    <div class="overflow-hidden rounded-lg shadow-md m-5 w-[75rem] max-h-[30rem] overflow-y-scroll">
                        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                            <thead class="bg-white">
                                <tr className='font-bold'>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Name</th>
                                    <th scope="col" class=" py-4 font-bold text-gray-900">Company name</th>

                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Phone</th>
                                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Email</th>
                                    <th scope="col" class="mx-3 py-4 font-bold text-gray-900 ">View</th>

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
                                        <td>
                                            {user.companyName}
                                        </td>
                                        <td class="px-6 py-4">{user.phone}</td>

                                        <td>
                                            {user.email}
                                        </td>

                                        <td>
                                            {/* <button>View</button>
                                             */}
                                            <p className='cursor-pointer ' onClick={() => handleView(user._id)}>view</p>
                                        </td>
                                        <div className='flex flex-row gap-4 mx-8 cursor-pointer'>

                                            <td className=''>
                                                <div className='flex ' >
                                                    <TaskAltSharpIcon color='success' onClick={() => handleVarify(user._id)} />
                                                </div>

                                            </td>
                                            <td className='flex'>
                                                <CloseSharpIcon style={{ color: 'red' }} onClick={() => handleReject(user._id)} />
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

                {/* -------------------------Modal---------------------------- */}

                {view && <div class="p-5 border bg-yellow-500 w-[50rem] rounded text-center text-black h-[32rem] absolute top-[6rem] left-[26rem] rounded-xl" >
                    <div className='flex'>
                        <div className='mx-[16rem] relative'>
                            {/* <img class="w-32 h-32 rounded-full " src="https://loremflickr.com/320/320/girl" alt="" /> */}
                            <div class="text-sm w-[15rem] mt-5">
                                <p
                                    class="font-medium leading-none  hover:text-indigo-600 transition duration-500 ease-in-out text-[18px]">
                                    {selectedVendor.fname} {selectedVendor.lname}
                                </p>
                                <p className='mt-3'>Studio Name : {selectedVendor.companyName}</p>
                                <p>Place : {selectedVendor.district}</p>
                                <p>Phone : {selectedVendor.phone}</p>
                                <p>Email : {selectedVendor.email}</p>
                            </div>
                        </div>
                            <CloseIcon color='' style={{fontSize:`30px`,color:"black"}} className='cursor-pointer absolute right-7' onClick={()=>setView(false)}/>
                        
                    </div>
                    


                    <div className='mt-10'>
                        <p className=''>Documents</p>
                        <p className='mt-2'>Union Id : <span className='text-red-500'>{selectedVendor.unionCode}</span></p>
                        <div className='w-full mt-4 h-[13rem]  grid grid-cols-2 gap-2 '>
                            {selectedVendor.image.map((image) => (
                                <img className=' object-cover w-[25rem] h-[13rem] border border-black' src={image} alt='' />

                            ))}
                        </div>

                    </div>
                    {/* <div className='text-right mt-8  '>
                        <button className='py-2 px-6 rounded-[5px] border border-gray-300 hover:bg-blue-200' onClick={()=>setView(false)}>Close</button>
                    </div> */}


                </div>}
                {/* ----------------------------------------------------------------- */}
            </div>
        </>
    )
}

export default VendorVerify
