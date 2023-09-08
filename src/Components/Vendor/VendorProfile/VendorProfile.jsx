import React from 'react'
import VendorSidebar from '../VendorNav/VendorSidebar'
import { useState, useEffect } from 'react'
import { vendorAxiosInstance } from '../../../Utils/Axios'
function VendorProfile() {
  const [file, setFile] = useState()
  const [img, setImg] = useState(false)
  const [userData, setUserData] = useState({})
  const [loader, setLoader] = useState(false)
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await vendorAxiosInstance.post(`/upload`, formData);
      if (res.status === 200) {
        setImg(!img)
        console.log("______________________________")
        setUserData({ ...userData, image: res.data.image });
        console.log("res.data.vendorDetaisl : ", res.data.vendorDetails)
      }
    } catch (error) {
      console.log("error message: ", error.message);
    }
  }

  const getData = async () => {
    try {
      setLoader(true)
      const res = await vendorAxiosInstance.get(`/profile`)
      setLoader(false)
      if (res.data.success) {
        console.log("userDetaisln infdjf ", res.data.vendorDetail)
        setUserData(res.data.vendorDetail)

      } else {
        console.log("somthing fishy")
      }
    } catch (error) {
      console.log("errorHome : ", error.message)
    }
  }

  // const changeFile = (files)=>{
  //   console.log("files :  ; ; :  ;  : ",files[0])
  // }

  useEffect(() => {
    console.log("EERjerwkljfsfksdfsd")
    getData()
  }, [])
  return (
    <div className={`flex ${loader ? 'bg-white' : 'bg-[#f1f5f9]'}`}>
      <div>
        <VendorSidebar />
      </div>
      <div >
        {!loader ?
          <div className='flex py-10 gap-10 mx-10 justify-center bg-no-repeat h-[40rem] bg-cover bg-center' style={{ fontFamily: 'Noto Serif' }}>

            <div className='md:w-[20rem] flex bg-white flex-col  rounded-3xl  items-center' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
              <div className='border h-[12rem] w-[12rem] relative rounded-full my-6'>
                {userData.profile ? <img

                  src={`${userData.profile}`}
                  // src={userData.image?`http://localhost:5000/Images/${userData.image}`:""}
                  className='mx-auto h-[12rem] w-[12rem] rounded-full object-cover object-center cursor-pointer'
                  alt=''
                /> : <img src='https://webcodeft.com/wp-content/uploads/2021/11/dummy-user.png' className='mx-auto h-[12rem] w-[12rem] rounded-full object-cover object-center cursor-pointer' alt='' />}
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

              <p className='text-2xl my-5 font-bold' >{userData.fname} {userData.lname} </p>
            </div>

            {/* Right Side------------------------------------------- */}

            <div className=' flex flex-col items-center w-[50rem] px-10 rounded-3xl bg-white' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
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
                  <p className='text-red-700'>Email </p>
                  <p className='font-bold my-2' >{userData.email}</p>
                </div>
                <div>
                  <p className='text-red-700'>Phone Number</p>
                  <p className='font-bold my-2'>{userData.phone}</p>
                </div>
                <div>
                  <p className='text-red-700'>Company Name</p>
                  <p className='font-bold my-2'>{userData.companyName}</p>
                </div>
                <div>
                  <p className='text-red-700'>District</p>
                  <p className='font-bold my-2'>{userData.district}</p>
                </div>
              </div>
              <div className='flex gap-4'>

                <button className='border border-gray-500 py-2  px-4 rounded  bg-green-700 text-white'>Edit Profile</button>
              </div>

            </div>
          </div> : <div class=" w-full h-[35rem]  flex justify-center items-center">
            <div class="rounded-full text-center mx-[33rem] h-20 w-20 bg-violet-800 animate-ping"></div>
          </div>}
      </div>
    </div>
  )
}

export default VendorProfile
