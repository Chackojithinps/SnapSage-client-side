import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function VendorSidebar() {
  const navigate = useNavigate();

  const [submenuStates, setSubmenuStates] = useState({
    profile: false,
    studio: false,
    // Add more submenu keys if needed
  });

  const toggleSubmenu = (key) => {
    setSubmenuStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };
  return (
    <div
      className="bg-white text-black w-64 min-h-full p-4"
      style={{ fontFamily: "Noto Serif" }}
    >
      <nav>
        <ul className="space-y-2">
          <li onClick={() => navigate("/vendor")} className="opcion-con-desplegable">
            <div className="flex cursor-pointer items-center justify-between p-2 hover:bg-[#0ea5e9]">
              <div
                
                className="flex items-center"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                <DashboardIcon color="primary" />
                <span className="ms-3">Dashboard</span>
              </div>
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
          </li>
      
          <li className="opcion-con-desplegable cursor-pointer ms-2">
            <div
              onClick={() => toggleSubmenu("profile")}
              className="flex items-center justify-between p-2 hover:bg-[#0ea5e9]"
            >
              <div className="flex items-center cursor-pointer" onClick={()=>navigate('/vendor/profile')}>
                <PermContactCalendarRoundedIcon color="secondary" />
                <span
                  className="ms-3"
                  // onClick={() => navigate("/vendor/profile")}
                >
                  Profile
                </span>
              </div>
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
            {submenuStates.profile && (
              <ul className="desplegable ml-4 hidden">
                <li>
                  <KeyboardArrowRightIcon />
                  Jtihin
                </li>
                <li>
                  <KeyboardArrowRightIcon />
                  Arun
                </li>
              </ul>
            )}
          </li>

          <li className="ms-2 cursor-pointer " onClick={() => toggleSubmenu("studio")}>
            <div className="flex items-center justify-between p-2 hover:bg-[#69b4d7]">
              <div
                
                className="flex items-center"
              >
                <AddAPhotoIcon color="action" />
                <span className="ms-3">Studios</span>
              </div>
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
            </li>
            {submenuStates.studio && (
              <ul className="desplegable ms-10 flex cursor-pointer flex-col">
                <li className="hover:bg-[#0ea5e9] h-11 flex items-center">
                  <KeyboardArrowRightIcon color="primary" />
                  View Studios
                </li>
                <li onClick={()=>navigate('/vendor/addStudio')} className="hover:bg-[#0ea5e9] h-11 flex items-center">
                  <KeyboardArrowRightIcon color="primary" />
                  Add Studio
                </li>
                <li onClick={()=>navigate('/vendor/addPhotos')} className="hover:bg-[#0ea5e9] h-11 flex items-center">
                  <KeyboardArrowRightIcon color="primary" />
                  Add Photots
                </li>
              </ul>
            )}

        </ul>
      </nav>
    </div>
  );
}

export default VendorSidebar;
// onClick={()=>navigate('/vendor/studio')}
