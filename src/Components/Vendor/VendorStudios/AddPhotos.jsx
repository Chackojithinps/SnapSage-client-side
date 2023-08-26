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
    const [loader, setLoader] = useState(false)
    const [imageLoader, setImageLoader] = useState(false)
    const [imageRefresh,setImageRefresh] =useState(false)
    const vendorToken = JSON.parse(localStorage.getItem('vendorDetails')).vendorToken;
    console.log("selectedCategories : ", selectedCategories)
    console.log("selectedStudio : ", selectedStudio)
    console.log("studios : ", studios)


    const getImagesByCategory = async (studioId) => {
        try {
            setImageLoader(true)
            const res = await axios.get(`${VendorApi}/getStudioImages?id=${studioId}`, {
                headers: {
                    Authorization: `Bearer ${vendorToken}`,
                    'Content-Type': 'multipart/form-data'
                },
            })
            setImageLoader(false)
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
        setLoader(false)
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
            window.location.reload()
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
                setImageRefresh(!imageRefresh)
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
            setLoader(true)
            const res = await axios.get(`${VendorApi}/getimageCategories?id=${selectedStudio}`, {
                headers: {
                    Authorization: `Bearer ${vendorToken}`
                },
            })
            console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
            setLoader(false)
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
        if (selectedStudio) {

            getCategories()
        }
    }, [selectedStudio])

    useEffect(() => {
        if (selectedCategories.length > 0) {
            getImagesByCategory(selectedStudio);
        }
    }, [selectedCategories, selectedStudio,imageRefresh]);

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
                                    {studios ? (<div className="grid grid-cols-4 ">
                                        {studios.map((studio) => (
                                            <div key={studio._id}>
                                                <input
                                                    className="cursor-pointer"
                                                    type="radio"
                                                    id={studio._id}
                                                    name="selectedStudio"
                                                    value={studio.companyName}
                                                    onChange={() => handleStudioSelection(studio)} // Call this function when the radio button changes
                                                />
                                                <label htmlFor={studio._id} className="mx-1 cursor-pointer">{studio.city}</label>
                                                <br />
                                            </div>
                                        ))}
                                    </div>) : (<div className="text-black">There is no studio added</div>)}

                                    {!loader ? <div className="my-10 grid grid-cols-1 gap-8">
                                        {categories.map((item) => (
                                            <div key={item._id} className="">
                                                <label className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="w-5 h-5 cursor-pointer "
                                                        checked={selectedCategories.includes(item._id)}
                                                        onChange={() => handleCheckboxChange(item._id)}
                                                    />
                                                    <span className="ms-4 text-black cursor-pointer ">{item.categoryName}</span>
                                                </label>

                                                {selectedCategories.includes(item._id) && (
                                                    <div className="flex h-[20rem] overflow-x-auto overflow-y-hidden">
                                                        {selectedCategoryData ?
                                                            selectedCategoryData.find(data => data.categoryId._id === item._id)?.photos.map((photoUrl, index) => (
                                            
                                                                <div key={index} className="h-[20rem]">
                                                                    {!imageLoader ? <div className="my-3 w-[10rem] h-[10rem]">
                                                                        <img src={photoUrl} alt="" className="w-[10rem] h-[10rem] object-cover" />
                                                                    </div> : <div role="status">
                                                                        <svg aria-hidden="true" className=" my-16 mx-14 w-10 h-10 mr-2 text-gray-200  animate-spin dark:text--600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                                        </svg>
                                                                        <span class="sr-only">Loading...</span>
                                                                    </div>}
                                                                    <div className="mx-5 flex w-[10rem]">
                                                                        <DeleteForeverIcon color="" className="text-red-500" />
                                                                        <p className="text-red-500 w-[10rem]">Delete Photo</p>
                                                                    </div>
                                                                </div>
                                                            )) : <div className="mx-auto h-[5rem] text-red-500 mt-10"></div>}

                                                        {selectedCategoryData ? <div className=" my-[15rem] absolute right-24 b">
                                                            <input
                                                                type="file"
                                                                multiple
                                                                name="file"
                                                                onChange={(e) => handleImageSelection(item._id, e.target.files)}
                                                                className=""
                                                            />
                                                        </div> : <div className="my-[2rem]">
                                                            <input
                                                                type="file"
                                                                multiple
                                                                name="file"
                                                                onChange={(e) => handleImageSelection(item._id, e.target.files)}
                                                                className=""
                                                            />
                                                        </div>}
                                                    </div>


                                                )}

                                            </div>
                                        ))}

                                    </div> : <button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg my-5 ms-20 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  dark:text-gray-400  dark:hover:text-white  inline-flex items-center">
                                        <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                        </svg>
                                        Loading...
                                    </button>}

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
