import React, { useState, useEffect } from 'react'
import AdminSidebar from '../AdminNavbar/AdminSidebar'
import { adminAxiosInstance } from '../../../Utils/Axios'
function UserLists() {
    const [userList, setUserList] = useState([])
    const [status, setStatus] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message,setMessage] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const handleBlock = async (userId) => {
        try {
            const res = await adminAxiosInstance.patch(`/blockUser?id=${userId}`, {})
            console.log(res.data)
            if (res.data.success) {
                setStatus(!status)
            }
        } catch (error) {
            console.log("userBlock  : ", error.message)
        }
    }

    const handleUnblock = async (userId) => {
        try {
            const res = await adminAxiosInstance.patch(`/unblockUser?id=${userId}`)
            if (res.data.success) {
                setStatus(!status)
            }
        } catch (error) {
            console.log("unblock : ", error.message)
        }
    }
    const getData = async () => {
        try {
            setLoading(true)
            const res = await adminAxiosInstance.get(`/userlists?search=${searchInput}`)
            setLoading(false)
            if (res.data.success) {
                if(res.data.message){
                    setMessage(res.data.message)
                }else{
                    setMessage("")
                    setUserList(res.data.UserLists)
                }
            } else {
                console.log("somthing fishy")
            }
        } catch (error) {
            console.log("errorHome : ", error.message)
        }
    }
    useEffect(() => {
        getData()
    }, [status,searchInput])
    return (
        <div className='flex'>
            <div >
                <AdminSidebar />
            </div>
            <div className='flex bg-cover flex-col 'style={{ backgroundImage: 'url()'}}>
                <div className='ms-5 mt-5' >
                    <input className='py-4 w-[75rem] border border-gray-300 px-5 bg-gray-50 outline-none' onChange={(e)=>setSearchInput(e.target.value)} placeholder='Search here ' />
                </div>
                   {!message?
                    <div className="overflow-hidden rounded-lg bg-gray-50 border border-gray-200 shadow-md m-5 w-[75rem]">
                        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">status</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">phone</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">email</th>
                                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                {userList.map(user => (
                                    <tr key={user._id} className="hover:bg-gray-50">
                                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                            <div className="relative h-10 w-10">
                                                <img
                                                    className="h-full w-full rounded-full object-cover object-center"
                                                    src={`${user.image}`}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="text-sm">
                                                <div className="font-medium text-gray-700">{user.fname} {user.lname}</div>
                                                <div className="text-gray-400">{user.email}</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            {!user.status ? <span
                                                className="inline-flex items-center gap-1 w-16 px-3 rounded-full text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                            >
                                                Active
                                            </span> : <span
                                                className="inline-flex items-center gap-1 text-center rounded-full  bg-red-100 px-2 py-1 text-xs font-semibold text-red-600"
                                            >
                                                Blocked
                                            </span>}
                                        </td>
                                        <td className="px-6 py-4">{user.phone}</td>

                                        <td>
                                            {user.email}
                                        </td>

                                        <td>
                                            {!user.status ? <button className='bg-red-500 text-white hover:text-black font-bold hover:bg-white py-1 px-3 border rounded w-20'
                                                onClick={() => handleBlock(user._id)}>block</button> : <button className='bg-green-500 font-bold text-white hover:text-black hover:bg-white outline-none w-20 py-1 px-3 border rounded'
                                                    onClick={() => handleUnblock(user._id)}>unblock</button>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> :  <div className='w-full'>
            <p className='mt-5 text-center'>
                {message}
            </p>
        </div> }
            </div>
        </div>

    )
}

export default UserLists
