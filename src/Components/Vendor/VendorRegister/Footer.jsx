import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
     <div className='h-[8rem] border flex justify-between border-gray-300 bg-gray-50 mt-4'>
        <div className='mt-5 flex flex-col gap-3 ms-9'>
           <p>SnapSage</p>
           <p>© 2006 - 2023 The Knot Worldwide Inc.</p>
        </div>
        <div className='mr-5 flex gap-4 flex-col  my-5 '>
            <div className='flex gap-10'>
                <FacebookIcon color='action'/>
                <PinterestIcon color='action'/>
                <TwitterIcon color='action'/>
                <InstagramIcon color='action'/>

            </div>
            <div className='flex gap-7'>
                <p>Terms & Conditions</p>
                <p>Privacy Policy </p>
                <p>Help</p>
            </div>
        </div>
     </div>
  )
}

export default Footer
