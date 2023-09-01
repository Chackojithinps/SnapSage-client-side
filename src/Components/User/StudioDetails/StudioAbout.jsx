import React from 'react'
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
function StudioAbout({studio}) {
    return (
        <div>
            <div className='w-[58rem] ms-24 mt-6 flex flex-col gap-3'  >
                <h1 className='underline' style={{ fontFamily: 'Noto Serif' }}>About</h1>
                <div className='flex gap-1 '>

                    <TourOutlinedIcon color='action' />
                    <p className='text-gray-800'>On SNAPSAGE.in since 2018</p>
                </div>
                <p className='text-[15px] text-gray-800 '>{studio.description}
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
