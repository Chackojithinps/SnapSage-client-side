import React, { useState } from 'react'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function Booking({studio}) {
    const [open, setOpen] = useState(false)
    const [price, setPrice] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleCheckboxChange = (categoryName, price) => {
        if (selectedCategories.includes(categoryName)) {
          setSelectedCategories((prevSelected) =>
            prevSelected.filter((selected) => selected !== categoryName)
          );
          setTotalPrice((prevTotal) => prevTotal - price);
        } else {
          setSelectedCategories((prevSelected) => [...prevSelected, categoryName]);
          setTotalPrice((prevTotal) => prevTotal + price);
        }
      };
      
  return (
    <>
     <div className={`rounded-2xl px-7 py-7 w-[25rem]  my-4 sticky top-16 right-5 ${price ? 'h-[38rem]' : 'h-[27rem]'}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>

               <div className='flex flex-col gap-3'>
                  <p className='font-bold text-[25px]'>{studio.companyName}</p>

                  <div class="flex items-center space-x-1">
                     <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <p className='font-bold px-3'>5.0 Fantastic  </p>
                     <p className='underline'> 18 reviews</p>
                  </div>

                  <div className='flex gap-2'>

                     <AddLocationAltOutlinedIcon color='action' />
                     <p className='text-gray-700 hover:underline'>{studio.district},{studio.city}</p>
                  </div>
                  <div className='flex gap-2'>
                     <LocalOfferOutlinedIcon color='action' />
                     <p className='text-red-500 hover:underline'>20% discount</p>
                  </div>
                  <div className='flex justify-between'>
                     <p className='text-[16px]'>Per Day Price Estimate</p>
                     <div className='flex cursor-pointer' onClick={()=>setPrice(!price)}>
                        <p className='text-[13px] text-[#db2777] cursor-pointer'>Pricing info</p>
                        <KeyboardArrowDownOutlinedIcon style={{color:'#db2777',fontSize:'20px'}}/>

                     </div>
                    
                  
                  </div>
                  {price ? <div className='grid grid-cols-2 gap-2 mt-3'>
                     {studio.category.map((category) => (
                       
                        <div className='flex flex-col bg-gray-50'>
                           <div>
                              <label className="flex items-center">
                                 <input
                                    type="checkbox"
                                    className="w-3 h-3"
                                    checked={selectedCategories.includes(category.categories.categoryName)}
                                    onChange={() => handleCheckboxChange(category.categories.categoryName, category.price)}
                                 />
                                 <span className="ms-2 text-[12px]">{category.categories.categoryName}</span>
                              </label>
                           </div>
                           <div>
                              <p className='text-gray-500 ms-5 text-[12px]'>Rs ₹{category.price}</p>
                           </div>
                        </div>
                     ))}
                  </div> : <div></div>}
                 <div>
                  <p className='font-bold'>Total Rs : <span className='text-red-500'>Rs {totalPrice}</span></p>
                  </div>

                  <div className='flex items-center justify-center'>
                     <p className='text-center text-[12px]'>Responds within 24 hours </p>
                     <BoltOutlinedIcon color='warning' style={{ height: '17px' }} />
                  </div>
                  <button className='py-2 px-2 2-full bg-red-600 text-white rounded-[3px] hover:bg-red-500' onClick={() => setOpen(true)}>Request Pricing</button>
                  <div className='flex gap-2'>
                     <TrendingUpIcon color='success' />
                     <p className='text-[13px]'>Popular in your area</p>
                  </div>
                  <div className='flex gap-2'>
                     <StarBorderOutlinedIcon color='warning' />
                     <p className='text-[13px]'>Highly recommended in your area</p>
                  </div>
               </div>
            </div>

      {/* -----------------------------------------------------Modal----------------------------------------- */}
        {open ?
            <div className=' absolute top-[5rem] px-8 py-5 rounded-xl left-[26rem]  bg-white w-[40rem] h-[35rem] ' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
               <div className='flex flex-col'>
                  <div className='flex justify-between'>
                     <p className='text-gray-500'>Studio Name</p>
                     <CloseOutlinedIcon color='action' style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => setOpen(false)} />
                  </div>
                  <p className='text-[23px] font-bold' style={{ fontFamily: 'Noto Serif' }}>Request Pricing</p>
                  
                  <div className=''>
                     <p className='mt-2 font-bold' style={{ fontFamily: 'Noto Serif' }}> Total Price : <span className='text-red-600 text-[20px]'>Rs {totalPrice}</span></p>
                  </div>
                  
                  <p className='text-gray-500 mt-4 text-[12px]'>Fill this form and Go Glam Makeup Studio will contact you shortly. All the information provided will be treated confidentially.</p>
                  <div className='flex flex-col mt-3 gap-3'>
                     <div>
                        <textarea type='text' placeholder='Write your message' className='border h-20 px-2 py-1 w-full outline-none rounded-[5px]' />
                     </div>
                     <div>
                        <input type='text' placeholder='Name and Surname' className='border py-2 w-full px-2 rounded-[5px] outline-none' />
                     </div>
                     <div className='flex gap-2 '>
                        <input type='email' placeholder='Email' className='border py-2 px-2 w-[18rem] rounded-[5px] outline-none' />
                        <input type='number' placeholder='Phone' className='border py-2 px-2 w-[18rem] rounded-[5px] outline-none' />
                     </div>
                     <div>
                        <input type='date' placeholder='Event date' className='border py-2 w-[285px] text-gray-500 rounded-[5px] outline-none px-2' />
                     </div>
                  </div>
                  
                  <p className='text-gray-500 text-[12px] mt-3'>By clicking "Send request" you agree to sign up and accept WeddingWire's <span className='text-blue-500'>Terms of Use.</span></p>
                  <button className='border border-red-500 py-2 mt-3 rounded-[5px] bg-red-600 text-white font-bold hover:bg-red-500'>Send</button>
               </div>
            </div> :
            <div>
            </div>
         }
            </>

  )
}

export default Booking
