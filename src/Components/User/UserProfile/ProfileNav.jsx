import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showProfile } from '../../../Store/userAuth'
import { userAxiosInstance } from '../../../Utils/Axios'
import { toast } from 'react-hot-toast'
import { getProfile } from '../../../Utils/UserEndpoints'

function ProfileNav() {
    const [file, setFile] = useState()
    const [userData, setUserData] = useState({})
    const [loader, setLoader] = useState(false)
    const [edit, setEdit] = useState(false)
    const [editedUserData,setEditedUserData] = useState({
    })
    const navigate = useNavigate()
    const profileOpen = useSelector((state) => state.user.status)
    const dispatch = useDispatch()

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', file);

            const res = await userAxiosInstance.post(`/upload`, formData);
            if (res.data.success) {
                setUserData({ ...userData, image: res.data.img }); // Corrected syntax here
                // Corrected syntax here
            }
        } catch (error) {
            console.log("error message: ", error.message);
        }
    }
    
    const handleInputChange = (e) => {
        setEditedUserData((prev)=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }
    console.log("editedUserData >> : : ",editedUserData)

    const handleEdit = async(e)=> {
        e.preventDefault()
        const res = await userAxiosInstance.patch('/editUserProfile',{
            editedUserData
        })
        if(res.data.success){
            toast.success('Successfully Edited')
            setEdit(false)
        }
    }
    const getData = async () => {
        try {
            setLoader(true)
            dispatch(showProfile({ status: false }))
            const res = await getProfile()
            setLoader(false)
            if (res.data.success) {
                console.log("userDetaisln infdjf ", res.data.userDetail)
                setUserData(res.data.userDetail)
                setEditedUserData(res.data.userDetail)
            } else {
                console.log("somthing fishy")
            }
        } catch (error) {
            console.log("errorHome : ", error.message)
        }
    }
    useEffect(() => {
        getData()
    }, [edit])

//     return (
//         <>
//             {!loader ?
//                 <div className='flex py-10 gap-10 md:justify-center bg-no-repeat h-[35rem] bg-cover bg-center ' style={{ fontFamily: 'Noto Serif' }}>
//                     <div className='md:w-[20rem] flex flex-col  rounded-3xl bg-white  items-center' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
//                         <div className='border h-[12rem] w-[12rem] relative rounded-full my-6'>
//                             { userData.image ? <img
//                                 src={`${userData.image}`}
//                                 className='mx-auto h-[12rem] w-[12rem] object-cover rounded-full cursor-pointer'
//                                 alt=''
//                             /> : <img
//                                 src={`https://img.favpng.com/21/10/7/conservatorio-santa-cecilia-maulana-malik-ibrahim-state-islamic-university-malang-gold-lorem-ipsum-is-simply-dummy-text-of-the-printing-system-png-favpng-ZMuhDyyzHaHZjz8wE34CcysFR.jpg`}
//                                 className='mx-auto h-[12rem] w-[12rem] object-cover rounded-full cursor-pointer'
//                                 alt='' /> }
//                             <label className="absolute inset-0 flex items-center justify-center bg-transparent text-white cursor-pointer opacity-0 hover:opacity-100">
//                                 <input
//                                     className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
//                                     type="file"
//                                     name="file"
//                                     onChange={(e) => setFile(e.target.files[0])}
//                                 />
//                                 Change Photo
//                             </label>
//                         </div>
//                         <button className='my-5 border w-[10rem] rounded-[3px] border-gray-500 py-1 px-3 hover:bg-red-500 ' onClick={handleUpload}>Upload Photo</button>

//                         <p className='text-2xl my-5 font-bold' >{userData.fname} {userData.lname}</p>
//                     </div>


//                     {/* Right Side------------------------------------------- */}

//                     <div className=' flex flex-col items-center w-[50rem] px-10 rounded-3xl bg-white' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
//                         <h1 className='text-3xl my-4'>My Profile</h1>
//                         <p className='text-gray-500 my-2 text-[15px]'>Look all your info, you could customize your profile.</p>

//                         <div className='grid grid-cols-2 my-12 md:grid-cols-3 gap-5'>
//                             <div>
//                                 <p className='text-red-700'>First Name </p>
//                                 <p className='font-bold my-2'>{userData.fname}</p>
//                             </div>
//                             <div>
//                                 <p className='text-red-700'>Last Name </p>
//                                 <p className='font-bold my-2'>{userData.lname}</p>
//                             </div>
                            
//                             <div>
//                                 <p className='text-red-700'>Phone Number</p>
//                                 <p className='font-bold my-2'>{userData.phone}</p>
//                             </div>
//                             <div>
//                                 <p className='text-red-700'>Email </p>
//                                 <p className='font-bold my-2' >{userData.email}</p>
//                             </div>
//                         </div>
//                         <button className='border border-gray-500 py-2 px-4 rounded  bg-green-700 text-white' onClick={()=>setEdit(true)}>Edit Profile</button>
//                     </div>
//                 </div>
//                 // :<div className='w-full h-[35rem]   flex justify-center items-center'>
//                 // <img className='w-[20rem]' src='https://cdn.dribbble.com/users/2233427/screenshots/4870342/__.gif' alt='' />
//                 // </div>}
//                 : <div class="w-full h-[35rem] flex justify-center items-center">
//                     <div class="rounded-full h-14 w-14 bg-violet-800 animate-ping"></div>
//                 </div>}

//             {
//                 profileOpen && <div className="bg-white absolute top-[6rem] right-[8rem] w-[15rem] h-[20rem]" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} >
//                     <ul className='flex flex-col py-4 px-4 rounded-[5px] ' style={{ fontFamily: 'Noto Serif' }}>
//                         <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={() => navigate('/profile')}>Profile</li>
//                         <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={() => navigate('/bookings')}>Bookings</li>
//                         <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={() => navigate('/bookingHistory')}>Booking History</li>
//                         <li className='cursor-pointer py-3 px-3 hover:bg-gray-300'>Logout</li>
//                     </ul>
//                 </div>
//             }

//             {edit && 
                
//                     <div class=" w-[40rem] absolute top-28 left-[30rem] rounded-lg shadow dark:bg-gray-700">
//                         <div class="flex justify-end p-2">
//                             <button type="button" onClick={()=>setEdit(false)} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
//                                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
//                             </button>
//                         </div>
//                         <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="">   
//                             <h3 class="text-xl font-medium text-gray-900 dark:text-white">Edit your Profile</h3>
//                             <div>
//                                 <label for="fname" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">First Name</label>
//                                 <input type="text" name="fname" id="fname" onChange={handleInputChange} defaultValue={userData.fname} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
//                             </div>
//                             <div>
//                                 <label for="lname" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Last Name</label>
//                                 <input type="text" name="lname" id="lname" onChange={handleInputChange} defaultValue={userData.lname} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
//                             </div>
//                             <div>
//                                 <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
//                                 <input type="email" name="email" id="email" onChange={handleInputChange} defaultValue={userData.email} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
//                             </div>
//                             <div>
//                                 <label for="Phone" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Phone Number</label>
//                                 <input type="number" name="phone" id="password" onChange={handleInputChange} defaultValue={userData.phone} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
//                             </div>
//                             <button type="submit" onClick={handleEdit} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Your Profile</button>

//                         </form>
                 
//             </div> }
//         </>
//     )
// }







return (
        <>
            {!loader ?
            <div className='flex flex-col sm:flex-row mt-[23rem] md:mt-0 md:py-10 md:gap-10 justify-center bg-no-repeat h-[35rem] bg-cover bg-center ' style={{ fontFamily: 'Noto Serif' }}>
                {/* <div className='flex-col md:flex-row md:py-10 md:gap-10 justify-center bg-no-repeat h-[35rem] bg-cover bg-center ' style={{ fontFamily: 'Noto Serif' }}> */}
                    <div className='md:w-[20rem] w-[25rem] mx-auto md:mx-0 flex flex-col  rounded-3xl bg-white  items-center' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <div className='border h-[12rem] w-[12rem] relative rounded-full my-6'>
                            { userData.image ? <img
                                src={`${userData.image}`}
                                className='mx-auto h-[12rem] w-[12rem] object-cover rounded-full cursor-pointer'
                                alt=''
                            /> : <img
                                src={`https://img.favpng.com/21/10/7/conservatorio-santa-cecilia-maulana-malik-ibrahim-state-islamic-university-malang-gold-lorem-ipsum-is-simply-dummy-text-of-the-printing-system-png-favpng-ZMuhDyyzHaHZjz8wE34CcysFR.jpg`}
                                className='mx-auto h-[12rem] w-[12rem] object-cover rounded-full cursor-pointer'
                                alt='' /> }
                            <label className="absolute inset-0 flex items-center justify-center bg-transparent text-white cursor-pointer opacity-0 hover:opacity-100">
                                <input
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                    type="file"
                                    name="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                Change Photo
                            </label>
                        </div>
                        <button className='my-5 border w-[10rem] rounded-[3px] border-gray-500 py-1 px-3 hover:bg-red-500 ' onClick={handleUpload}>Upload Photo</button>

                        <p className='text-2xl my-5 font-bold' >{userData.fname} {userData.lname}</p>
                    </div>


                    {/* Right Side------------------------------------------- */}

                    <div className=' flex flex-col items-center w-[25rem] md:w-[50rem] mx-auto md:mx-0 mt-10 md:mt-0 mb-[20rem] md:mb-0 px-10 rounded-3xl bg-white' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <h1 className='text-3xl my-4'>My Profile</h1>
                        <p className='text-gray-500 my-2 text-[15px]'>Look all your info, you could customize your profile.</p>

                        <div className='grid grid-cols-2 my-12 md:grid-cols-3 gap-5'>
                            <div>
                                <p className='text-red-700'>First Name </p>
                                <p className='font-bold my-2'>{userData.fname}</p>
                            </div>
                            <div>
                                <p className='text-red-700'>Last Name </p>
                                <p className='font-bold my-2'>{userData.lname}</p>
                            </div>
                            
                            <div>
                                <p className='text-red-700'>Phone Number</p>
                                <p className='font-bold my-2'>{userData.phone}</p>
                            </div>
                            <div>
                                <p className='text-red-700'>Email </p>
                                <p className='font-bold my-2' >{userData.email}</p>
                            </div>
                        </div>
                        <button className='border border-gray-500 py-2 px-4 rounded mb-10 md:mb-0 bg-green-700 text-white' onClick={()=>setEdit(true)}>Edit Profile</button>
                    </div>
                </div>
                // :<div className='w-full h-[35rem]   flex justify-center items-center'>
                // <img className='w-[20rem]' src='https://cdn.dribbble.com/users/2233427/screenshots/4870342/__.gif' alt='' />
                // </div>}
                : <div class="w-full h-[35rem] flex justify-center items-center">
                    <div class="rounded-full h-14 w-14 bg-violet-800 animate-ping"></div>
                </div>}

            {
                profileOpen && <div className="bg-white absolute top-[6rem] right-[8rem] w-[15rem] h-[20rem]" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} >
                    <ul className='flex flex-col py-4 px-4 rounded-[5px] ' style={{ fontFamily: 'Noto Serif' }}>
                        <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={() => navigate('/profile')}>Profile</li>
                        <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={() => navigate('/bookings')}>Bookings</li>
                        <li className='cursor-pointer py-3 px-3 hover:bg-gray-300' onClick={() => navigate('/bookingHistory')}>Booking History</li>
                        <li className='cursor-pointer py-3 px-3 hover:bg-gray-300'>Logout</li>
                    </ul>
                </div>
            }

            {edit &&
                    <div class="w-[22rem] md:w-[40rem] fixed top-[5rem] left-5 right-5 md:top-28 md:left-[30rem] rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-end p-2">
                            <button type="button" onClick={()=>setEdit(false)} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                            </button>
                        </div>
                        <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="">   
                            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Edit your Profile</h3>
                            <div>
                                <label for="fname" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">First Name</label>
                                <input type="text" name="fname" id="fname" onChange={handleInputChange} defaultValue={userData.fname} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="lname" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Last Name</label>
                                <input type="text" name="lname" id="lname" onChange={handleInputChange} defaultValue={userData.lname} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                                <input type="email" name="email" id="email" onChange={handleInputChange} defaultValue={userData.email} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="Phone" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Phone Number</label>
                                <input type="number" name="phone" id="password" onChange={handleInputChange} defaultValue={userData.phone} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                            </div>
                            <button type="submit" onClick={handleEdit} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Your Profile</button>

                        </form>
                 
            </div> }
        </>
    )
}

export default ProfileNav
