// import React from 'react'
// import { useState } from 'react'
// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'
// import { userRegister } from '../../Utils/UserEndpoints'

// function UserRegister() {   
//   const [input, setInput] = useState()
//   const [passMessage, setPassMessage] = useState('')
//   const [isChecked, setIsChecked] = useState(false)
//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setInput((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//     console.log(`${e.target.name} : ${e.target.value}`);
//   }

//   const handleSubmit = async () => {
//     try {
//       if (isChecked) {
//         if (input.password === input.confirmpass) {
//           const res = await userRegister(input.email)
//           if (res.data.success) {
//             navigate('/getOtp', { state: { data: input } });
//           }
//         } else {
//           setPassMessage("password doesn't match")
//           toast.error("password missmatch")
//           setTimeout(() => {
//             setPassMessage("");
//           }, 5000);
//           return;
//         }
//       }
//     } catch (error) {
//       console.log("registerfrontend", error.message)
//     }
//   }

//   return (
//     <>
// {/* https://www.wta.org/site_images/16126140646_fe2921feb8_k.jpg */}
//       <section className='w-full h-screen bg-no-repeat bg-cover bg-center py-40 sm:py-52 flex' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519379169146-d4b170447caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80)' }}>
//         <div className='absolute top-3 right-10 '>
//           <button className='font-bold border-2 border-green-300 py-1 px-2 w-20 cursor-pointer rounded-3xl' onClick={() => navigate('/login')}>Login</button>
//         </div>
//         <div className='container mx-5 lg:mx-36  w-full'>
//           <div className='mb-5 text-[15px] text-white font-bold md:text-[20px]'>
//             <h1>Become a part of our shutterbug family. Sign up and snap away!</h1>

//           </div>
//           <div className='flex gap-4'>
//             <input type='text' placeholder='First Name *' name='firstname' required onChange={handleChange} className='py-2 px-2 outline-green-200 rounded w-full  md:w-80' />
//             <input type='text' placeholder='Last Name *' name='lastname' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded w-full md:w-80' />
//           </div>
//           <div className='flex gap-4 my-3'>
//             <input type='text' placeholder='Phone Number *' name='phone' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded  w-full md:w-80' />
//             <input type='text' placeholder='Email Address *' name='email' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded w-full md:w-80' />
//           </div>
//           <div className='flex gap-4 my-3'>
//             <input type='password' placeholder='Password *' name='password' onChange={handleChange} className={`py-2 px-2 ${passMessage ? 'outline-red-600' : 'outline-green-200'}  rounded w-full md:w-80`} />
//             <input type='password' placeholder='Confirm Password *' name='confirmpass' onChange={handleChange} className={`py-2 px-2 ${passMessage ? 'outline-red-600' : 'outline-green-200'} rounded  w-full sm:w-80`} />

//           </div>
//           <p className='text-red-600 font-bold'>{passMessage}</p>

//           <div className='w-full md:w-[41rem] sm:flex  gap-4 my-8 '>
//             <div className='my-2'>

//               <input
//                 type='checkbox'
//                 className='h-5 w-5'
//                 checked={isChecked}
//                 onChange={(e) => setIsChecked(e.target.checked)}
//               />
//             </div>
//             <div className='sm:w-[30rem]  '>

//               <span className='ms-2 font-300 text-white'>By submitting and sharing your information you agree to WeddingPro’s <span className='text-blue-800'>terms of use</span> and <span className='text-blue-800'> privacy policy.</span></span>
//             </div>

//             <button onClick={handleSubmit} className='border border-black-500 h-14 w-full px-10 my-2 sm:w-64 hover:bg-white hover:text-cyan-300 bg-cyan-300 rounded font-bold outline-none'>Get in Touch</button>
//           </div>
//         </div>

//       </section>
//     </>
//   )
// }

// export default UserRegister




import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { userRegister } from '../../Utils/UserEndpoints'

