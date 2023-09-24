import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showProfile } from '../../../Store/userAuth'
import { useNavigate } from 'react-router-dom'
import { UserApi } from '../../../Utils/Api'
import { userAxiosInstance } from '../../../Utils/Axios'
import { bookingHistory } from '../../../Utils/UserEndpoints'

function BookingHistory() {
    const [bookingList, setBookingList] = useState([])
    const [Photos, setPhotos] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const profileOpen = useSelector((state) => state.user.status)

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based, so we add 1
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const getBookingData = async () => {
        dispatch(showProfile({ status: false }))
        const res = await bookingHistory()
        if (res.data.success) {
            setBookingList(res.data.BookingList)
            setPhotos(res.data.photos)
        }
    }
    useEffect(() => {
        getBookingData()
    }, [])
    return (
        <>
            <div className='mx-24 mt-10'>
                <p className='text-[2rem] font-bold' style={{ fontFamily: 'Noto Serif' }}>MY BOOKING HISTORY</p>
            </div>
            {bookingList && bookingList.map((bookings) => (
                <section className="container mx-auto mt-14 md:mt-0 p-10 md:py-4 md:px-24 antialiased" style={{ fontFamily: 'Noto Serif' }}>
                    <article
                        className="mt-6 flex flex-wrap md:flex-nowrap shadow-lg mx-auto w-full group cursor-pointer transform duration-500 hover:-translate-y-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <img className="w-full max-h-[326px] object-cover md:w-[23rem]" src={bookings.studio.images.images[0].photos[0]} alt="" />
                        <div className="">
                            <div className="p-5 pb-10 flex flex-col md:flex-row">
                                <div>
                                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                                        {bookings.studio.companyName}
                                    </h1>
                                    <p className="text-[15px] leading-relaxed">
                                        ({bookings.studio.district},{bookings.studio.city})
                                    </p>
                                </div>
                                <div className='md:mx-10 flex flex-col'>
                                    <p className="text-[15px] underline font-bold  md:mt-5 leading-relaxed">
                                        Venue place
                                    </p>
                                    <p className=''>{bookings.district},{bookings.city}</p>
                                    <p className="text-[15px] underline font-bold  md:mt-5 leading-relaxed">
                                        Event Date
                                    </p>
                                    {/* <p className=''>{bookings.eventDate}</p>  */}
                                    <p className=''>{formatDate(bookings.eventDate)}</p>
                                </div>
                                <div className='w-[10rem] flex flex-col'>
                                    <p className="text-[15px] underline font-bold  md:mt-5 leading-relaxed">
                                        Categories Selected
                                    </p>

                                    {bookings.categories.map((category) => (
                                        <p className="text-[15px] leading-relaxed">
                                            {category.categoryId.categoryName}
                                        </p>
                                    ))}

                                </div>
                                {
                                    !bookings.isCancelled ? <div className='md:mx-16 w-[15rem] gap-1 flex flex-col'>
                                        <p className="text-[15px] underline font-bold  md:mt-5 leading-relaxed">
                                            Payment
                                        </p>
                                        <p className='mt-3 font-bold text-[]'>
                                            <span className='text-black'>Total Amount :</span> ₹ {bookings.totalAmount}
                                        </p>
                                        <p className='font-bold'> Advance Paid :<span> ₹ {bookings.advanceAmount ? bookings.advanceAmount : 0}</span></p>
                                        <p className='font-bold'>Total Paid : <span className='text-green-500 text-[21px]'>₹ {bookings.totalAmount}</span></p>


                                    </div> : <div className='md:mx-16 w-[15rem] gap-1 flex flex-col'>
                                        <p className="text-[15px] underline font-bold  md:mt-5 leading-relaxed">
                                            Payment
                                        </p>
                                        <p className='mt-3 font-bold text-[]'>
                                            <span className='text-black'>Total Amount :</span> ₹ {bookings.totalAmount}
                                        </p>
                                    </div>
                                }


                            </div>
                            <div className="bg-blue-50 px-8 py-2 h-[5rem] md:max-w-[60rem]">
                                <div className="sm:flex sm:justify-between">
                                    <div>
                                        <div className="text-lg text-gray-700">
                                            <span className="text-gray-900 font-bold">196 km</span> from Dhaka
                                        </div>

                                        <div className="flex items-center">
                                            <div className="flex">
                                                <svg className="w-4 h-4 mx-px fill-current text-green-600"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                    </path>
                                                </svg>
                                                <svg className="w-4 h-4 mx-px fill-current text-green-600"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                    </path>
                                                </svg>
                                                <svg className="w-4 h-4 mx-px fill-current text-green-600"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                    </path>
                                                </svg>
                                                <svg className="w-4 h-4 mx-px fill-current text-green-600"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                    </path>
                                                </svg>
                                                <svg className="w-4 h-4 mx-px fill-current text-green-600"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                                                16 reviews
                                            </div>
                                        </div>
                                    </div>
                                    {bookings.isCancelled ?
                                    <div className='py-8'>
                                            <p>This Booking cancelled By vendor</p>
                                    </div>:<div>
                                           <button className='py-2 px-7 bg-violet-600 mt-3 rounded' onClick={()=>navigate('/review',{ state: { studioId: bookings.studio._id } })}>
                                               Add Review
                                           </button>
                                        </div>
                                    }
                                </div>

                            </div>
                        </div>
                    </article>
                    {
                        profileOpen && <div className="bg-white absolute top-[6rem] right-[8rem] w-[15rem] h-[20rem]" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} >
                            <ul className='flex flex-col py-4 px-4 rounded-[5px] ' style={{ fontFamily: 'Noto Serif' }}>
                                <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={() => navigate('/profile')}>Profile</li>
                                <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={() => navigate('/bookings')}>Bookings</li>
                                <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={() => navigate('/bookingHistory')}>Booking History</li>
                                <li className='cursor-pointer py-3 px-3 hover:bg-gray-300'>Logout</li>

                            </ul>
                        </div>
                    }
                </section>
            ))}
            {bookingList.length===0 && <div className='flex items-center justify-center h-[10rem] font-bold' >
                <p className='text-black-500'>
                    No Booking History
                </p>
                </div>}
        </>
    )
}

export default BookingHistory
