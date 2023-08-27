import React from 'react'
import ProfileNav from '../../Components/User/UserProfile/ProfileNav'
import UserHome from '../../Components/User/UserHome'
import UsersideFooter from '../../Components/User/Footer/UsersideFooter'

function ProfilePage() {
  return (
    <div>
      <UserHome/>
      <ProfileNav/>
      <UsersideFooter/>
    </div>
  )
}

export default ProfilePage
