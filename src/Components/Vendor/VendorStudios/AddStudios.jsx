import React, { useEffect, useState } from "react";
import VendorSidebar from "../VendorNav/VendorSidebar";
import { VendorApi } from "../../../Utils/Api";
import { useNavigate } from "react-router-dom";
import { vendorAxiosInstance } from "../../../Utils/Axios";
function AddStudios() {
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]); //
    const [input, setInput] = useState()
    const [categoryPrices, setCategoryPrices] = useState({});
    const [pageReload, setPageReload] = useState(false)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
        console.log(`${e.target.name} : ${e.target.value}`);
    }

    const handleSubmit = async () => {
        const res = await vendorAxiosInstance.post(`/addStudio`, {
            studioName: input.studioName,
            description: input.description,
            district: input.district,
            email: input.email,
            place: input.place,
            city: input.city,
            zipcode: input.zipcode,
            categories: selectedCategories.map(categoryId => ({
                categoryId,
                price: categoryPrices[categoryId] || 0
            }))
        });
        if (res.data.success) {
            setPageReload(!pageReload)
            setOpen(true)
        }

    }
    const handlePriceChange = (category, price) => {
        setCategoryPrices(prevPrices => ({ ...prevPrices, [category]: price }));
    };
    console.log("categoryPrices : ", categoryPrices)

    const clearInputFields = () => {
        setInput({
            studioName: "",
            description: "",
            district: "",
            email: "",
            place: "",
            city: "",
            zipcode: ""
        });
        setSelectedCategories([]);
        setCategoryPrices({});
    };


    const handleClose = () => {
        clearInputFields();
        setOpen(false)

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
            const res = await vendorAxiosInstance.get(`/getCategories`)
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
    }, [pageReload])
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
                                                onChange={handleChange}
                                                type="text"
                                                // value={input.studioName}
                                                value={input ? input.studioName : ""}
                                                name="studioName"
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="email">Description</label>
                                            <input
                                                onChange={handleChange}
                                                value={input ? input.description : ""}
                                                type="text"
                                                name="description"
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            />
                                        </div>

                                        <div class="md:col-span-3">
                                            <label for="address">Email of the company</label>
                                            <input
                                                onChange={handleChange}
                                                value={input ? input.email : ""}
                                                type="text"
                                                name="email"
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder=""
                                            />
                                        </div>

                                        <div class="md:col-span-2">
                                            <label for="city">District</label>
                                            <input
                                                onChange={handleChange}
                                                value={input ? input.district : ""}
                                                type="text"
                                                name="district"
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder=""
                                            />
                                        </div>
                                        <div class="md:col-span-3">
                                            <label for="address">City</label>
                                            <input
                                                onChange={handleChange}
                                                value={input ? input.city : ""}
                                                type="text"
                                                name="city"
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder=""
                                            />
                                        </div>
                                        <div class="md:col-span-1">
                                            <label for="zipcode">Zipcode</label>
                                            <input
                                                onChange={handleChange}
                                                value={input ? input.zipcode : ""}
                                                type="text"
                                                name="zipcode"
                                                id="zipcode"
                                                class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="" />
                                        </div>


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
                                                        value={categoryPrices[item._id] || ""}
                                                        onChange={(e) => handlePriceChange(item._id, e.target.value)}
                                                    />
                                                )}
                                            </div>
                                        ))}

                                    </div>
                                    <div class="md:col-span-5 text-right mb-10">
                                        <div class="inline-flex items-end">
                                            <button onClick={handleSubmit} class="bg-blue-500 w-44  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
            <div>
                {open &&
                    <div class="fixed z-10 inset-0 overflow-y-auto">
                        <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <div class="fixed inset-0 transition-opacity">
                                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                            <div
                                class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <div class="sm:flex sm:items-start">
                                    <div
                                        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg class="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                                            Studio Request sent
                                        </h3>
                                        <div class="mt-2">
                                            <p class="text-sm leading-5 text-gray-500">
                                                SuccessFully Sent the Studio Submission request. we will notify once we varified.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">

                                    <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                        <button type="button" onClick={handleClose}
                                            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                            Ok
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default AddStudios;
