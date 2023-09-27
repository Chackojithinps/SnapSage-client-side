import React, { useEffect, useState } from "react";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  showProfile,
  showProfileImage,
  userLogout,
} from "../../Store/userAuth";
import { userNavbar } from "../../Utils/UserEndpoints";

function UserHome({ setProfileId,setUserDetails,setChatopen }){
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.user.userToken);
  const profileOpen = useSelector((state) => state.user.status);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleProfileBar = () => {
    dispatch(showProfile({ status: !profileOpen }));
  };

  const getProfile = async () => {
    const res = await userNavbar();
    
    if (res.data.success) {
        
      if(setUserDetails){
        console.log("userDetails in userNavabar : ",res.data.userDetail)
        setUserDetails(res.data.userDetail)
      }
      if(setProfileId){
          console.log("res.data.userDetail : ",res.data.userDetail)
          setProfileId(res.data.userDetail._id)
      }
      if(setChatopen){
        setChatopen(true)
      }
      dispatch(showProfileImage({profileData: res.data.userDetail}));
    }
  };

  
  const profileData = useSelector((state) => state.user.profileData);
  useEffect(() => {
    const userToken1= localStorage.getItem('token')
    if (userToken1) {
      getProfile();
    }
  }, []);


  return (
    <nav
      className="md:flex w-full justify-evenly  h-10 border items-center bg-white md:h-24"
      style={{ fontFamily: "Noto Serif" }}
    >
      <div className="flex justify-center px-7 md:">
        <h1 className="font-bold text-2xl">SNAPSAGE</h1>
      </div>
      <div
        className="absolute left-6 top-2 cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseRoundedIcon /> : <MenuOpenRoundedIcon />}
      </div>
      <div className="md:hidden absolute right-8 top-2 ">
        <AccountCircleOutlinedIcon />
      </div>
      <div
        className={`absolute top-10 bg-white md:static transition-all duration-500 Alegreya-Sans-SC px-6 h-[100vh] md:h-auto w-80 md:w-auto ${
          open ? "left-0" : "left-[-123rem]"
        }`}
      >
        <ul className="md:flex md:gap-10 bg-white" style={{ fontFamily: "Noto Serif" }}>
          <li
            className="hover:text-red-400  my-7 md:my-0 md:ms-0  bg-white Alegreya-Sans-SC   hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            HOME
          </li>
          <li
            className="hover:text-red-400 my-7 md:my-0 md:ms-0  Alegreya Sans SC hover:cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            PROFILE
          </li>
          <li
            className="hover:text-red-400 my-7 md:my-0 md:ms-0  hover:cursor-pointer"
            onClick={() => navigate("/studioLists")}
          >
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
          <li className="hover:text-red-400 my-7 md:hidden md:my-0 md:ms-0   hover:cursor-pointer">
            SIGN UP
          </li>
        </ul>
      </div>
      {!userToken ? (
        <div className="flex flex-col gap-1">
          <p
            className="hidden md:block text-[12px] text-black cursor-pointer hover:underline"
            onClick={() => navigate("/vendor")}
          >
            ARE YOU A VENDOR?
          </p>
          <div className="gap-5 hidden  md:flex md:flex-row ">
            <p
              className="cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => navigate("/login")}
            >
              LOG IN
            </p>
            <p
              className="cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => navigate("/register")}
            >
              SIGN UP
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-10">
          <div className="flex gap-2 cursor-pointer" onClick={handleProfileBar}>
          {profileData?<img
              src={profileData?.image}
              alt=""
              className=" w-[40px] h-[40px] rounded-full"
            />:<img
             src={`https://img.favpng.com/21/10/7/conservatorio-santa-cecilia-maulana-malik-ibrahim-state-islamic-university-malang-gold-lorem-ipsum-is-simply-dummy-text-of-the-printing-system-png-favpng-ZMuhDyyzHaHZjz8wE34CcysFR.jpg`}
            alt=""
            className=" w-[40px] h-[40px] rounded-full"
          />}
            <ArrowDropDownIcon color="action" style={{ marginTop: "10px" }} />
          </div>
          <button
            className="border border--500 py-2 px-5 rounded-[5px]"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default UserHome;
