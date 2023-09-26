import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStudiosHome } from '../../../Utils/UserEndpoints'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";


function SectionThree() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const [studioDetails, setStudioDetails] = useState([]);
    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) {
          return 0;
        }
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        return Math.floor(totalRating / reviews.length);
      };
    
      const getLowestPrice = (categories) => {
        if (!categories || categories.length === 0) {
          return "N/A"; // Return "N/A" if there are no categories
        }
    
        // Find the category with the lowest price
        const lowestPriceCategory = categories.reduce((minCategory, category) => {
          return category.price < minCategory.price ? category : minCategory;
        }, categories[0]);
    
        return `${lowestPriceCategory.price}`;
      };
      
    const getStudios = async () => {
        try {
          const res = await getStudiosHome(search,location,category);
          if (res.data.success) {
            const studiosWithAverageRating = res.data.studioDetails.map(
              (studio) => ({
                ...studio,
                averageRating: calculateAverageRating(studio.review),
                lowestPrice: getLowestPrice(studio.category),
              })
            );
            setStudioDetails(studiosWithAverageRating);
          }
        } catch (error) {
          console.log("getSTudios : ", error.message);
        }
      };
    // const getStudios = async () => {
    //     try {
    //         const res = await getStudiosHome(search, location, category)
    //         if (res.data.success) {
    //             setStudioDetails(res.data.studioDetails)
    //         }
    //     } catch (error) {
    //         console.log("getSTudios : ", error.message)
    //     }
    // }
    useEffect(() => {
        getStudios()
    }, [])
    return (
        <>
            <div className='mx-16' style={{ fontFamily: 'Noto Serif' }} >
                <p className='text-2xl'>Featured Studios</p>
                <p className='my-2 text-[12px] md:text-[15px]'>Start planning your day with us!</p>
            </div>
            <div className='mx-14'>

                {studioDetails ? (<div class="grid-cols-1 grid lg:grid-cols-4 md:grid-cols-2" >
                    {studioDetails.map((studio) => (
                        <div
                            className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                            <div className='cursor-pointer' onClick={() => navigate(`/studioDetails/${studio._id}`, { state: { studio } })}>
                                {studio.images ? (<img className='h-[15rem] w-full object-cover' src={studio.images.images[0].photos[0]} alt='' />) : (<img
                                    className="rounded-t-lg"
                                    src="https://anakoskaphotography.com/wp-content/uploads/2018/09/professional-picture-of-a-cute-baby-boy-in-white.jpg"
                                    alt="Hollywood Sign on The Hill" />)}
                            </div>
                            <div className="p-6">
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-black dark:black cursor-pointer">
                                    {studio && studio.companyName}
                                </h5>

                                <div>
                                    <div>
                                        <div className="flex">
                                            <div className="flex text-[10px]">
                                                <button
                                                    type="button"
                                                    title="Rate 1 stars"
                                                    aria-label="Rate 1 stars"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className={`w-5 h-5 ${studio.averageRating === 1 ||
                                                            studio.averageRating === 2 ||
                                                            studio.averageRating === 3 ||
                                                            studio.averageRating === 4 ||
                                                            studio.averageRating === 5
                                                            ? "dark:text-yellow-500"
                                                            : "text-gray-400"
                                                            } `}
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Rate 2 stars"
                                                    aria-label="Rate 2 stars"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className={`w-5 h-5  ${studio.averageRating === 2 ||
                                                            studio.averageRating === 3 ||
                                                            studio.averageRating === 4 ||
                                                            studio.averageRating === 5
                                                            ? "dark:text-yellow-500"
                                                            : "text-gray-400"
                                                            } `}
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Rate 3 stars"
                                                    aria-label="Rate 3 stars"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className={`w-5 h-5  ${studio.averageRating === 3 ||
                                                            studio.averageRating === 4 ||
                                                            studio.averageRating === 5
                                                            ? "dark:text-yellow-500"
                                                            : "text-gray-400"
                                                            } `}
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Rate 4 stars"
                                                    aria-label="Rate 4 stars"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className={`w-5 h-5  ${studio.averageRating === 4 ||
                                                            studio.averageRating == 5
                                                            ? "dark:text-yellow-500"
                                                            : "text-gray-400"
                                                            } `}
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Rate 5 stars"
                                                    aria-label="Rate 5 stars"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className={`w-5 h-5  ${studio.averageRating === 5
                                                            ? "dark:text-yellow-500"
                                                            : "text-gray-400"
                                                            } `}
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <p className="mx-2">{studio.averageRating}.0 </p>
                                            <p className="text-gray-500 text-[15px]">
                                                ({studio.review.length} reviews)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex mt-1 gap-1">
                                    <LocationOnIcon style={{ width: "18px" }} />
                                    <p className="text-[13px] mt-1 text-gray-500">
                                        {studio.district}, {studio.city}
                                    </p>
                                </div>

                                <div className="flex mt-1">
                                    <CurrencyRupeeOutlinedIcon style={{ width: "18px" }} />
                                    <p className=" mx-1 text-red-500">
                                        <span className="text-[12px] text-gray-500">From</span> ₹
                                        {studio.lowestPrice}
                                    </p>
                                </div>


                            </div>
                        </div>
                    ))}



                </div>) : <p>Loading............</p>
                }
            </div>
        </>
    )
}

export default SectionThree
