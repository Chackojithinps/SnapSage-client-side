import React from 'react'

function CategoryImages() {
   return (
      <div className='ms-24 my-8  w-3/5 '>
         <p className='underline' style={{ fontFamily: 'Noto Serif' }}>Projects</p>
         <div className='h-16 flex items-center justify-center'>
            <ul className='flex gap-5 '>
               <li className='hover:text-blue- cursor-pointer '>candid Photography</li>
               <li className='hover:text-red-500 cursor-pointer '>Groom Photography</li>
               <li className='hover:text-red-500'>Wedding Photography</li>
               <li className='hover:text-red-500'>pre-wedding Photography</li>
               <li className='hover:text-red-500'>kids Photography</li>
            </ul>
         </div>
         <div className=' grid grid-cols-3 gap-2'>
            <div className='border border-green-500 w-[18rem] '>
               <img className='object-cover w-[18rem]  h-[10rem]' src='https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200' />

            </div>
            <div className='border border-green-500 h-[10rem] w-[18rem]'>
               <img className='object-cover w-[18rem]  h-[10rem]' src='https://us.123rf.com/450wm/dmitryag/dmitryag2105/dmitryag210506008/174519729-woman-outdoors-photographer-landscape-travel-professional-recreation.jpg?ver=6' />

            </div>
            <div className='border border-green-500 w-[18rem]  h-[10rem]'>
               <img className='object-cover w-[18rem]  h-[10rem]' src='https://images.squarespace-cdn.com/content/v1/52ed3507e4b041396187d22b/1618246708948-QVAESFAQ4JI5EILJGSE4/Candid+Photography+vs+Traditional+Photography5.jpg' />

            </div>
            <div className='border border-green-500 w-[18rem]  h-[10rem]'>
               <img className='object-cover w-[18rem]  h-[10rem]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpB4HA0mTC0yirHoeSWm6VOF1CCX9H61aeY3Ofs3gQBxiRTGDB8SJm2hRxfY7uvDMHXYY&usqp=CAU' />

            </div>
            <div className='border border-green-500 w-[18rem] h-[10rem]'>
               <img className='object-cover w-[18rem]  h-[10rem]' src='https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200' />

            </div>
            <div className='border border-green-500 w-[18rem]  h-[10rem]'>
               <img className='object-cover w-[18rem]  h-[10rem]' src='https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200' />
            </div>
            <div className='border border-green-500 w-[18rem]  h-[10rem]'>
               <img className='object-cover w-[18rem]  h-[10rem]' src='https://images.squarespace-cdn.com/content/v1/52ed3507e4b041396187d22b/1618246708948-QVAESFAQ4JI5EILJGSE4/Candid+Photography+vs+Traditional+Photography5.jpg' />

            </div>
            <div className='border border-green-500 w-[18rem]  h-[10rem]'>
               <img className='object-cover w-[18rem]  h-[10rem]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpB4HA0mTC0yirHoeSWm6VOF1CCX9H61aeY3Ofs3gQBxiRTGDB8SJm2hRxfY7uvDMHXYY&usqp=CAU' />

            </div>
            <div className='border border-green-500 w-[18rem]  h-[10rem]'>
               <img className='object-cover w-[18rem]  h-[10rem]' src='https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200' />

               </div>
            
         </div>
      </div>
   )
}

export default CategoryImages
