import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { vendorAxiosInstance } from '../../../Utils/Axios'
import { registerData } from '../../../Utils/VendorEndpoints'

function VendorRegister() {
  const [input, setInput] = useState()
  const [passMessage, setPassMessage] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // console.log(`${e.target.name} : ${e.target.value}`);
  }
  console.log("input", input)
  const handleSubmit = async () => {
    try {
      if (isChecked) {
        if (input.password === input.confirmpass) {
           const formData = new FormData();
           formData.append("fname",input.firstname)
           formData.append("lname",input.lastname)
           formData.append("phone",input.phone)
           formData.append("email",input.email)
           formData.append("companyName",input.cname)
           formData.append("district",input.district)
           formData.append("password",input.password)
           formData.append("unionCode",input.unionNumber)
          const imageInput = document.querySelector('input[type="file"]');
          console.log("imageInput : ",imageInput)

          if (imageInput.files.length > 0) {
            for (let i = 0; i < imageInput.files.length; i++) {
              console.log(imageInput.files[i])
              formData.append('image', imageInput.files[i]);
            }
          }
          // const res = await vendorAxiosInstance.post(`/register`,formData)
          const res = await registerData(formData)
          if (res) {
            console.log("response otp : ", res.data)
            //  toast.success(res.data.message)
            navigate('/vendor/login')
          }
        } else {
          setPassMessage("password doesn't match")
          toast.error("password missmatch")
          setTimeout(() => {
            setPassMessage("");
          }, 5000);
          return;
        }
      }
    } catch (error) {
      console.log("registerfrontend", error.message)
    }
  }

  return (
    <>

      <section className='h-[30rem] py-5 flex mt-[5rem] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url(https://previews.123rf.com/images/jpkirakun/jpkirakun1701/jpkirakun170100141/69509694-backdrop-of-green-leaves-natural-wall.jpg)' }}>
        {/* https://wallpapers.com/images/featured/photography-vss4nqivnvgidouh.jpg*/}
        {/* https://www.wta.org/site_images/16126140646_fe2921feb8_k.jpg */}
        <div className='container mx-16 lg:mx-24 w-full'>
          <div className=' text-[15px] text-white font-bold md:text-[20px]'>
            <h1>Become a part of our shutterbug family. Sign up and snap away!</h1>

          </div>
          <div className='flex gap-4 mt-5'>
            <input type='text' placeholder='First Name *' name='firstname' onChange={handleChange} className='py-2  px-2 outline-[#2e1065] border rounded w-full  md:w-80' />
            <input type='text' placeholder='Last Name *' name='lastname' onChange={handleChange} className='py-2   px-2 outline-green-200 border  rounded w-full md:w-80' />
          </div>
          <div className='flex gap-4 my-3'>
            <input type='text' placeholder='Phone Number *' name='phone' onChange={handleChange} className='py-2   px-2 outline-green-200 border rounded  w-full md:w-80' />
            <input type='text' placeholder='Email Address *' name='email' onChange={handleChange} className='py-2   px-2 outline-green-200 border rounded w-full md:w-80' />
          </div>
          <div className='flex gap-4 my-3'>
            <input type='text' placeholder='Company Name *' name='cname' onChange={handleChange} className='py-2   px-2 outline-green-200  border rounded  w-full md:w-80' />
            {/* <input type='text' placeholder='District *' name='district' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded w-full md:w-80' />  */}
            <select id="cars" name="district" onChange={handleChange} className='py-2 px-2   outline-green-200 rounded border  w-full md:w-80' >
              <option value="">Select district</option>
              {/* <option value="Kannur">Kannur</option>
              <option value="Kozhikode">Kozhikode</option>
              <option value="Malappuram">Malappuram</option>
              <option value="Wayanad">Wayanad</option>
              <option value="Wayanad"></option> */}
          <option value="kannur">Kannur</option>
          <option value="kozhikode">Kozhikode</option>
          <option value="wayanad">Wayanad</option>
          <option value="thrissur">Thrissur</option>
          <option value="palakkad">Palakkad</option>
          <option value="malappuram">Malappuram</option>
          <option value="ernakulam">Ernakulam</option>
          <option value="idukki">Idukki</option>
          <option value="kollam">Kollam</option>
          <option value="kottayam">Kottayam</option>
          <option value="alappuzha">Alappuzha</option>
          <option value="kasargod">Kasargod</option>
          <option value="pathanamthitta">Pathanamthitta</option>
          <option value="thiruvananthapuram">Thiruvananthapuram</option>
            </select>
          </div>
          <div className='flex gap-4 my-3'>
            <input type='password' placeholder='Password *' name='password' onChange={handleChange} className={`py-2 px-2 ${passMessage ? 'outline-red-600' : 'outline-green-200'}    rounded border w-full md:w-80`} />
            <input type='password' placeholder='Confirm Password *' name='confirmpass' onChange={handleChange} className={`py-2 px-2 ${passMessage ? 'outline-red-600' : 'outline-green-200'}  rounded border  w-full sm:w-80`} />

          </div>
          <p className='text-white font-bold'>Enter your doucments here</p>
          <div className='flex gap-4 my-3'>
           
            <input type='file' multiple className='py-2 bg-white px-2 outline-green-200 border rounded w-full md:w-80 ' name='image' onChange={handleChange} />
            <input type='text' className='py-2    px-2 outline-green-200 border rounded w-full md:w-80 ' name='unionNumber' placeholder='Enter your Union Number' onChange={handleChange} />
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

            <button onClick={handleSubmit} className='border border-black-500 h-14 w-full px-10 my-2 sm:w-64 hover:bg-white text-white hover:text-[#2e1065] bg-[#2e1065] rounded font-bold outline-none'>Get in Touch</button>
          </div>
        </div>
         {/* <div>
            <p className='text-white'>jithin chakcodfjdsfjd</p>
         </div> */}
      </section>
    </>
  )
}

export default VendorRegister
