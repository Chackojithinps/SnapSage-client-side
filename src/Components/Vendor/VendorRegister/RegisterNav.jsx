import React from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterNav() {
 const navigate = useNavigate()
  return (
    <div className='max-h-1 text-[#2e1065] flex justify-between' style={{ fontFamily: 'Noto Serif' }}>
       <div className='flex items-center mt-10'>
          <p className='text-3xl font-bold  mx-5'>SnapSage</p>
       </div>
       <div className='mt-5 mr-10 flex gap-5'>
          <div className='flex gap-5 font-bold'>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div>

          <p>Already have an account ?</p>
          <p className='ms-36 text-[#2e1065] cursor-pointer hover:underline font-bold' onClick={()=>navigate('/vendor/login')}>Login</p>
          </div>
       </div>
    </div>
  )
}

export default RegisterNav
