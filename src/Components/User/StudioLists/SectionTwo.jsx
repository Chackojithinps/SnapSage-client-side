import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCategoriesData, getStudiosHome } from "../../../Utils/UserEndpoints";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

function SectionTwo() {
  const [studioDetails, setStudioDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [searchStatus, setSearchStatus] = useState(false)
  const [initialLoad,setInitialLoad] = useState(true)
  console.log("studioDetails :L ", studioDetails)
  const locationData = useLocation()
  let studio = locationData.state

  console.log("studio........................ : ", locationData.state)
  // if(studio){
  //   setStudioDetails(studio)
  // }

  // useEffect(() => {
  //   if (studio) {
  //     setStudioDetails(studio);
  //   }
  // }, [studio]);
  const navigate = useNavigate();
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

  const handlePageChange = (index) => {
    setPages(index)
  }

  const handleSearchStatus = (e) => {
    e.preventDefault()
    setSearchStatus(!searchStatus)
  }


  const getStudios = async () => {
    try {
      setLoading(true);
      const res = await getStudiosHome(search, location, category, pages);

      if (res.data.success) {
        console.log("___________________________________________entered : ")
        console.log("___________________________________________entered : ",res.data.sutidoDetails)
        const studiosWithAverageRating = res.data.studioDetails.map(
          (studio) => ({
            ...studio,
            averageRating: calculateAverageRating(studio.review),
            lowestPrice: getLowestPrice(studio.category),
          })
        );
        setStudioDetails(studiosWithAverageRating);

        setPage(res.data.page);
        setTotalPage(res.data.totalPages);
      } else {
        console.error("API request failed:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching studios:", error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (initialLoad && locationData.state) {
      setInitialLoad(false);
      const studiosWithAverageRating = locationData.state.map(
        (studio) => ({
          ...studio,
          averageRating: calculateAverageRating(studio.review),
          lowestPrice: getLowestPrice(studio.category),
        })
      );
      setStudioDetails(studiosWithAverageRating);
      // setStudioDetails(locationData.state);
      
    }
  }, [locationData.state]);

  useEffect(() =>{
    if(locationData.state){
      if(!initialLoad){
        getStudios();
      }
    }else{
      getStudios()
    }
 
    },[location, category, pages, searchStatus]);


  const getCategories = async () => {
    const res = await getCategoriesData()
    if (res.data.message) {
      console.log("category: ", res.data.categoryDatas)
      setCategories(res.data.categoryDatas)
    }
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (

    <div>
      {loading ?
        <div class="w-full h-[35rem] flex justify-center items-center">
          <div class="rounded-full h-14 w-14 bg-violet-800 animate-ping"></div>
        </div> :

        <div>

          <div className='px-5 md:px-20 border h-[12rem] flex gap-2'>

            <div className="flex flex-col w-full md:w-[50%] mt-5 md:mt-0">

              <p className='text-gray-400 font-bold'>Studio / Studio Vendors</p>
              <p className='font-bold md:text-[40px] text-[30px]'>Studio Vendors</p>
              <form className='flex'>
                <input onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search for '
                  value={search}
                  className=' my-5 -gray-500 py-3 px-4 outline-none  md:w-[14rem] lg:w-[22rem] rounded-bl rounded-tl'
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                />
                <button className='py-3  -gray-500 w-[10rem] md:w-[6rem] lg:w-[10rem] h-[50px] my-5 bg-red-600 rounded-br rounded-tr' onClick={handleSearchStatus}>
                  <span className='text-white text-[17px]'>Find</span>
                </button>
              </form>
            </div>
            <div className="ms-[8rem] hidden md:block">
              <img className=" object-cover w-[100rem] h-[12rem]" src="/Images/Picsart_23-09-19_18-18-00-295.jpg" alt="" />
            </div>

          </div>
          <div className="flex flex-col md:flex-row me-40 md:me-14 md:justify-end md:mx-16 px-3">


            <div className="px-2 mt-5 py-4 w-full text-right rounded h-[5rem]" style={{ fontFamily: "Noto Serif" }}>


              <select name="" id="" className="border-[2px] outline-none py-3 ms-3 w-[18rem] px-6 border-500" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((category) => (
                  <option value={category.categoryName}>{category.categoryName}</option>
                ))}
              </select>
              <select name="" id="cars" className="border-[2px] mt-3 md:mt-0 ms-3 py-3 w-[18rem] px-6 outline-none border-500" value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value=''>Choose Location</option>
                <option value="kannur">Kannur</option>
                <option value="kozhikode">Kozhikode</option>
                <option value="wayanad">Wayanad</option>
                <option value="thrissur">Thrissur</option>
                <option value="palakkad">Palakkad</option>
                <option value="malappuram">Malappuram</option>
                <option value="ernakulam">Ernakulam</option>
                <option value="idukki">Idukki</option>
                <option value="kollam">Kollam</option>
                <option value="kottayam">Kottayam</option>
                <option value="alappuzha">Alappuzha</option>
                <option value="kasargod">Kasargod</option>
                <option value="pathanamthitta">Pathanamthitta</option>
                <option value="thiruvananthapuram">Thiruvananthapuram</option>

              </select>

              <div>
              </div>

            </div>
          </div>
          {studioDetails.length > 0 ?
            <div class="grid-cols-1 mt-10 md:mt-0 mx-5 md:mx-16 grid lg:grid-cols-4 md:grid-cols-2">
              {studioDetails.map((studio) => (
                <div
                  className="mx-3 w-[] flex flex-col mt-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                >
                  <div>
                    <img
                      className="h-[15rem] w-full object-cover"
                      src={studio?.images?.images[0]?.photos[0]}
                      alt=""
                    />
                  </div>

                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-black dark:black cursor-pointer">
                      {studio.companyName}
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
                    <button
                      onClick={() =>
                        navigate(`/studioDetails/${studio._id}`, {
                          state: { studio },
                        })
                      }
                      className="py-2 mt-3 px-2 w-full border border-red-500 text-red-500 rounded-[7px] font-bold hover:bg-red-500 hover:text-white"
                    >
                      View Studio
                    </button>
                  </div>
                </div>
              ))}


            </div> :
            <div className="flex justify-center" style={{ fontFamily: "Noto Serif" }}>
              <div className="w-[25rem]  text-center flex justify-center items-center flex-col gap-4 mt-16" >
                <img src="https://www.weddingwire.in/assets/img/components/listing/no_reults/broken_heart.svg" className="w-[6rem]" alt="" />
                <p style={{ fontFamily: 'sans-serif' }}>NO RESULTS</p>
                <p style={{ fontFamily: 'sans-serif' }}>Sorry, we couldn’t find any vendors that match your search. Please update your filters and try again.</p>
              </div>
            </div>
          }
          <div class="inline-flex rounded-xl mt-10 w-full">
            <ul class="flex items-center w-full justify-center mt-[5rem]">

              {Array.from({ length: totalPage }, (_, index) => (
                <li key={index} class="px-2">
                  <button
                    onClick={() => handlePageChange(index + 1)} // Define this function
                    class={`w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500 ${index + 1 == page ? 'bg-red-400 text-white' : 'text-indigo-500'
                      }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>}
    </div>
  )
}

export default SectionTwo;
