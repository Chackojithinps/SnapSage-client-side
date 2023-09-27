import React, { useEffect, useState } from "react";
import VendorSidebar from "../VendorNav/VendorSidebar";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { allbookingData } from "../../../Utils/VendorEndpoints";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Vendordashboard() {

  const [bookingData,setBookingData] = useState({})
  const [bookingDatas, setBookingDatas] = useState([])

  const [days,setDays] = useState({})

  const data = {
    labels: ['Booking Requests', 'Upcoming Events', 'Unpaid Bookings ', 'Work History'],

    datasets: [
      {
        data: [bookingData.bookingRequest,bookingData.upcomingEvents,bookingData.unpaidBookings,bookingData.workHistory],
        label: "Total counts",
        backgroundColor: [
          '#3B82F6',
          '#F59E0B',
          '#EF4444',
          '#10B981',
        ],
        hoverOffset: 4,
      },
    ],
  };
  console.log("Days : ",days)
  const barChartData = {
    labels : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        data: [days.Sunday,days.Monday,days.Tuesday,days.Wednesday,days.Thursday,days.Friday,days.Saturday],
        label:"Total Booking reqests",
        backgroundColor: [
          'skyBlue',
        ],
        hoverOffset: 4,
      },
    ],
  };
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based, so we add 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const getBookings =async ()=>{
    const res = await allbookingData()
    if(res.data.success){
      setBookingData({
        bookingRequest:res.data.bookingRequest,
        workHistory:res.data.workHistory,
        upcomingEvents:res.data.upcomingEvents,
        unpaidBookings:res.data.unpaidBookings,
        totalPrice : res.data.totalPrice
      })
      setDays(res.data.Days)
      setBookingDatas(res.data.vendorStudio)
    }
  }
  useEffect(()=>{
      getBookings()
  },[])
  return (
    <div>
      <div className="flex">
        <div >
          <VendorSidebar />
        </div>
        <div className="h-full bg-[#cbd5e1] w-full ">
          <div className="bg-[#0ea5e9] h-[25rem]  w-full ">
            <div className="relative pt-32 pb-32 bg-lightBlue-500">
              <div className="px-4 md:px-6 mx-auto w-full">
                <div>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                Bookings Requests
                              </h5>
                              <span className="font-bold text-xl">{bookingData.bookingRequest}</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                <i className="far fa-chart-bar"></i>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-blueGray-500 mt-4">
                            <span className="text-emerald-500 mr-2">
                              <i className="fas fa-arrow-up"></i> 3.48%
                            </span>
                            <span className="whitespace-nowrap">Since last month</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                upcoming events
                              </h5>
                              <span className="font-bold text-xl">{bookingData.upcomingEvents}</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                                <i className="fas fa-chart-pie"></i>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-blueGray-500 mt-4">
                            <span className="text-red-500 mr-2">
                              <i className="fas fa-arrow-down"></i> 3.48%
                            </span>
                            <span className="whitespace-nowrap">Since last week</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                Finished works
                              </h5>
                              <span className="font-bold text-xl">{bookingData.workHistory}</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                                <i className="fas fa-users"></i>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-blueGray-500 mt-4">
                            <span className="text-orange-500 mr-2">
                              <i className="fas fa-arrow-down"></i> 1.10%
                            </span>
                            <span className="whitespace-nowrap">Since yesterday</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                Total Amount
                              </h5>
                              <span className="font-bold text-xl">₹{bookingData.totalPrice}</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">
                                <i className="fas fa-percent"></i>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-blueGray-500 mt-4">
                            <span className="text-emerald-500 mr-2">
                              <i className="fas fa-arrow-up"></i> 12%
                            </span>
                            <span className="whitespace-nowrap">Since last month</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          <div className="flex">

          <div className="border py-10  ms-10 bg-white absolute top-[23rem] rounded-xl w-[50%] h-[30rem]">
                <p className="text-center font-medium">Weekly Bookings</p>
              <div className="px-16 text-center mt-12" >
                <Bar data={barChartData} />
              </div> 
            
            </div>
            <div className="border h-[30rem] py-10 bg-white absolute top-[23rem] right-[3rem] rounded-xl w-[25%]">
              <div className="">
                <Pie data={data} />
              </div>
            </div>
          </div>
          
          {/* <div>
             <input type="text" />
          </div> */}
          <div className="flex">
            <div className="border ms-10 mt-[25rem] bg-white rounded-xl w-[93%] max-h-[25rem] mb-20 overflow-y-auto">
              <div className='flex'>
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 ">
                  <thead className="bg-gray-200">
                    <tr>
                      <th scope="col" className="px-10 py-4 font-medium text-gray-900">Studio</th>
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900">Selected Categories</th>
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900">Venue place</th>
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900">event date</th>
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900">view profile</th>
                      <th scope="col" className="px-6 py-4 font-medium text-gray-900">WorkStatus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">

                    {bookingDatas.map((bookings) => (
                      <tr className="hover:bg-gray-50">
                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                          <div className="text-sm">
                            <div className="font-medium text-gray-700">{bookings.studio.companyName}</div>
                            <div className="text-gray-400">{bookings.studio.district}, {bookings.studio.city}</div>
                          </div>
                        </th>
                        <td class="py-4">
                                    {bookings.categories.map((category) => (
                                        <div className='flex gap-1'>
                                            <FiberManualRecordIcon style={{ fontSize: '10px', marginTop: '5px' }} />
                                            <p className='w-[10rem]'>{category.categoryId.categoryName}</p>
                                        </div>

                                    ))}
                                </td>

                                <td className='px-5'>
                                   <p className=''>{bookings.district}, {bookings.city}</p>
                                </td>
                                <td className='px-5'>
                                   <p className=' font-bold'>{formatDate(bookings.eventDate)}</p>
                                </td>
                                <td className='px-8'>
                                    <button className='py-1 px-4 rounded-3xl bg-violet-500 text-white'>View</button>

                                </td>
                                <td className='px-8'>
                                  {bookings.bookingStatus?
                                  <p className="text-green-500">Varified</p>:<p className="text-red-500">Not Varified</p>
                                  }
                                </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* </div>  */}
              {/* </div> */}
              
            </div>
            {/* <div className="border border-red-500 h-[23rem] my-[28rem] ms-[3rem] bg-white  top-[20rem] rounded-xl w-[26%]">

            </div> */}
          </div>
        </div>
      </div>

    </div>

  );
}

export default Vendordashboard;
