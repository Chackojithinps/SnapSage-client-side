import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {VendorApi } from '../../../Apis/UserApi'

function Bookings() {
    const [bookingList, setBookingList] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [message, setMessage] = useState("")

    const getData = async () => {
        try {
            const res = await axios.get(`${VendorApi}/bookings?search=${searchInput}`)
            if (res.data.success) {
                if(res.data.message){
                    setMessage(res.data.message)
                }else{
                    setMessage("")
                    setBookingList(res.data.BookingDatas)
                }

            } else {
                console.log("somthing errorr in getdata")
            }
        } catch (error) {
            console.log("errorHome : ", error.message)
        }
    }
    useEffect(() => {
        getData()
    }, [searchInput])
    return (
        <div className='flex flex-col' style={{ fontFamily: 'Noto Serif' }}>
            <div className='ms-5 mt-5' >
                <input className='py-4 w-[75rem] border border-gray-300 bg-gray-50 px-5 outline-none' placeholder='Search here ' onChange={(e)=>setSearchInput(e.target.value)} />
            </div>

            {!message?<div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[75rem] max-h-[30rem] overflow-y-scroll">
                <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead class="bg-white">
                        <tr>
                            <th scope="col" class="px-24 py-4 font-bold text-gray-900 ">Username</th>
                            {/* <th scope="col" class="px-3py-4 font-bold text-gray-900">Place</th> */}
                            <th scope="col" class="px-8 py-4 font-bold text-gray-900">Selected Categories</th>
                            {/* <th scope="col" class="px-20 py-4 font-bold text-gray-900">Email</th> */}
                            <th scope="col" class="px-6 py-4 font-bold text-gray-900">Phone</th>
                            <th scope="col" class="px-6 py-4 font-bold text-gray-900">Booking Date</th>
                            <th scope="col" class="px-6 py-4 font-bold text-gray-900">View Profile</th>
                            <th scope="col" class="px-6 py-4 font-bold text-gray-900">Total Amount</th>

                            <th scope="col" class="px-6 py-4 font-bold text-gray-900">Accept/Reject</th>

                            
                        </tr>
                    </thead>
                   <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                        {bookingList.map(bookings => (
                            <tr class="hover:bg-gray-50">
                                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div class="relative h-10 w-10">
                                        <img
                                            class="h-full w-full rounded-full object-cover object-center"
                                            // src={`${bookings.image}`}
                                            alt=""
                                        />
                                    </div>
                                    <div class="text-sm">
                                        <div class="font-medium text-gray-700">{bookings.name}</div>
                                        <div class="text-gray-400">{bookings.email}</div>
                                    </div>
                                </th>
                                {/* <td>
                                    {bookings.place}
                                </td> */}
                                
                                <td class="px-6 py-4">
                                    {bookings.selectedCategories}
                                </td>
{/* 
                                <td>
                                    {bookings.email}
                                </td> */}
                                <td>
                                    {bookings.phone}
                                </td>
                                <td>
                                    {bookings.eventDate}
                                </td>
                                <td className='px-10'>
                                   view
                                </td>
                                <td>
                                    {bookings.totalAmount}
                                </td>
                                <td>
                                    <button className='bg-red-500 text-white hover:text-black hover:bg-white py-2 px-3 border border-gray-500 rounded'>block</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            :
            <div className='w-full'>
                <p className='mt-5 text-center'>
                    {message}
                </p>
            </div>}
        </div>
    )
}

export default Bookings

