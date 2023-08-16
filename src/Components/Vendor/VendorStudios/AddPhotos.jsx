import React, { useEffect, useState } from "react";
import VendorSidebar from "../VendorNav/VendorSidebar";
import { VendorApi } from "../../../Apis/UserApi";
import axios from 'axios'
function AddPhotos() {
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]); //
    const [input,setInput] = useState()
    const vendorToken = JSON.parse(localStorage.getItem('vendorDetails')).vendorToken;
     
    const handleChange=(e)=>{
        setInput((prev)=>({
            ...prev,
            [e.target.name] : e.target.value,
        }))
        console.log(`${e.target.name} : ${e.target.value}`);
      }

    const handleCheckboxChange = (category) => {
        if (selectedCategories.includes(category)) {
            const updatedCategories = selectedCategories.filter(item => item !== category);
            setSelectedCategories(updatedCategories);
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const getCategories = async () => {
        try {
            const res = await axios.get(`${VendorApi}/getimageCategories`, {
                headers: {
                    Authorization: `Bearer ${vendorToken}`
                }
            })
            if (res.status === 200) {
                console.log(res.data)
                setCategories(res.data.categoryDatas)
            } else {
                console.log("errrrr")
            }
        } catch (error) {
            console.log("error in Addstudio category : ", error.message)
        }

    }

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div className="flex">
            <div>
                <VendorSidebar />
            </div>

            <div class="min-h-screen p-6 bg-blue-100 flex w-full items-center justify-center" style={{ fontFamily: 'Noto Serif' }}>
                <div class="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 class="font-semibold text-xl text-gray-600">Add Studio Form</h2>
                        <p class="text-gray-500 mb-6">Here you can add your Studios.</p>

                        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div class="text-gray-600">
                                    <p class="font-medium text-lg">Studio Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div class="lg:col-span-2">
                                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    </div>
                                    <h1 className="font-bold my-7 text-blue-500">Select Category that you can cover from following</h1>

                                    <div className="grid grid-cols-2 gap-7 w-[30rem]">
                                        {categories.map((item) => (
                                            <div key={item._id} className="">
                                                <label className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="w-5 h-5"
                                                        checked={selectedCategories.includes(item._id)}
                                                        onChange={() => handleCheckboxChange(item._id)}
                                                    />
                                                    <span className="ms-4">{item.categoryName}</span>
                                                </label>

                                                {selectedCategories.includes(item._id) && (
                                                    <input className="py-2 px-4 mt-5 border border-gray-500 bg-gray-50 outline-none"
                                                        type="number"
                                                        placeholder="Enter price"
                                                        
                                                    />
                                                )}
                                            </div>
                                        ))}

                                    </div>
                                    <div class="md:col-span-5 text-right mb-10">
                                        <div class="inline-flex items-end">
                                            <button class="bg-blue-500 w-44  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPhotos;
