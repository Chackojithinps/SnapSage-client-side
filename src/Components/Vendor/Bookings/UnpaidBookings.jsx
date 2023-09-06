import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { VendorApi } from '../../../Apis/UserApi'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function UnpaidBookings() {
    const [unpaidBookings, setunpaidBookings] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [message, setMessage] = useState("")

    console.log("bookingLists : ", unpaidBookings)

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based, so we add 1
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const getData = async () => {
        try {
            const vendorToken = JSON.parse(localStorage.getItem('vendorDetails')).vendorToken;
            const res = await axios.get(`${VendorApi}/unpaidBookings?search=${searchInput}`, {
                headers: {
                    Authorization: `Bearer ${vendorToken}`
                }
            })
            if (res.data.success) {
                if (res.data.message) {
                    setMessage(res.data.message)
                } else {
                    setMessage("")
                    setunpaidBookings(res.data.BookingDatas)
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
                <input className='py-4 w-[75rem] border border-gray-300 bg-gray-100 px-5 outline-none' placeholder='Search here ' onChange={(e) => setSearchInput(e.target.value)} />
            </div>

            {!message ? <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[75rem] max-h-[30rem] overflow-y-scroll">
                <table class="w-full border-collapse bg-gray text-left text-sm text-gray-500">
                    <thead class="bg-gray-100">
                        <tr>
                            <th scope="col" class="px-10 py-4 font-bold text-gray-900 ">Username</th>
                            {/* <th scope="col" class="px-3py-4 font-bold text-gray-900">Place</th> */}
                            <th scope="col" class="px- py-4 font-bold text-gray-900">Selected Categories</th>
                            {/* <th scope="col" class="px-20 py-4 font-bold text-gray-900">Email</th> */}
                            <th scope="col" class=" font-bold text-gray-900">Phone</th>
                            <th scope="col" class="px-8 py-4 font-bold text-gray-900">Booking Date</th>
                            <th scope="col" class="px-8 py-4 font-bold text-gray-900">Event Date</th>
                            <th scope="col" class=" py-4 font-bold text-gray-900">View Profile</th>
                            <th scope="col" class="px-6 py-4 font-bold text-gray-900">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                        {unpaidBookings.map(bookings => (
                            <tr class="hover:bg-gray-50">
                                <td class="flex gap-3 px-6 py-8 font-normal text-gray-900">
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
                                </td>
                                {/* <td>
                                    {bookings.place}
                                </td> */}

                                <td class="py-4">
                                    {bookings.categories.map((category) => (
                                        <div className='flex gap-1'>
                                            <FiberManualRecordIcon style={{ fontSize: '10px', marginTop: '5px' }} />
                                            <p className='w-[10rem]'>{category.categoryId.categoryName}</p>
                                        </div>

                                    ))}
                                </td>
                                {/* 
                                <td>
                                    {bookings.email}
                                </td> */}
                                <td className=''>
                                    {bookings.phone}
                                </td>
                                <td className='px-10'>
                                    <p className=''>{formatDate(bookings.eventDate)}</p>
                                </td>
                                <td className='px-10'>
                                    <p className=''>{formatDate(bookings.eventDate)}</p>
                                </td>
                                <td className=''>
                                    <button className='py-1 px-4 rounded-3xl bg-violet-500 text-white'>View</button>
                                </td>
                                <td className='px-10 text-red-500 font-bold ' >
                                    {bookings.totalAmount}
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

export default UnpaidBookings


