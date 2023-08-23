import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from '../../Components/User/UserHome'
import StudioImages from '../../Components/User/StudioDetails/StudioImages'

function StudiodetailsPage() {
  return (
    <>
      <UserHome/>
      <StudioImages/>
    </>
  )
}

export default StudiodetailsPage
