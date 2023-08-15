import React, { useEffect } from "react";
import VendorSidebar from "../VendorNav/VendorSidebar";
import { VendorApi } from "../../../Apis/UserApi";
import axios from 'axios'
function AddStudios() {
    const getCategories=async()=>{
        try {
            const res = await axios.get(`${VendorApi}/getCategory`)
            if(res.status===200){
                console.log(res.data)
            }else{
                console.log("errrrr")
            }
        } catch (error) {
            console.log("error in Addstudio category : ",error.message)
        }
        
    }

    useEffect(()=>{
      getCategories()
    },[])
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
                                        <div class="md:col-span-5">
                                            <label for="full_name">Studio Name</label>
                                            <input
                                                type="text"
                                                name="full_name"
                                                id="full_name"
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value=""
                                            />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="email">Description</label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value=""
                                                placeholder="email@domain.com"
                                            />
                                        </div>

                                        <div class="md:col-span-3">
                                            <label for="address">District</label>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value=""
                                                placeholder=""
                                            />
                                        </div>

                                        <div class="md:col-span-2">
                                            <label for="city">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value=""
                                                placeholder=""
                                            />
                                        </div>
                                        <div class="md:col-span-1">
                                            <label for="zipcode">Zipcode</label>
                                            <input
                                                type="text"
                                                name="zipcode"
                                                id="zipcode"
                                                class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder=""
                                                value=""
                                            />
                                        </div>

                                       
                                    </div>
                                    <h1 className="font-bold my-7 text-blue-500">Select Category that you can cover from following</h1>
                                     
                                    <div className="grid grid-cols-2 gap-7 w-[30rem]">
                                        <div className="">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <label className="ms-4">Bridal Photography</label>
                                        </div>
                                        <div className=" ">
                                            <input type="checkbox" className="w-5 h-5"/>
                                            <label className="ms-4">Bridal Photography</label>
                                        </div>
                                        <div className=" ">
                                            <input type="checkbox" className="w-5 h-5"/>
                                            <label className="ms-4">Bridal Photography</label>
                                        </div>
                                        <div className=" ">

                                            <input type="checkbox" className="w-5 h-5"/>
                                            <label className="ms-4">Bridal Photography</label>
                                        </div>
                                         <div className=" ">

                                            <input type="checkbox" className="w-5 h-5"/>
                                            <label className="ms-4">Bridal Photography</label>
                                        </div>
                                         <div className=" ">

                                            <input type="checkbox" className="w-5 h-5"/>
                                            <label className="ms-4">Bridal Photography</label>
                                        </div>
                                        <div className=" ">

                                            <input type="checkbox" className="w-5 h-5"/>
                                            <label className="ms-4">Bridal Photography</label>
                                        </div>
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

export default AddStudios;
