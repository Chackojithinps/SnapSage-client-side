import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import UserHome from "../../Components/User/UserHome";
import StudioImages from "../../Components/User/StudioDetails/StudioImages";
import StudioAbout from "../../Components/User/StudioDetails/StudioAbout";
import CategoryImages from "../../Components/User/StudioDetails/CategoryImages";
import Review from "../../Components/User/StudioDetails/Review";
import Booking from "../../Components/User/StudioDetails/Booking";
import UsersideFooter from "../../Components/User/Footer/UsersideFooter";
import Offer from "../../Components/User/StudioDetails/Offer";
import { userAxiosInstance } from "../../Utils/Axios";

function StudiodetailsPage() {
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [offers,setOffers] = useState([])
  const [profileId,setProfileId]= useState()
  const location = useLocation();
  const studio = location.state.studio;
  console.log("profileId ; : : : ", profileId);
  
  const getOffers =async()=>{
    console.log("Hello get Offers page entered : : : : : ; ; ;; ; : ; ; ;: ; ")
    const res = await userAxiosInstance.get(`/getOffers?id=${studio.vendorId}`)
    if(res.data.success){
       setOffers(res.data.offerDatas)
    }
  }
  useEffect(()=>{
    console.log("Hello get Offers page entered ___________________________________________________ ")
    getOffers()
  },[])
  return (
    <>
      <UserHome studio={studio}  setProfileId={setProfileId} />
      <div className="flex">
        <div className={``}>
          <StudioImages
            studio={studio}
            open={open}
            successMessage={successMessage}
          />
          <StudioAbout studio={studio} />
          <CategoryImages studio={studio} />
          <Review studio={studio} />
        </div>
        <div className={`w-2/5`}>
          <Booking
            offers={offers}
            studio={studio}
            open={open}
            profileId={profileId}
            setOpen={setOpen}
            successMessage={successMessage}
            setSuccessMessage={setSuccessMessage}
          />
        </div>
      </div>
      <Offer/>
      <div className="mt-[5rem]">
        <UsersideFooter />
      </div>
    </>
  );
}

export default StudiodetailsPage;
