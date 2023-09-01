import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import UserHome from '../../Components/User/UserHome'
import StudioImages from '../../Components/User/StudioDetails/StudioImages'
import StudioAbout from '../../Components/User/StudioDetails/StudioAbout'
import CategoryImages from '../../Components/User/StudioDetails/CategoryImages'
import Review from '../../Components/User/StudioDetails/Review'
import Booking from '../../Components/User/StudioDetails/Booking'

function StudiodetailsPage() {
  const location = useLocation()
  const studio = location.state.studio;
  console.log("studios : : : ", studio)
  return (
   <>
     <UserHome studio={studio} />
    <div className='flex'>
      <div className=''>
       
        <StudioImages studio={studio} />
        <StudioAbout studio={studio} />
        <CategoryImages studio={studio} />
        <Review studio={studio} />
      </div>
      <div className='w-2/5'>
        <Booking studio={studio}/>
      </div>
    </div>
    </>
  )
}

export default StudiodetailsPage
