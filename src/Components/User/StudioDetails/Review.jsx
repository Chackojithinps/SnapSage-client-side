import React from 'react'

function Review() {
    return (
        <div className='mx-24 w-[48rem] h-[27rem] ' style={{ fontFamily: 'Noto Serif' }}>
            <p className='underline' style={{ fontFamily: 'Noto Serif' }} >Reviews</p>
            <div className='flex gap-7 my-5 w-[55rem]  overflow-x-auto'>
                <div className='border border-gray-500 rounded w-[20rem] h-[25rem]'>
                    <div className='flex gap-2 w-[17rem] my-4 ms-4'>
                        <img src='' className='rounded-full h-[3rem] w-[3rem] border border-green-500' alt='' />
                        <div>
                            <p>Reshma ks</p>
                            <p className='text-gray-500 text-[12px]'>Married on 19/23/1999</p>
                        </div>
                    </div>
                    <p>Hello</p>
                </div>
                <div className='border border-gray-500 rounded w-[35rem] h-[25rem]'>
                    <p className='w-[15rem]'>Hello</p>

                </div>
                <div className='border border-gray-500 rounded w-[35rem] h-[25rem]'>
                    <p className='w-[15rem]'>Hello</p>

                </div>
                <div className='border border-gray-500 rounded w-[35rem] h-[25rem]'>
                    <p className='w-[15rem]'>Hello</p>

                </div>
                <div className='border border-gray-500 rounded w-[35rem] h-[25rem]'>
                    <p className='w-[15rem]'>Hello</p>

                </div>
                <div className='border border-gray-500 rounded w-[35rem] h-[25rem]'>
                    <p className='w-[15rem]'>Hello</p>

                </div>
            </div>
        </div>
    )
}

export default Review
