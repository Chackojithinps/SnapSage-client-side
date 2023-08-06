import React from 'react'

function UserLogin() {
  return (
   <>
     <section className='w-full h-screen bg-no-repeat bg-cover bg-center py-40 flex' style={{backgroundImage:'url(https://www.wta.org/site_images/16126140646_fe2921feb8_k.jpg)'}}>
     {/* https://iso.500px.com/wp-content/uploads/2021/08/Hobby-photographer-waiting-for-beautiful-sunset-By-Jarom%C3%ADr-Chalabala-2.jpg */}
        <div className='container mx-5 lg:mx-36  w-full'>
            <div className='flex gap-4'> 
               <input type='text' placeholder='First Name *' className='py-2 px-2 outline-green-200 rounded w-full  md:w-80'/>
               <input type='text' placeholder='Last Name *' className='py-2 px-2 outline-green-200 rounded w-full md:w-80' />
            </div>
            <div className='flex gap-4 my-3'>
               <input type='text' placeholder='Phone Number *' className='py-2 px-2 outline-green-200 rounded  w-full md:w-80' />
               <input type='text' placeholder='Email Address *' className='py-2 px-2 outline-green-200 rounded w-full md:w-80' /> 
            </div>
            <div className='flex gap-4 my-3'>
               <input type='text' placeholder='Company Name *' className='py-2 px-2 outline-green-200 rounded w-full md:w-80' />
               {/* <input type='tdext' placeholder='Company Location *' className='py-2 px-2 outline-green-200 rounded w-2/5' />  */}
               <select name="district" id="lang" placeholder='District' className='py-2 px-2  w-full md:w-80 rounded outline-green-200'>
                <option value="javascript">Kozhikode</option>
                <option value="php">Kannur</option>
                <option value="java">Java</option>
                <option value="golang">Golang</option>
                <option value="python">Python</option>
                <option value="c#">C#</option>  
                <option value="C++">C++</option>
                <option value="erlang">Erlang</option>
              </select>
            </div>
            <div className='flex gap-3'>
               <input type='text' placeholder='Password *' className='py-2 px-2 outline-green-200 rounded  w-full sm:w-80' />
            </div>
            <div className='w-full md:w-[41rem] sm:flex  gap-4 my-8 '>
              <div>

              <input type='checkbox'/> 
              </div>
              <div className='sm:w-[30rem]  '>
                
              <span className='ms-2 font-300 text-white'>By submitting and sharing your information you agree to WeddingPro’s <a href='' className='text-blue-800'>terms of use</a> and <a href="" className='text-blue-800'> privacy policy.</a></span>
            </div>
             
              <button className='border border-black-500 h-14 w-full px-10 my-2 sm:w-64 hover:bg-white hover:text-cyan-300 bg-cyan-300 rounded font-bold outline-none'>Get in Touch</button>
            </div> 
        </div>
        
     </section>
   </>
  )
}

export default UserLogin
