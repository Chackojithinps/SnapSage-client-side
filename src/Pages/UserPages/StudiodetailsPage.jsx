import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from '../../Components/User/UserHome'
import StudioImages from '../../Components/User/StudioDetails/StudioImages'
import StudioAbout from '../../Components/User/StudioDetails/StudioAbout'
import CategoryImages from '../../Components/User/StudioDetails/CategoryImages'
import Review from '../../Components/User/StudioDetails/Review'

function StudiodetailsPage() {
  return (
    <>
      <UserHome/>
      <StudioImages/>
      <StudioAbout/>
      <CategoryImages/>
      <Review/>
    </>
  )
}

export default StudiodetailsPage
