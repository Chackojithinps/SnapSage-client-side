import React, { useState, useEffect } from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { toast } from 'react-hot-toast';
import { acceptBookingData, bookingData } from '../../../Utils/VendorEndpoints';

function Bookings() {
    const [bookingList, setBookingList] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [BookingStatus, setBookingStatus] = useState(false)
    const [message, setMessage] = useState("")
    console.log("bookingLists : ", bookingList)
    const handleAccept = async (id,email) => {
        console.log("id : ", id)
        console.log("email : email : ",email)
        // const res = await vendorAxiosInstance.patch(`acceptBooking?id=${id}`, {
        //     email:email
        // })
        const res = await acceptBookingData(id,email)
        if (res.data.success) {
            toast.success("Request Accepted")
            setBookingStatus(!BookingStatus)
        }
    }

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based, so we add 1
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
      
    const getData = async () => {
        try {
            // const res = await vendorAxiosInstance.get(`/bookings?search=${searchInput}`)
            const res = await bookingData(searchInput)
            if (res.data.success) {
                if (res.data.message) {
                    setMessage(res.data.message)
                } else {
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
    }, [searchInput, BookingStatus])
    return (

        <div className='flex flex-col' style={{ fontFamily: 'Noto Serif' }}>

            <div className='ms-5 mt-5' >
                <input className='py-4 w-[75rem] border border-gray-300 bg-gray-100 px-5 outline-none' placeholder='Search here ' onChange={(e) => setSearchInput(e.target.value)} />
            </div>

            {!message ? <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[75rem] max-h-[30rem] overflow-y-scroll">
                <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead class="bg-gray-100">
                        <tr>
                            <th scope="col" class="px-10 py-4 font-bold text-gray-900 ">Studio Branch</th>
                            <th scope="col" class="px- py-4 font-bold text-gray-900">Selected Categories</th>
                            {/* <th scope="col" class="px-2 font-bold text-gray-900">Phone</th> */}
                            <th scope="col" class="px-9 py-4 font-bold text-gray-900">Venue Place</th>
                            <th scope="col" class="px-9 py-4 font-bold text-gray-900">Event Date</th>
                            <th scope="col" class="px-6 py-4 font-bold text-gray-900">View Profile</th>
                            <th scope="col" class="px-6 py-4 font-bold text-gray-900">Total Amount</th>

                            <th scope="col" class="px-6 py-4 font-bold text-gray-900">Accept/Reject</th>


                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                        {bookingList.map(bookings => (
                            <tr class="hover:bg-gray-50">
                                <td class="flex gap-3 px-6 py-8 font-normal text-gray-900">
                                   
                                    <div class="text-sm">
                                        <div class=" text-gray-700">{bookings.studio.companyName}</div>
                                        <div class= "text-gray-400">{bookings.studio.city}</div>
                                    </div>
                                </td>
                                

                                <td class="py-4">
                                    {bookings.categories.map((category) => (
                                        <div className='flex gap-1'>
                                            <FiberManualRecordIcon style={{ fontSize: '10px', marginTop: '5px' }} />
                                            <p className='w-[10rem]'>{category.categoryId.categoryName}</p>
                                        </div>

                                    ))}
                                </td>
                                
                                <td className='px-9'>
                                   <p className=''>{bookings.district}, {bookings.city}</p>
                                </td>
                                <td className='px-9'>
                                   <p className=' font-bold'>{formatDate(bookings.eventDate)}</p>
                                </td>
                                <td className='px-8'>
                                    <button className='py-1 px-4 rounded-3xl bg-violet-500 text-white'>View</button>

                                </td>
                                <td className='px-10 text-red-500 font-bold'>
                                   ₹ {bookings.totalAmount}
                                </td>
                                <td>
                                    <div className='flex gap-5 px-9'>

                                        <div className='cursor-pointer' onClick={() => handleAccept(bookings._id,bookings.email)}>
                                            <TaskAltSharpIcon color='success' />

                                        </div>
                                        <div className='cursor-pointer'>
                                            <CloseSharpIcon style={{ color: 'red' }} />

                                        </div>
                                    </div>

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

