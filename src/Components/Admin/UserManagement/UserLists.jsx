import React, { useState, useEffect } from 'react'
import AdminSidebar from '../AdminNavbar/AdminSidebar'
import axios from 'axios'
import { AdminApi } from '../../../Apis/UserApi'
function UserLists() {
    const [userList, setUserList] = useState([])
    const [status,setStatus] = useState(false)
    console.log("userList :  __ : ",userList)

    const handleBlock = async(userId) =>{
        try {
            const res = await axios.patch(`${AdminApi}/blockUser?id=${userId}`,{})
            console.log(res.data)
            if(res.data.success){
               setStatus(!status)
            }
        } catch (error) {
            console.log("userBlock  : ",error.message)
        }
    }

    const handleUnblock = async (userId)=>{
        try {
            const res = await axios.patch(`${AdminApi}/unblockUser?id=${userId}`)
            if(res.data.success){
                setStatus(!status)
            }
        } catch (error) {
            console.log("unblock : ",error.message)
        }
    }
    const getData = async () => {
        try {
            const res = await axios.get(`${AdminApi}/userlists`, {
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem('vendorToken')}`
                // }
            })
            if (res.data.success) {
                console.log("userLists : ", res.data.UserLists)
                setUserList(res.data.UserLists)

            } else {
                console.log("somthing fishy")
            }
        } catch (error) {
            console.log("errorHome : ", error.message)
        }
    }
    useEffect(() => {
        getData()
    }, [status])
    return (
        <div className='flex'>
            <div >
                <AdminSidebar />
            </div>
            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-full">
                <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">status</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">phone</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">email</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                        {userList.map(user => (
                            <tr key={user._id} class="hover:bg-gray-50">
                                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div class="relative h-10 w-10">
                                        <img
                                            class="h-full w-full rounded-full object-cover object-center"
                                            src={`http://localhost:5000/Images/${user.image}`}
                                            alt=""
                                        />
                                        <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                    </div>
                                    <div class="text-sm">
                                        <div class="font-medium text-gray-700">{user.fname} {user.lname}</div>
                                        <div class="text-gray-400">{user.email}</div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">
                                    <span
                                        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                    >
                                        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                        Active
                                    </span>
                                </td>
                                <td class="px-6 py-4">{user.phone}</td>
                      
                                <td>
                                    {user.email}
                                </td>
             
                                <td>
                                    {!user.status?<button className='bg-red-500 text-white hover:text-black hover:bg-white py-2 px-3 border border-gray-500 rounded'
                                     onClick={()=>handleBlock(user._id)}>block</button>:<button className='bg-red-500 text-white hover:text-black hover:bg-white py-2 px-3 border border-gray-500 rounded'
                                     onClick={()=>handleUnblock(user._id)}>unblock</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default UserLists
