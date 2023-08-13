import React, { useState,useEffect } from 'react'
import AdminSidebar from '../AdminNavbar/AdminSidebar'
import axios from 'axios'
function VendorLists() {
    const [vendorList, setVendorList] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/admin/vendorlists', {
                
            })
            if (res.data.success) {
                console.log("vendorLists :  ", res.data.Vendorlists)
                setVendorList(res.data.Vendorlists)

            } else {
                console.log("somthing fishy")
            }
        } catch (error) {
            console.log("errorHome : ", error.message)
        }
    }
    useEffect(() => {
        console.log("EERjerwkljfsfksdfsd")
        getData()
    }, [])
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
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">company name</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                        {vendorList.map(user => (
                            <tr class="hover:bg-gray-50">
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
                                    {user.companyName}
                                </td>
             
                                <td>
                                    <button className='bg-red-500 text-white hover:text-black hover:bg-white py-2 px-3 border border-gray-500 rounded'>block</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default VendorLists
