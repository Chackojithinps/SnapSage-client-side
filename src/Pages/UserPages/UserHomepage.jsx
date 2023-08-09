import React from 'react'
import UserHome from '../../Components/User/UserHome'
import SectionOne from '../../Components/User/UserHome/SectionOne'
import SectionTwo from '../../Components/User/UserHome/SectionTwo'
import SectionThree from '../../Components/User/UserHome/SectionThree'

function UserHomepage() {
  return (
    <div>
       <UserHome/>
       <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
    </div>
  )
}

export default UserHomepage
