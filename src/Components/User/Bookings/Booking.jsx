import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showProfile } from '../../../Store/userAuth'
import { useNavigate } from 'react-router-dom'
import { bookingLists } from '../../../Utils/UserEndpoints'

function Booking() {
    const [bookingList, setBookingList] = useState([])
    const [Photos, setPhotos] = useState({})
    const [rating,setRating] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const profileOpen = useSelector((state) => state.user.status)

    const goToPayment = (bookings) => {
        navigate(`/payment`, { state: { bookings } });
    };
    
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based, so we add 1
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    const getBookingData = async () => {
        dispatch(showProfile({ status: false }))
        const res = await bookingLists()
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
            <div className='mx-20 mt-10'>
                <p className='text-[2rem] font-bold' style={{ fontFamily: 'Noto Serif' }}>MY BOOKINGS</p>
            </div>
            {bookingList && bookingList.map((bookings) => (
                <section className="container mx-auto mt-14 md:mt-0 p-10 md:py-4 md:px-20 antialiased" style={{ fontFamily: 'Noto Serif' }}>
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
                                    <p className=''>{bookings.studio.district},{bookings.studio.city}</p>
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
                                <div className='md:mx-16 w-[15rem] gap-1 flex flex-col'>
                                    <p className="text-[15px] underline font-bold  md:mt-5 leading-relaxed">
                                        Payment
                                    </p>
                                    <p className='mt-3 text-red-500 font-bold text-[18px]'>
                                        <span className='text-black'>Total Amount :</span> ₹ {bookings.totalAmount}
                                    </p>
                                    <p>Amount Paid : ₹ {bookings.advanceAmount ? bookings.advanceAmount : 0}</p>
                                    Balance Amount : ₹ {bookings.totalAmount - (bookings.advanceAmount ? bookings.advanceAmount : 0)}


                                </div>

                            </div>
                            <div className="bg-blue-50 px-8 py-2 h-[5rem] md:max-w-[62rem]">
                                <div className="sm:flex sm:justify-between">
                                    <div>
                                        <div className="text-lg text-gray-700">
                                            <span className="text-gray-900 font-bold"></span> {bookings.district}, {bookings.city}
                                        </div>

                                        
 

{/* 
                   

                     

                                        <div className="flex mx-3">
                <div className="flex text-[10px]">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-5 h-5 ${bookings.studio.review.rating === 1 ||
                        rating === 2 ||
                        rating === 3 ||
                        rating === 4 ||
                        rating === 5
                        ? "dark:text-yellow-500"
                        : "text-gray-400"
                        } `}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>

                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-5 h-5  ${bookings.studio.review.rating === 2 || bookings.studio.review.rating === 3 || bookings.studio.review.rating === 4 || bookings.studio.review.rating === 5
                        ? "dark:text-yellow-500"
                        : "text-gray-400"
                        } `}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-5 h-5  ${bookings.studio.review.rating === 3 || bookings.studio.review.rating === 4 || bookings.studio.review.rating === 5
                        ? "dark:text-yellow-500"
                        : "text-gray-400"
                        } `}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-5 h-5  ${bookings.studio.review.rating === 4 || bookings.studio.review.rating == 5
                        ? "dark:text-yellow-500"
                        : "text-gray-400"
                        } `}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-5 h-5  ${bookings.studio.review.rating === 5 ? "dark:text-yellow-500" : "text-gray-400"
                        } `}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                </div>
                <p><span className="mx-2 text-gray-500">{bookings.studio.review.rating}.0</span></p>
              </div>
 */}







                                    </div>
                                    {bookings.bookingStatus && !bookings.advanceAmount?
                                        <button className="mt-3 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
                                            onClick={() => goToPayment(bookings)}>
                                            Pay Now
                                        </button> : bookings.advanceAmount?<div className='py-8'>
                                            <p>You can make balance payment directly with the vendor</p>
                                        </div>:<div className='py-8'>
                                            <p>You can pay once your the vendor confirm your enquirey</p>
                                        </div>}
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

export default Booking
