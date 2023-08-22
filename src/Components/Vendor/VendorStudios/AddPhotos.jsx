import React, { useEffect, useState } from "react";
import VendorSidebar from "../VendorNav/VendorSidebar";
import { VendorApi } from "../../../Apis/UserApi";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios'
import { toast } from "react-hot-toast";
function AddPhotos() {
    const [studios, setStudios] = useState([])
    
    const [selectedStudio, setSelectedStudio] = useState(null);
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categoryImages, setCategoryImages] = useState({});
    const [selectedCategoryData, setSelectedCategoryData] = useState(null);
    const vendorToken = JSON.parse(localStorage.getItem('vendorDetails')).vendorToken;
    console.log("selectedCategories : ", selectedCategories)
    console.log("selectedStudio : ", selectedStudio)
    console.log("studios : ",studios)


    const getImagesByCategory = async (studioId) => {
        try {
            const res = await axios.get(`${VendorApi}/getStudioImages?id=${studioId}`, {
                headers: {
                    Authorization: `Bearer ${vendorToken}`,
                    'Content-Type': 'multipart/form-data'
                },
            })
            if (res.data.success) {
                console.log("this is res.data :", res.data)

                console.log("this is res.data.categoryDatawihtimages :", res.data.categoryDataWithImages)
                setSelectedCategoryData(res.data.categoryDataWithImages)
            }
        } catch (error) {
            console.log("getImagesByCategory : ", error.message)
        }
    }
    console.log("selelteced category data :  :  : ", selectedCategoryData)




    const handleStudioSelection = async (studio) => {
        setSelectedStudio(studio._id);
        setSelectedCategories([])
        // await getImagesByCategory(studio._id);
    };

    const handleImageSelection = (category, selectedFiles) => {

        setCategoryImages(prevState => ({
            ...prevState,
            [category]: selectedFiles
        }));
    };

    console.log("the categoryImages are : ", categoryImages)

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('studioId', selectedStudio)
            const categoryData = selectedCategories.map(categoryId => ({
                categoryId,
                images: Array.from(categoryImages[categoryId] || []).map((file) => file.name)
            }));

            formData.append('categoryData', JSON.stringify(categoryData));
            console.log("categoryData :-----------------> ", categoryData)
            // Append image files to FormData
            for (const category of selectedCategories) {
                console.log("categroy fo seletedeCAtegories : ", category)
                for (const file of categoryImages[category]) {
                    console.log("file of categoryImages : ", file)
                    formData.append('file', file);
                }
            }

            const res = await axios.post(`${VendorApi}/uploadStudioimg`, formData, {
                headers: {
                    Authorization: `Bearer ${vendorToken}`,
                    'Content-Type': 'multipart/form-data'
                },
            });

            console.log("Response from backend: ", res.data);
            if (res.data.success) {
                console.log("Hello")
                toast.success("Images addedd Successfully")
            } else {
                console.log("somehting wrooooooooooooooooooooooooong")
            }
        } catch (error) {
            toast.error("somehing error")
            console.log("Error uploading images: ", error.message);
        }
    };

    const handleCheckboxChange = (category) => {
        if (selectedCategories.includes(category)) {
            const updatedCategories = selectedCategories.filter(item => item !== category);
            setSelectedCategories(updatedCategories);
        } else {
            setSelectedCategories([...selectedCategories, category]);

        }
    };

    const getStudios = async () => {

        try {
            const res = await axios.get(`${VendorApi}/getStudios`, {
                headers: {
                    Authorization: `Bearer ${vendorToken}`
                },

            })
            if (res.status === 200) {
                setStudios(res.data.studioDatas)

            } else {
                console.log("errrrr")
            }
        } catch (error) {
            console.log("error in Addstudio category111 : ", error.message)
        }

    }
    // 
    const getCategories = async () => {
        try {
            const res = await axios.get(`${VendorApi}/getimageCategories?id=${selectedStudio}`, {
                headers: {
                    Authorization: `Bearer ${vendorToken}`
                },
            })
            if (res.status === 200) {
                console.log(res.data.categoryDatas)
                setCategories(res.data.categoryDatas)
            } else {
                console.log("errrrr")
            }

        } catch (error) {
            console.log("error in Addstudio category4444 : ", error.message)
        }
    }
    useEffect(() => {
        getStudios()
    }, [])

    useEffect(() => {
        getCategories()
    }, [selectedStudio])

    useEffect(() => {
        if (selectedCategories.length > 0) {
            getImagesByCategory(selectedStudio);
        }
    }, [selectedCategories, selectedStudio]);
    
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
                                    {studios?(<div className="grid grid-cols-4">
                                        {studios.map((studio) => (
                                            <div key={studio._id}>
                                                <input
                                                    type="radio"
                                                    id={studio._id}
                                                    name="selectedStudio"
                                                    value={studio.companyName}
                                                    onChange={() => handleStudioSelection(studio)} // Call this function when the radio button changes
                                                />
                                                <label htmlFor={studio._id}>{studio.companyName}</label>
                                                <br />
                                            </div>
                                        ))}
                                    </div>):(<div className="text-black">There is no studio added</div>)}

                                    <div className="border my-10 grid grid-cols-1 gap-8">
                                        {categories.map((item) => (
                                            <div key={item._id} className="">
                                                <label className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="w-5 h-5"
                                                        checked={selectedCategories.includes(item._id)}
                                                        onChange={() => handleCheckboxChange(item._id)}
                                                    />
                                                    <span className="ms-4 text-black">{item.categoryName}</span>
                                                </label>

                                                {selectedCategories.includes(item._id) && (
                                                    <div className="flex h-[20rem] overflow-x-auto overflow-y-hidden">
                                                        {selectedCategoryData &&
                                                            selectedCategoryData.find(data => data.categoryId._id === item._id)?.photos.map((photoUrl, index) => (
                                                                <div key={index}>
                                                                    
                                                                    <div className="my-3 w-[10rem] h-[10rem]">
                                                                        <img src={photoUrl} alt="" className="w-[10rem] h-[10rem] object-cover" />
                                                                    </div>
                                                                    <div className="mx-5 flex w-[10rem]">
                                                                        <DeleteForeverIcon color="" className="text-red-500" />
                                                                        <p className="text-red-500 w-[10rem]">Delete Photo</p>
                                                                    </div>
                                                                </div>
                                                            ))}

                                                        <div className=" my-[15rem] absolute right-24 b">
                                                            <input
                                                                type="file"
                                                                multiple
                                                                name="file"
                                                                onChange={(e) => handleImageSelection(item._id, e.target.files)}
                                                                className=""
                                                            />
                                                        </div>
                                                    </div>


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
        </div>
    );
}

export default AddPhotos;
