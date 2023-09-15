import React, { useState } from 'react'
import ChatBox from '../../Components/User/ChatBox/ChatBox'
import UserHome from '../../Components/User/UserHome'
import UsersideFooter from '../../Components/User/Footer/UsersideFooter'

function ChatBoxPage() {
  const [userDetails,setUserDetails] = useState({})
  console.log("userDetAILS IN CHATbOX PAGE : ",userDetails)
  return (
    <div>
      <UserHome setUserDetails={setUserDetails}/>
      <ChatBox userDetails={userDetails}/>
      <UsersideFooter/>
    </div>
  )
}

export default ChatBoxPage
