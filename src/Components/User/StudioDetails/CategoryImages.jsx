import React, { useEffect, useState } from 'react'

function CategoryImages({ studio }) {
   const [selectedCategory, setSelectedCategory] = useState(null);

   useEffect(() => {
      setSelectedCategory('all');
   }, []);

   const handleCategoryClick = (categoryId) => {
      setSelectedCategory(categoryId);
    };

   const categoryImages = selectedCategory === 'all'
   ? studio.images.images.flatMap(category => category.photos) // Flatten all photos
   : studio.images.images.find(category => category.categoryId === selectedCategory)?.photos || [];

   //  console.log("categoryImages : : : : ",categoryImages)
   return (
      <div className='ms-5 md:ms-24 my-8 w-[28rem] md:w-[57rem] '  style={{ fontFamily: 'Noto Serif' }}>
         <p className='underline'>Projects</p>
         <div className='h-16 flex  items-center overflow-x-scroll'>
            <ul className='flex gap-4' >
               <li   className={`cursor-pointer border py-2 px-4 rounded-[5px] ${selectedCategory === "all" ? 'font-bold text-white bg-orange-500' : ''}`} onClick={()=>setSelectedCategory('all')}>All</li>
               {studio.images.images.map((category) => (
                  <li 
                  key={category.categoryId}
                  className={`border py-2 px-4 min-w-[12rem] rounded-[5px] cursor-pointer ${selectedCategory === category.categoryId ? 'font-bold text-white bg-orange-500' : ''}`}
                  onClick={() => handleCategoryClick(category.categoryId)}>{category.categoryId.categoryName}</li>
               ))}
            </ul>
         </div>
         <div className=' grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[31rem] overflow-y-scroll'>
             {categoryImages.map((photo)=>(
            <div className=' h-[10rem] w-[13rem] md:w-[18rem]'>
           
               <img className='object-cover w-[18rem]  h-[10rem]' src={photo} alt='' />
               
         
            </div>
            
            ))}

         </div>
      </div>
   )
}

export default CategoryImages
