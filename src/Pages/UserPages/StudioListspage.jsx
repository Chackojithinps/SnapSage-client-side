import React from 'react'
import UserHome from '../../Components/User/UserHome'
import SectionOne from '../../Components/User/StudioLists/SectionOne'
import SectionTwo from '../../Components/User/StudioLists/SectionTwo'
import UsersideFooter from '../../Components/User/Footer/UsersideFooter'

function StudioListspage() {
  return (
    <div>
      <UserHome/>
      <SectionOne/>
      <SectionTwo/>
      <div className='mt-[15rem]'>

      <UsersideFooter/>
      </div>
    </div>
  )
}

export default StudioListspage
