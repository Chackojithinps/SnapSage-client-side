import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { VendorApi } from '../../Apis/UserApi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function VendorRegister() {
 const [input,setInput ] = useState()
 const [passMessage,setPassMessage] = useState('')
 const [isChecked,setIsChecked] =useState(false)
 const navigate= useNavigate()
  const handleChange=(e)=>{
    setInput((prev)=>({
        ...prev,
        [e.target.name] : e.target.value,
    }))
    // console.log(`${e.target.name} : ${e.target.value}`);
  }
 console.log("input",input)
  const handleSubmit=async()=>{
     try {
      if(isChecked){
        if(input.password===input.confirmpass){

        const res= await axios.post(`${VendorApi}/register`,{
          fname:input.firstname,
          lname:input.lastname,
          phone:input.phone,
          email:input.email,
          companyName:input.cname,
          district:input.district,
          password:input.password,
       })
       if(res){
        console.log("response otp : ",res.data)
        //  toast.success(res.data.message)
        navigate('/vendor/getotp')
       }
      }else{
         setPassMessage("password doesn't match")
         toast.error("password missmatch")
         setTimeout(() => {
           setPassMessage("");
         }, 5000);
         return;
      }
    }
     } catch (error) {
      console.log("registerfrontend",error.message)
     }
  }

  return (
    <>

<section className='w-full h-screen bg-no-repeat bg-cover bg-center py-40 sm:py-52 flex' style={{backgroundImage:'url(https://www.wta.org/site_images/16126140646_fe2921feb8_k.jpg)'}}>
     {/* https://iso.500px.com/wp-content/uploads/2021/08/Hobby-photographer-waiting-for-beautiful-sunset-By-Jarom%C3%ADr-Chalabala-2.jpg */}
     {/* https://www.wta.org/site_images/16126140646_fe2921feb8_k.jpg */}
        <div className='container mx-5 lg:mx-36  w-full'>
          <div className='mb-5 text-[15px] text-white font-bold md:text-[20px]'>
          <h1>Become a part of our shutterbug family. Sign up and snap away!</h1>

          </div>
            <div className='flex gap-4'> 
               <input type='text' placeholder='First Name *' name='firstname' onChange={handleChange}  className='py-2 px-2 outline-green-200 rounded w-full  md:w-80' />
               <input type='text' placeholder='Last Name *' name='lastname' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded w-full md:w-80' />
            </div>
            <div className='flex gap-4 my-3'>
               <input type='text' placeholder='Phone Number *' name='phone' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded  w-full md:w-80' />
               <input type='text' placeholder='Email Address *' name='email' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded w-full md:w-80' /> 
            </div>
            <div className='flex gap-4 my-3'>
               <input type='text' placeholder='Company Name *' name='cname' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded  w-full md:w-80' />
               {/* <input type='text' placeholder='District *' name='district' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded w-full md:w-80' />  */}
               <select id="cars" name="district" onChange={handleChange} className='py-2 px-2  outline-green-200 rounded  w-full md:w-80' >
                    <option value="Kannur">Select district</option>
                    <option value="Kannur">Kannur</option>
                    <option value="Kozhikode">Kozhikode</option>
                    <option value="Malappuram">Malappuram</option>
                    <option value="Wayanad">Wayanad</option>
                </select>
            </div>
            <div className='flex gap-4 my-3'>
               <input type='password' placeholder='Password *' name='password' onChange={handleChange} className={`py-2 px-2 ${passMessage?'outline-red-600':'outline-green-200'}  rounded w-full md:w-80`}  />
               <input type='password' placeholder='Confirm Password *' name='confirmpass' onChange={handleChange} className={`py-2 px-2 ${passMessage?'outline-red-600':'outline-green-200'} rounded  w-full sm:w-80`} />
               
            </div>
            <p className='text-red-600'>{passMessage}</p>
            
            <div className='w-full md:w-[41rem] sm:flex  gap-4 my-8 '>
              <div className='my-2'>

              <input
                  type='checkbox'
                  className='h-5 w-5'
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
              />
              </div>
              <div className='sm:w-[30rem]  '>
                
              <span className='ms-2 font-300 text-white'>By submitting and sharing your information you agree to WeddingPro’s <span className='text-blue-800'>terms of use</span> and <span className='text-blue-800'> privacy policy.</span></span>
            </div>
             
              <button onClick={handleSubmit} className='border border-black-500 h-14 w-full px-10 my-2 sm:w-64 hover:bg-white hover:text-cyan-300 bg-cyan-300 rounded font-bold outline-none'>Get in Touch</button>
            </div>
        </div>
        
     </section>
     </>
  )
}

export default VendorRegister
