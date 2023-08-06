import React from 'react'

function UserRegister() {
  return (
    <div>
    <div className='min-h-screen py-28' style={{backgroundImage:'url(dhttps://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg)',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
     <div className='container mx-auto'>
       <div className='bg-white w-10/12 lg:w-8/12 mx-auto flex-col lg:flex-row shadow-lg overflow-hidden flex'>
         <div className='w-full lg:w-1/2 text-white flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center'  style={{backgroundImage:'url(https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <h2 >Welcome</h2>
            <p className='w-10/12'>nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem</p>
         </div>
         <div className='w-full lg:w-1/2 py-16 px-12'>
           <h2 className='text-1xl mb-4'>Register</h2>
           <p className='mb-4'>Create Your Accunt.it will take only one minute</p>
           <form action=''>
             <div className='grid grid-cols-2 gap-2'>
               <input type='text' placeholder='First Name' className='border border-gray-400 py-1 px-2 outline-blue-300'/>
               <input type='text' placeholder='SurName' className='border border-gray-400 py-1 px-2 outline-blue-300'/>
            
             </div>
             <div>
             <input type='text' placeholder='email' className='border border-gray-400 py-1 px-2 my-2 w-full outline-blue-300'/>
             <input type='text' placeholder='phone' className='border border-gray-400 py-1 px-2 my-1 w-full outline-blue-300' />
             <input type='text' placeholder='password' className='border border-gray-400 py-1 px-2 my-1 w-full outline-blue-300' />
             <input type='text' placeholder='Confirm password' className='border border-gray-400 py-1 px-2 my-1 w-full outline-blue-300' />
             <input type='checkbox' className='border border-gray-400 my-4'/>
             <span className='mx-2'>I accept the <a href='#' className='text-purple-500'>Terms of use</a>T & <a href='#' className='text-purple-500'>privacy policy</a></span>
             </div>
             <div className='flex items-center justify-center my-6'>
                 <button className='border border-gray-500 py-1 px-2 w-full bg-purple-500 text-white rounded text-center '>Register</button>

             </div>
           </form>
         </div>
       </div>

     </div>
  </div>
 </div>
  )
}

export default UserRegister
