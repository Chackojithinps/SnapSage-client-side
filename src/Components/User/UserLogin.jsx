
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { adduserDetails } from '../../Store/userAuth'
import { userSignin } from '../../Utils/UserEndpoints'
function UserLogin() {
  
  const [checked, setCheckbox] = useState(false)
  const initialValues = { email: "", password: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [message,setMessage] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validate = (values) => {
    const errors = {}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.email) {
        errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email"
    }
    if (!values.password) {
        errors.password = "Password is required!"
    }
    return errors;
}

const handleChange = (e) => {
  
  setFormErrors((prev)=>({
    ...prev,
    [e.target.name] :""
  }))
  setFormValues((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }))
  console.log(`${e.target.name} : ${e.target.value}`);
}

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (checked) {
        const errors = validate(formValues);
        if(errors.email || errors.password){
          setFormErrors(errors);
        }else{
          const res = await userSignin(formValues.email,formValues.password)
          if (res.status === 200){
              if(res.data.message){
                setMessage(res.data.message)
                setTimeout(()=>{
                  setMessage("")
                },4000)
              }else{
                localStorage.setItem("token", res.data.userDetail.token)
                dispatch(adduserDetails({ name: res.data.userDetail.userName, token: res.data.userDetail.token}))
                toast.success(res.data.successMessage);
                navigate('/')
              }
          } else {
            toast.error(res.data.message);
          }
        }
      } else {
        return;
      }
  };

  return (
    <>
      <div className='min-h-screen py-28' style={{ backgroundImage: 'url(1https://img.freepik.com/premium-photo/vivid-view-blue-sky-through-opening-trees-thick-forest-low-angle_634053-2388.jpg?w=2000)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='container mx-auto'>
          <div className='bg-white w-10/12 lg:w-8/12 mx-auto flex-col lg:flex-row shadow-lg overflow-hidden flex'>
            <div className='w-full lg:w-1/2 text-white flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              {/* <h2 >Welcome</h2>
              <p className='w-10/12'>nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem</p> */}
            </div>
            <div className='w-full lg:w-1/2 py-16 px-12'>
              <h2 className='text-3xl font-bold mb-4 text-center'>User Login</h2>
              <p className='mb-4 text-center'>Hey,Enter your details to get sign in to your account</p>
              <form action=''>
                <div className='grid grid-cols-2 gap-2'>

                </div>
                <div>
                  <input type='text' onChange={handleChange} placeholder='Enter Email/Phone no' className='border border-gray-400 py-2 px-3 my-2 rounded w-full outline-blue-300' name='email' />
                  <p className='text-sm text-red-600 mb-2'>{formErrors.email}</p>
                  <input type='password' onChange={handleChange} placeholder='Passcode' className='border border-gray-400 py-2 px-3 rounded my-1 w-full outline-blue-300' name='password'/>
                  <p className='text-sm text-red-600 mb-2'>{formErrors.password}</p>
                  <input type='checkbox' onChange={(e) => setCheckbox(e.target.checked)} className='border border-gray-400 my-4' />
                  <span className='mx-2'>I accept the <span className='text-purple-500'>Terms of use</span>T & <span className='text-purple-500'>privacy policy</span></span>
                </div>
                <div className='flex items-center justify-center mt-6'>
                  <button className='border border-gray-500 py-1 px-2 w-full bg-purple-500 text-white rounded text-center ' onClick={handleSubmit}>Login</button>

                </div>
                <div className='mt-2'>
                {message && <p className='text-red-500 text-center font-bold'>{message}</p>}

                </div>
                <p className='my-3 text-center'>Don't you have an account? <span className='font-bold hover:text-blue-500 hover:cursor-pointer' onClick={() => navigate('/register')}>register</span> now</p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default UserLogin