function UserRegister() {   
  const initialValues = { email: "", password: "",confirmpass:"",firstname:"",lastname:"",phone:"" }
  const [input, setInput] = useState(initialValues)
  const [passMessage, setPassMessage] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const navigate = useNavigate()
  console.log("oinput ___________________ : ",input)
  const handleChange = (e) => {
    setFormErrors((prev)=>({
      ...prev,
      [e.target.name] :""
    }))
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    console.log(`${e.target.name} : ${e.target.value}`);
  }
  
  const validate = (values) => {
    console.log("values ________________" ,values)
    const errors = {}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasNumber = /\d/;

    if(!values.email) {
        errors.email = "This field is required!"
    }else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email"
    }
    if(!values.firstname){
        errors.firstname = "This field is required"
    }
    if(!values.lastname){
      errors.lastname = "This field is required"
    }
    if(!values.phone){
      errors.phone = "This field is required"
    }
    if(!values.password) {
        errors.password = "Password is required!"
    } else if (!hasUppercase.test(values.password)) {
      errors.password = "At least one uppercase letter"
    } else if (!hasLowercase.test(values.password)) {
      errors.password = "At least one lowercase letter"
    }
     else if (!hasNumber.test(values.password)) {
        errors.password = "At least one number"
    } else if (values.password.length <= 8) {
        errors.password = "length should be 8"
    }
    if(!values.confirmpass) {
      errors.confirmpass = "Password is required!"
    }
    // } else if (!hasUppercase.test(values.password)) {
    //     errors.password = "At least one uppercase letter"
    // } else if (!hasLowercase.test(values.password)) {
    //     errors.password = "At least one lowercase letter"
    // } else if (!hasNumber.test(values.password)) {
    //     errors.password = "At least one number"
    // } else if (values.password.length <= 8) {
    //     errors.password = "length should be 8"
    // }
    return errors;
}

  const handleSubmit = async () => {
    try {
      if (isChecked) {
        const errors = validate(input);
        if(errors.firstname || errors.lastname || errors.phone ||errors.email || errors.password || errors.confirmpass){
          setFormErrors(errors);
        }else{
          if (input.password === input.confirmpass) {
            const res = await userRegister(input.email)
            if (res.data.success) {
              navigate('/getOtp', { state: { data: input } });
            }
          } else {
            setPassMessage("password doesn't match")
            // toast.error("password missmatch")
            setTimeout(() => {
              setPassMessage("");
            }, 5000);
            return;
          }
        }
        
      }
    } catch (error) {
      console.log("registerfrontend", error.message)
    }
  }

  return (
    <>
{/* https://www.wta.org/site_images/16126140646_fe2921feb8_k.jpg */}
      <section className='w-full h-screen bg-no-repeat bg-cover bg-center py-40 sm:py-52 flex' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519379169146-d4b170447caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80)' }}>
        <div className='absolute top-3 right-10 '>
          <button className='font-bold border-2 border-green-300 py-1 px-2 w-20 cursor-pointer rounded-3xl' onClick={() => navigate('/login')}>Login</button>
        </div>
        <div className='container mx-5 lg:mx-36  w-full'>
          <div className='mb-5 text-[15px] text-white font-bold md:text-[20px]'>
            <h1>Become a part of our shutterbug family. Sign up and snap away!</h1>

          </div>
          <div className='flex gap-4'>
            <div className='flex flex-col'>
              <input type='text' placeholder='First Name *' name='firstname' required onChange={handleChange} className='py-2 px-2 outline-green-200 rounded w-full  md:w-80' />
              <p className='text-sm text-red-600 mb-2'>{formErrors.firstname}</p>
            </div>
            
            <div>

            <input type='text' placeholder='Last Name *' name='lastname' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded w-full md:w-80' />
            <p className='text-sm text-red-600 mb-2'>{formErrors.lastname}</p>
            </div>
         
          </div>
          <div className='flex gap-4 my-3'>
            <div>

            <input type='text' placeholder='Phone Number *' name='phone' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded  w-full md:w-80' />
            <p className='text-sm text-red-600 mb-2'>{formErrors.phone}</p>
            </div>
            <div>

            <input type='text' placeholder='Email Address *' name='email' onChange={handleChange} className='py-2 px-2 outline-green-200 rounded w-full md:w-80' />
            <p className='text-sm text-red-600 mb-2'>{formErrors.email}</p>
            </div>
          
          </div>
          <div className='flex gap-4 my-3'>
            <div>

            <input type='password' placeholder='Password *' name='password' onChange={handleChange} className={`py-2 px-2 ${passMessage ? 'outline-red-600' : 'outline-green-200'}  rounded w-full md:w-80`} />
            <p className='text-sm text-red-600 mb-2'>{formErrors.password}</p>
            </div>
            
            <div>

            <input type='password' placeholder='Confirm Password *' name='confirmpass' onChange={handleChange} className={`py-2 px-2 ${passMessage ? 'outline-red-600' : 'outline-green-200'} rounded  w-full sm:w-80`} />
            <p className='text-sm text-red-600 mb-2'>{formErrors.confirmpass}</p>
            </div>

          </div>
          <p className='text-red-600 font-bold'>{passMessage}</p>

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

export default UserRegister

