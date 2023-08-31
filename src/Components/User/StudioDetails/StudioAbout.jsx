import React from 'react'
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
function StudioAbout() {
    return (
        <div>
            <div className='w-3/5 ms-24 flex flex-col gap-3'>
                <h1 className='underline' style={{ fontFamily: 'Noto Serif' }}>About</h1>
                <div className='flex gap-1 '>

                    <TourOutlinedIcon color='action' />
                    <p className='text-gray-800'>On SNAPSAGE.in since 2018</p>
                </div>
                <p className='text-[15px] text-gray-800'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in
                    to electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releas
                    e of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                {/* <h1>Services offered</h1>
                <ul className='text-[14px] text-gray-800 custom-list'>
                    <li>Candid Photography</li>
                    <li>Candid Photography</li>
                    <li>Candid Photography</li>
                    <li>Candid Photography</li>
                    <li>Candid Photography</li>
                    <li>Candid Photography</li>
                </ul> */}
            </div>
        </div>
    )
}

export default StudioAbout
