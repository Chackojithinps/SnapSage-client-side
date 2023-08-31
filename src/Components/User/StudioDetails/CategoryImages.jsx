import React, { useEffect, useState } from 'react'

function CategoryImages({ studio }) {
   const [selectedCategory, setSelectedCategory] = useState(null);
   console.log("selectedCategory : : ",selectedCategory)

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
      <div className='ms-24 my-8 w-3/5 ' >
         <p className='underline'>Projects</p>
         <div className='h-16 flex  items-center '>
            <ul className='flex gap-5' >
               <li   className={`cursor-pointer ${selectedCategory === "all" ? 'font-bold text-red-500' : ''}`} onClick={()=>setSelectedCategory('all')}>All</li>
               {studio.images.images.map((category) => (
                  <li
                  key={category.categoryId}
                  className={`hover:text-blue- cursor-pointer ${selectedCategory === category.categoryId ? 'font-bold text-red-500' : ''}`}
                  onClick={() => handleCategoryClick(category.categoryId)}>{category.categoryId.categoryName}</li>
               ))}
            </ul>
         </div>
         <div className=' grid grid-cols-3 gap-2 max-h-[31rem] overflow-y-scroll'>
             {categoryImages.map((photo)=>(
            <div className='border border-green-500 h-[10rem] w-[18rem]'>
           
               <img className='object-cover w-[18rem]  h-[10rem]' src={photo} alt='' />
               
         
            </div>
            
            ))}

         </div>
      </div>
   )
}

export default CategoryImages
