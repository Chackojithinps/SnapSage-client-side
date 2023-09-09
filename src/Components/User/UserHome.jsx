import React, { useEffect, useState } from "react";
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { showProfile, userLogout } from "../../Store/userAuth";
import { userAxiosInstance } from "../../Utils/Axios";


function UserHome() {
  const [open,setOpen] = useState(false)
  const [userData,setUserData] = useState({})
  const navigate = useNavigate()
  const userToken = useSelector((state)=>state.user.userToken)
  const profileOpen = useSelector((state)=>state.user.status)
  const dispatch = useDispatch()
  
  const handleLogout =()=>{
    dispatch(userLogout())
    localStorage.removeItem("token")
    navigate('/login')
  }

  const handleProfileBar = () =>{
    dispatch(showProfile({status:!profileOpen}))
  }

  const getProfile = async() =>{
     const res = await userAxiosInstance.get(`/getProfileData`)
     if(res.data.success){
      console.log("userDetail : ",res.data.userDetail)
         setUserData(res.data.userDetail)
     }
  }
  useEffect(()=>{
    if(userToken){

      getProfile()
    }
  },[])
  return (
    <nav className="md:flex w-full justify-evenly h-10 items-center bg-white md:h-24" style={{ fontFamily: 'Noto Serif' }}>
      <div className="flex justify-center px-7 md:">
        <h1 className="font-bold text-2xl">SNAPSAGE</h1>
      </div>
      <div className="absolute left-6 top-2 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
        { open?<CloseRoundedIcon/>:<MenuOpenRoundedIcon/> }
        </div>
      <div className="md:hidden absolute right-8 top-2 ">
          <AccountCircleOutlinedIcon />

      </div>
      <div className={`absolute top-10 bg-white md:static transition-all duration-500 Alegreya-Sans-SC px-6 h-[100vh] md:h-auto w-80 md:w-auto ${open?'left-0':'left-[-123rem]'}`}>
        <ul className="md:flex md:gap-10" style={{ fontFamily: 'Noto Serif' }}>
          <li className="hover:text-red-400  my-7 md:my-0 md:ms-0   Alegreya-Sans-SC   hover:cursor-pointer" onClick={()=>navigate('/')}>
            HOME
          </li>
          <li className="hover:text-red-400 my-7 md:my-0 md:ms-0  Alegreya Sans SC hover:cursor-pointer" onClick={()=>navigate('/profile')}>
            PROFILE
          </li>
          <li className="hover:text-red-400 my-7 md:my-0 md:ms-0  hover:cursor-pointer" onClick={()=>navigate('/studioLists')}>
            STUDIOS
          </li>
          <li className="hover:text-red-400 my-7 md:my-0 md:ms-0   hover:cursor-pointer">
            ABOUT
          </li>
          <li className="hover:text-red-400 my-7 md:my-0 md:ms-0  hover:cursor-pointer">
            CONTACT
          </li>
          <li className="hover:text-red-400 my-7 md:hidden md:my-0 md:ms-0   hover:cursor-pointer">
            LOG IN
          </li>
          <li  className="hover:text-red-400 my-7 md:hidden md:my-0 md:ms-0   hover:cursor-pointer">
            SIGN UP
          </li>
        </ul>
      </div>
      {!userToken?<div className="flex flex-col gap-1">
        <p className="hidden md:block text-[12px] text-black cursor-pointer hover:underline" onClick={()=>navigate('/vendor')}>ARE YOU A VENDOR?</p>
        <div className="gap-5 hidden  md:flex md:flex-row ">
          <p className="cursor-pointer text-red-500 hover:text-red-700" onClick={()=>navigate('/login')}>LOG IN</p>
          <p className="cursor-pointer text-red-500 hover:text-red-700" onClick={()=>navigate('/register')}>SIGN UP</p>
        </div>
      </div>:<div className="flex gap-10">
         <div className="flex gap-2 cursor-pointer" onClick={handleProfileBar}>
            <img src={userData.image} alt="" className=" w-[40px] h-[40px] rounded-full"/>
            <ArrowDropDownIcon color="action" style={{marginTop:'10px'}}/>
         </div>
         <button className="border border--500 py-2 px-5 rounded-[5px]" onClick={handleLogout}>Logout</button>
        </div>}
        
        
    </nav>
  );
}

export default UserHome;
