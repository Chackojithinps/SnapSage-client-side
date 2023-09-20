import React, { useState } from 'react'
import UserHome from '../../Components/User/UserHome'
import SectionOne from '../../Components/User/UserHome/SectionOne'
import SectionTwo from '../../Components/User/UserHome/SectionTwo'
import SectionThree from '../../Components/User/UserHome/SectionThree'
import UsersideFooter from '../../Components/User/Footer/UsersideFooter'
import ChatIcon from '../../Components/User/ChatBox/ChatIcon'
import ChatIcon1 from '../../Components/User/ChatBox/ChatIcon'

function UserHomepage() {
  const [profileOpen,setProfileopen] = useState(false) 

  return (
    <div>
       <UserHome/>
       <SectionOne/>
       <ChatIcon1/>
       <SectionTwo/>
       <SectionThree/>
       <UsersideFooter/>
    </div>
  )
}

export default UserHomepage
