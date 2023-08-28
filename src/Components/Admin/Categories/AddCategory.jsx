import React, { useEffect, useState } from 'react'
import AdminSidebar from '../AdminNavbar/AdminSidebar'
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import axios from 'axios'
import { AdminApi, UserApi } from '../../../Apis/UserApi';
import { toast } from 'react-hot-toast';
function AddCategory() {
   const [category,setCategory] = useState()
   const [categories,setCategories] = useState([])
   const [edit,setEdit] = useState(false)
   const [id,setId] = useState(null)
   const [message,setMessage] = useState("")

   const handleSubmit = async()=>{
    try{ 
        const lowerCaseCategory = category.toLowerCase();
        const categoryExists = categories.some(
           item => item.categoryName.toLowerCase() === lowerCaseCategory
        );
        if(categoryExists){
            setMessage("Category already Exists")
            setTimeout(()=>{
                setMessage("")

            },3000)
        }else{
            
            const res = await axios.post(`${AdminApi}/addCategory`,{  
               category:category
            })
            if (res.status === 200) {
                if(res.data.exists){
                    setMessage(res.data.message)
    
                    setTimeout(()=>{
                        setMessage("")
    
                    },3000)
                }else{
    
                    toast.success(res.data.message);
                }
                setCategory("")
            } else {
                toast.error("Something error happened");
            }
        }
    }catch(err){
        console.log("addCategory : ",err.message)
    }
   }
    
   const handleEdit = (category,id)=>{
       setCategory(category)
       setEdit(true)
       setId(id)
       }

   const handleClearedit = ()=>{
      setCategory("")
      setEdit(false)
   }

   const editCategory = async()=>{
     try {
        const lowerCaseCategory = category.toLowerCase();
        const categoryExists = categories.some(
           item => item.categoryName.toLowerCase() === lowerCaseCategory
        );
        if(categoryExists){
            setMessage("Category already Exists")
            setTimeout(()=>{
                setMessage("")

            },3000)
        }else{

            const res = await axios.patch(`${AdminApi}/editCategory?id=${id}`,{
               category
            })
            if (res.status === 200) {
               if(res.data.exists){
                   setMessage(res.data.message)
   
                   setTimeout(()=>{
                       setMessage("")
   
                   },3000)
               }else{
                  toast.success(res.data.message);
               }
               setCategory("")
           } else {
               toast.error("Something error happened");
           }
        }
     } catch (error) {
        console.log(error.message)
     }
   }

   const getCategory = async()=>{
      try{
         const res = await axios.get(`${AdminApi}/categories`)
         console.log("responeses : ",res.data)
         if (res.status === 200) {
            setCategories(res.data.categoryDatas)
        } else {
            toast.error("Something error happened");
        }
      }catch(err){
        console.log("addcategory : ",err.message)
      }
   }


   useEffect(()=>{
      getCategory()
   },[])
  return (
    <div className='flex' style={{ fontFamily: 'Noto Serif' }}>
       <div>
         <AdminSidebar/>
       </div>
       <div className='flex flex-col min-w-[60rem] mx-[10rem] my-20 items-center'  style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
          <h1 className='text-center text-3xl font-bold mb-10 my-6 underline'>Add Category</h1>
          <div className='my-10 relative '>
              <input type='text' onChange={(e)=>setCategory(e.target.value)} value={category} className='border w-[30rem] ms-8 outline-none border-gray-500 py-3 px-5'placeholder='Add Categories' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}/>
               {category?<div className='absolute cursor-pointer right-36 top-3' onClick={handleClearedit}>
                  <ClearRoundedIcon />
               </div>:null}
              {!edit?<button className='border border-gray-500 bg-red-500 text-white font-bold py-3 px-3 ' onClick={handleSubmit}>Add category</button>:
              <button className='border border-gray-500 bg-green-700 text-white font-bold py-3 px-3 ' onClick={editCategory}>Edit Category</button>}
              {message?<p className='text-center text-red-500 mt-5 '>{message}</p>:<p></p>}
          </div>
          <div className='flex flex-col items-center w-[62%] ms-6 mb-10'>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-full">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-red-200">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                                <div className='ms-[17rem]'>
                                    <th scope="col" className="px-6 py-4 font-medium  text-gray-900">Soft delete</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Edit</th>
                                </div>
                              
                            
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 border-t border-gray-100"> 
                            {categories.map(item => (
                                <tr key={item._id} className="">
                                    
                                    <td className="px-6 py-4 font-bold w-[1rem]">{item.categoryName}</td>
                                    <div className='flex gap-[50px] ms-[18rem]  my-2'>
                                        <td>
                                            <button className='py-1 px-3 border bg-red-200 hover:bg-white border-gray-200'>Block</button>
                                        </td>
                                        <td onClick={()=>handleEdit(item.categoryName,item._id)} className='text-red cursor-pointer'>
                                            <EditNoteRoundedIcon/>
                                        </td>
                                    </div>
                                     
                
                                
                                </tr>
                                
                            ))}
                        </tbody>
                    </table>
                </div>
          </div>
       </div>
    </div>
  )
}

export default AddCategory
