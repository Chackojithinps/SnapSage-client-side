import React, { useState } from "react";
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function UserHome() {
  const [open,setOpen] = useState(false)
  return (
    <nav className="md:flex w-full justify-evenly h-10 items-center bg-white border border-red-600 md:h-24">
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
       
      
        <ul className="md:flex md:gap-10" style={{ fontFamily: 'Kanit' }}>
          <li className="hover:text-red-400  my-7 md:my-0 md:ms-0   Alegreya-Sans-SC   hover:cursor-pointer">
            HOME
          </li>
          <li className="hover:text-red-400 my-7 md:my-0 md:ms-0  Alegreya Sans SC hover:cursor-pointer">
            PROFILE
          </li>
          <li className="hover:text-red-400 my-7 md:my-0 md:ms-0 hover:underline hover:cursor-pointer">
            STUDIOS
          </li>
          <li className="hover:text-red-400 my-7 md:my-0 md:ms-0  hover:underline hover:cursor-pointer">
            ABOUT
          </li>
          <li className="hover:text-red-400 my-7 md:my-0 md:ms-0 hover:underline hover:cursor-pointer">
            CONTACT
          </li>
          <li className="hover:text-red-400 my-7 md:hidden md:my-0 md:ms-0  hover:underline hover:cursor-pointer">
            LOG IN
          </li>
          <li  className="hover:text-red-400 my-7 md:hidden md:my-0 md:ms-0  hover:underline hover:cursor-pointer">
            SIGN UP
          </li>
        </ul>
      </div>
      <div>
        <p className="hidden md:block">ARE YOU A VENDOR?</p>
        <div className="gap-5 hidden md:flex-row">
          <p>LOG IN</p>
          <p>SIGN UP</p>
        </div>
      </div>
    </nav>
  );
}

export default UserHome;
