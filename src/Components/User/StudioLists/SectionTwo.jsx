import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStudiosHome } from "../../../Utils/UserEndpoints";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

function SectionTwo() {
  const [studioDetails, setStudioDetails] = useState([]);
  const navigate = useNavigate();
  console.log("studioDetails in list page : ", studioDetails);
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
      const res = await getStudiosHome();
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
  useEffect(() => {
    getStudios();
  }, []);
  return (
    <div>
      <div className=' px-20 border h-[12rem] flex gap-2'>
        <div className="flex flex-col w-[50%]">

          <p className='text-gray-400 font-bold'>Studio / Studio Vendors</p>
          <p className='font-bold text-[40px]'>Studio Vendors</p>
          <form className='flex'>
            <input
              placeholder='Search for '
              className=' my-5 -gray-500 py-3 px-4 outline-none  md:w-[14rem] lg:w-[22rem] rounded-bl rounded-tl'
              style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
            />
            <button className='py-3  -gray-500 w-[10rem] md:w-[6rem] lg:w-[10rem] h-[50px] my-5 bg-red-600 rounded-br rounded-tr'>
              <span className='text-white text-[17px]'>Find</span>
            </button>
          </form>
        </div>
        <div className="ms-[8rem]">
          <img className=" object-cover w-[100rem] h-[12rem]" src="/Images/Picsart_23-09-19_18-18-00-295.jpg" alt="" />
        </div>

      </div>
      <div className="flex justify-end mx-16 px-3">

      
      <div className="px-2 mt-5 py-4 w-full text-right  rounded h-[5rem]" style={{ fontFamily: "Noto Serif" }}>
        {/* <label for="cars">Choose a car:</label> */}

        <select name="cars" id="cars" className="border border-[2px] outline-none py-3 w-[18rem] px-6 border-500">
          <option value='all'>Select Category</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars" className="border border-[2px] ms-3 py-3 w-[18rem] px-6 outline-none border-500 ">
          <option value='all'>Select District</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars" className="border border-[2px] ms-3 py-3 w-[18rem] px-6 outline-none border-500">
          <option value='all'>Select Price</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div>
        </div>

      </div>
      </div>
      <div class="grid-cols-1 mx-16 grid lg:grid-cols-4 md:grid-cols-2">
        {studioDetails.map((studio) => (
          <div
            className="mx-3 flex flex-col mt-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0"
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
                Weddding Mubark
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
              {/* <p className="mb-4 text-base text-black">Hello</p>
                <p className="mb-4 text-base text-black">Hello</p>
                <p className="mb-4 text-base text-black">Hello</p> */}
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

      
      </div>

      <div class="inline-flex rounded-xl mt-10 w-full">
        <ul class="flex items-center w-full justify-center mt-[5rem]">
          <li class="px-2">
            <button
              aria-disabled="true"
              disabled=""
              class="w-9 h-9 flex items-center justify-center rounded-md border disabled"
            >
              <span>
                <svg
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  class="fill-current stroke-current"
                >
                  <path
                    d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                    stroke-width="0.3"
                  ></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="px-2">
            <button class="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500 text-indigo-500">
              1
            </button>
          </li>
          <li class="px-2">
            <button class="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">
              2
            </button>
          </li>
          <li class="px-2">
            <button class="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">
              3
            </button>
          </li>
          <li class="px-2">
            <button class="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">
              4
            </button>
          </li>
          <li class="px-2">
            <button class="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">
              5
            </button>
          </li>
          <li class="px-2">
            <button
              aria-disabled="false"
              class="w-9 h-9 flex items-center justify-center rounded-md border hover:text-indigo-500"
            >
              <span>
                <svg
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  class="fill-current stroke-current"
                >
                  <path
                    d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                    stroke-width="0.3"
                  ></path>
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SectionTwo;
