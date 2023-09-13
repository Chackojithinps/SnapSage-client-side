import React, { useEffect, useState } from "react";
import {useLocation } from "react-router-dom";
import UserHome from "../../Components/User/UserHome";
import StudioImages from "../../Components/User/StudioDetails/StudioImages";
import StudioAbout from "../../Components/User/StudioDetails/StudioAbout";
import CategoryImages from "../../Components/User/StudioDetails/CategoryImages";
import Review from "../../Components/User/StudioDetails/Review";
import Booking from "../../Components/User/StudioDetails/Booking";
import UsersideFooter from "../../Components/User/Footer/UsersideFooter";
import { getOfferData } from "../../Utils/UserEndpoints";

function StudiodetailsPage() {
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [offers,setOffers] = useState([])
  const [profileId,setProfileId]= useState()
  const [rating,setRating] = useState(5)
  const [text,setText] = useState("")
  const location = useLocation();
  const studio = location.state.studio;
  
  const getOffers =async()=>{
    const res = await getOfferData(studio)
    if(res.data.success){
       setOffers(res.data.offerDatas)
    }
  }
  const calculateRating = () => {
    const sumOfRatings = studio.review.reduce((total, review) => total + review.rating, 0);
    const average = Math.floor(sumOfRatings / studio.review.length);
    setRating(average)
    if (average === 1) {
      setText("Very Bad")
    } else if (average === 2) {
      setText("Bad")
    } else if (average === 3) {
      setText("Good")
    } else if (average === 4) {
      setText("Very Good")
    } else if (average === 5) {
      setText("Excellent")
    }
  }
  useEffect(()=>{
    getOffers()
    if (studio.review.length > 0) {
      calculateRating()
    }
  },[])
  return (
    <>
      <UserHome studio={studio}   setProfileId={setProfileId} />
      <div className="flex">
        <div>
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
            text={text} rating={rating}
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
      
      <div className={`mt-[15rem]`}>
        <UsersideFooter />
      </div>
    </>
  );
}

export default StudiodetailsPage;
