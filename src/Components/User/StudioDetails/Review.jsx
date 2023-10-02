import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAxiosInstance } from "../../../Utils/Axios";
import { useSelector } from "react-redux";
import { isuserBooked } from "../../../Utils/UserEndpoints";

function Review({ studio }) {
  const [user, setUser] = useState(false);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("")

  const navigate = useNavigate();
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based, so we add 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const calculateRating = () => {
    const sumOfRatings = studio.review.reduce((total, review) => total + review.rating, 0);
    console.log("sumofRatings : ", sumOfRatings)
    const average = Math.floor(sumOfRatings / studio.review.length);
    console.log("average : ", average)
    setRating(average)
    if (average === 1) {
      setText("Very Bad")
    } else if (average === 2) {
      setText("Bad")
    } else if (average === 3) {
      setText("Good")
    } else if (average === 4) {
      setText("Very Good")
    } else if (average === 5) {
      setText("Excellent")
    }
  }

  const isUserBooked = async () => {
    const res = await isuserBooked(studio)
    if (res.data.success) {
      console.log("isuserDataas : ", res.data.isUser);
      const bookingDatas = res.data.isUser;
      var isUserBooked = bookingDatas.filter((bookings) => {
        return bookings.studio === studio._id;
      });
      console.log("isUserBooked : : : : ; : ", isUserBooked);
      if (isUserBooked.length > 0) {
        setUser(true);
      }
    }
  };
  useEffect(() => {
    isUserBooked();
    if (studio.review.length > 0) {
      // If there are no reviews, return 0 or any default value you prefer
      calculateRating()
    }
  }, []);
  return (
    <div
      className="mx-5 md:mx-24 w-[25rem] md:w-[55rem] h-[27rem] "
      style={{ fontFamily: "Noto Serif" }}
    >
      <p
        className="mt-[3rem] text-[28px] "
        style={{ fontFamily: "Noto Serif" }}
      >
        Reviews
      </p>
      <div className="flex mt-5 justify-between">
        <div className="">
          <p className="text-[20px]">
            <span className="text-[25px] font-bold me-2">{rating}.0</span>{text ? text : "No reviews"}
          </p>
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
                  className={`w-5 h-5 ${rating === 1 ||
                    rating === 2 ||
                    rating === 3 ||
                    rating === 4 ||
                    rating === 5
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
                  className={`w-5 h-5  ${rating === 2 || rating === 3 || rating === 4 || rating === 5
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
                  className={`w-5 h-5  ${rating === 3 || rating === 4 || rating === 5
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
                  className={`w-5 h-5  ${rating === 4 || rating == 5
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
                  className={`w-5 h-5  ${rating === 5 ? "dark:text-yellow-500" : "text-gray-400"
                    } `}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
            </div>

            <p className="text-gray-500 text-[15px] mx-2">{studio.review.length} reviews</p>
          </div>
        </div>

        {user && (
          <div className="">
            <button
              onClick={() =>
                navigate("/review", { state: { studioId: studio._id } })
              }
              className="py-3 rounded-xl text-red-500 text-right px-5 border border-red-500 hover:bg-red-500 hover:text-white"
            >
              Write a review
            </button>
          </div>
        )}
      </div>
      {studio.review.length > 0 ?
        (<div className="flex relative gap-7 my-5 w-[28rem] md:w-[55rem]  overflow-x-auto">


          {studio.review.map((review) => (

            <div className="border border-gray-300 rounded-[7px] min-w-[16rem] h-[23rem]">
              <div className="flex  gap-2 w-[17rem] my-4 ms-4">
                <div className="flex " >
                  {review.user.image ? <img
                    src={review.user.image}
                    className="rounded-full h-[3rem] w-[3rem] bg-gray-400 border border-gray-200"
                    alt=""
                  /> : <div className="rounded-full h-[3rem] w-[3rem] bg-gray-400 border border-gray-200"></div>}
                  <div className="mx-5 mt-1 relative">
                    <p className="">{review.user.fname} {review.user.lname}</p>
                    <p className="text-gray-500 text-[12px]">{formatDate(review.created)}</p>
                  </div>

                </div>
                <div>
                </div>
              </div>



              <div className="flex mx-3">
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
                      className={`w-5 h-5 ${review.rating === 1 ||
                        rating === 2 ||
                        rating === 3 ||
                        rating === 4 ||
                        rating === 5
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
                      className={`w-5 h-5  ${review.rating === 2 || review.rating === 3 || review.rating === 4 || review.rating === 5
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
                      className={`w-5 h-5  ${review.rating === 3 || review.rating === 4 || review.rating === 5
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
                      className={`w-5 h-5  ${review.rating === 4 || review.rating == 5
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
                      className={`w-5 h-5  ${review.rating === 5 ? "dark:text-yellow-500" : "text-gray-400"
                        } `}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                </div>
                <p><span className="mx-2 text-gray-500">{review.rating}.0</span></p>
              </div>
              <div className="flex flex-col">

                <div>
                  <p className="text-gray-600 text-[13px]  mx-3 mt-4">{review.feedback}</p>
                </div>


                <div>
                  <p className=" text-gray-500 absolute top-[20rem] min-w-[16rem] md:w-[16rem] text-[12px] mx-4">review added on {formatDate(review.created)}</p>
                </div>
              </div>
            </div>

          ))}</div>
        ) : (<div className="flex gap-7 my-5 w-[25rem] md:w-[55rem] h-[20rem] justify-center items-center rounded border border-gray-500 overflow-x-auto">
          <p className="">No reviews</p>
        </div>)}
    </div>
  );
}

export default Review;
