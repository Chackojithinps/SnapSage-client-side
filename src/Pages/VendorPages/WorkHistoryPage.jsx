import React from 'react'
import WorkHistory from '../../Components/Vendor/Bookings/WorkHistory'
import VendorNav from '../../Components/Vendor/VendorNav/VendorNav'
import VendorSidebar from '../../Components/Vendor/VendorNav/VendorSidebar'

function WorkHistoryPage() {
    return (
        <div>
            <VendorNav />
            <div className='flex'>
                <VendorSidebar />
                <WorkHistory />
            </div>
        </div>
    )
}

export default WorkHistoryPage
