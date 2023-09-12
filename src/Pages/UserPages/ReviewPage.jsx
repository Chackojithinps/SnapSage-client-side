import React from 'react'
import Review from '../../Components/User/Review/review'
import UserHome from '../../Components/User/UserHome'
import UsersideFooter from '../../Components/User/Footer/UsersideFooter'

function ReviewPage() {
  return (
    <div>
      <UserHome/>
      <div>
      <Review/>
      </div>
    </div>
  )
}

export default ReviewPage
