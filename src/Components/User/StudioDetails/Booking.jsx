import React, { useState } from "react";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BookingData } from "../../../Utils/UserEndpoints";

function Booking({
  studio,
  offers,
  profileId,
  open,
  rating,
  text,
  setOpen,
  successMessage,
  setSuccessMessage,
}) {
  const navigate = useNavigate();
  const [price, setPrice] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [offerPrice, setOfferPrice] = useState(0);
  const [input, setInput] = useState();
  const [offer, setOffer] = useState(false);
  const [message, setMessage] = useState(false);
  var userToken = useSelector((state) => state.user.userToken);

  const profileOpen = useSelector((state) => state.user.status);

  const allOffers = offers.filter((offer) => {
    return offer.isListed && (offer.oneTime ? !offer.user.some((userId) => userId == profileId) : true);
  });
  console.log("profileId : ",profileId)
  console.log("allOffers  : ",allOffers)
  const offerLength = allOffers.length;
  console.log("offerLength : ",offerLength)
  const percentage = allOffers.reduce(
    (total, offer) => total + offer.percentage,
    0
  );

  const handlePrice = () => {
    if (!userToken) {
      navigate("/login");
    } else {
      setOpen(true);
      if (allOffers.length > 0) {
        var discount = Math.floor((totalPrice * percentage) / 100);
        var totalAmount = totalPrice - discount;
        setOfferPrice(totalAmount);
      } else {
        setOfferPrice(totalPrice);
      }
    }
  };

  const handleCheckboxChange = (categoryId, price) => {
    if (selectedCategories.includes(categoryId)){
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((selected) => selected !== categoryId)
      );
      setTotalPrice((prevTotal) => prevTotal - price);
    } else {
      setSelectedCategories((prevSelected) => [...prevSelected, categoryId]);
      setTotalPrice((prevTotal) => prevTotal + price);
    }
  };

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async ()=>{
    try {
      const res = await BookingData(input,studio,allOffers,offerPrice,selectedCategories)
      if (res.data.success) {
        //  toast.success("Request sent successfull");
        if(res.data.message){
          setMessage(res.data.message)
          setTimeout(()=>{
            setMessage("")
          },5000)
        }else{
          setOpen(false);
          setSuccessMessage(true);
        }
        
      }
    } catch (error) {
      console.log("bookingsubmit : ", error.message);
    }
  };
  
  return (
    <>
      <div
        className={`rounded-2xl mx-5 md:mx-0 px-7 mt-[9rem] md:mt-[12px] py-7 w-[25rem] md:w-[25rem] ${
          successMessage || open ? "opacity-70" : "opacity-1"
        }  my-4 sticky top-16 right-5 ${price ? "h-auto" : "h-[27rem]"} ${
          offer ? "h-[32rem]" : "h-[27rem]"
        }`}
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[25px]">{studio.companyName}</p>

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
                  <p><span className="mx-2 text--500">{rating}.0</span></p>
                  <p><span className="mx-2 text--500">{text?text:"No review"}</span></p>
                  <p><span className="mx-2  underline ">{studio.review.length} reviews</span></p>
                </div>


          <div className="flex gap-2">
            <AddLocationAltOutlinedIcon color="action" />
            <p className="text-gray-700 hover:underline">
              {studio.district},{studio.city}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <LocalOfferOutlinedIcon color="action" />
              <p
                className="text-red-500 hover:underline cursor-pointer"
                onClick={() => setOffer(!offer)}
              >
                Available offers
              </p>
            </div>
            {offer && (
              <div>
                {allOffers.length > 0 ? (
                  allOffers.map((offer) => (
                    <div className="flex gap-2 text-[12px]  mx-7 mt-2">
                      <LocalOfferOutlinedIcon
                        color="action"
                        style={{ width: "15px" }}
                      />
                      <p className="">
                        {offer.description}
                        {/* Get 5% off on first Booking on wedding mubarak */}
                      </p>
                    </div>
                  ))
                ) : (
                  <div>
                    <p className="text-[12px]  mx-7 mt-2">
                      Currently there is no offers available
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <p className="text-[16px]">Per Day Price Estimate</p>
            <div
              className="flex cursor-pointer"
              onClick={() => setPrice(!price)}
            >
              <p className="text-[13px] text-[#db2777] cursor-pointer">
                Pricing info
              </p>
              <KeyboardArrowDownOutlinedIcon
                style={{ color: "#db2777", fontSize: "20px" }}
              />
            </div>
          </div>
          {price ? (
            <div className="grid grid-cols-2 gap-2 mt-3">
              {studio.category.map((category) => (
                <div className="flex flex-col bg-gray-50">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-3 h-3"
                        checked={selectedCategories.includes(
                          category.categories._id
                        )}
                        onChange={() =>
                          handleCheckboxChange(
                            category.categories._id,
                            category.price
                          )
                        }
                      />
                      <span className="ms-2 text-[12px]">
                        {category.categories.categoryName}
                      </span>
                    </label>
                  </div>
                  <div>
                    <p className="text-gray-500 ms-5 text-[12px]">
                      Rs ₹{category.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
          <div>
            <p className="font-bold">
              Total Rs : <span className="text-red-500">Rs {totalPrice}</span>
            </p>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-center text-[12px]">Responds within 24 hours </p>
            <BoltOutlinedIcon color="warning" style={{ height: "17px" }} />
          </div>
          <button
            className="py-2 px-2 2-full bg-red-600 text-white rounded-[3px] hover:bg-red-500"
            onClick={handlePrice}
          >
            Request Pricing
          </button>
          <div className="flex gap-2">
            <TrendingUpIcon color="success" />
            <p className="text-[13px]">Popular in your area</p>
          </div>
          <div className="flex gap-2">
            <StarBorderOutlinedIcon color="warning" />
            <p className="text-[13px]">Highly recommended in your area</p>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------Modal----------------------------------------- */}
      {open ? (
        <div
          className="fixed top-[5rem] px-8 py-5 rounded-xl left-[1rem] md:left-[26rem] bg-white w-[25rem] md:w-[40rem]  md:h-[37rem] "
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="text-gray-500">{studio.companyName}</p>
              <CloseOutlinedIcon
                color="action"
                style={{ fontSize: "30px", cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            </div>
            <p
              className="text-[23px] font-bold"
              style={{ fontFamily: "Noto Serif" }}
            >
              Request Pricing
            </p>

            <div className="">
              <div className="flex">
                
                <p
                  className="mt-2 font-bold"
                  style={{ fontFamily: "Noto Serif" }}
                >
                  {" "}
                  Total Price :{" "}
                  <span className="text-red-600 text-[20px]">
                    {allOffers.length>0 && <span className="text-gray-400 ms-1  text-[15px] me-2" style={{ textDecoration: "line-through" }}>₹ {totalPrice} </span>}₹{offerPrice}{allOffers.length>0 && <span className="text-green-500 text-[15px] ms-1 font-medium">{percentage}% off</span>}
                  </span>
                </p>
              </div>

              <div className="flex gap-1 text-red-500">
                <LocalOfferOutlinedIcon style={{ fontSize: "15px" }} />

                <p className="text-[10px]">{offerLength} offer applied</p>
              </div>
            </div>

            <p className="text-gray-500 mt-4 text-[12px]">
              Fill this form and Go Glam Makeup Studio will contact you shortly.
              All the information provided will be treated confidentially.
            </p>
            <div className="flex flex-col mt-3 gap-3">
              <div>
                <textarea
                  type="text"
                  placeholder="Write your message"
                  name="message"
                  onChange={handleChange}
                  className="border h-20 px-2 py-1 w-full outline-none rounded-[5px]"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="District"
                  name="district"
                  onChange={handleChange}
                  className="border py-2 px-2 w-[165px] md:w-[18rem] rounded-[5px] outline-none"
                />
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                  className="border py-2 px-2 w-[165px] md:w-[18rem] rounded-[5px] outline-none"
                />
                {/* <input type='text' placeholder='Name and Surname' name='name' onChange={handleChange} className='border py-2 w-full px-2 rounded-[5px] outline-none' /> */}
              </div>
              <div className="flex gap-2 ">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  className="border py-2 px-2 w-[165px] md:w-[18rem] rounded-[5px] outline-none"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  className="border py-2 px-2 w-[165px] md:w-[18rem] rounded-[5px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="date"
                  placeholder="Event date"
                  name="eventDate"
                  onChange={handleChange}
                  className="border py-2 w-full md:w-[285px] text-gray-500 rounded-[5px] outline-none px-2"
                />
              </div>
            </div>

            <p className="text-gray-500 text-[12px] mt-3">
              By clicking "Send request" you agree to sign up and accept
              WeddingWire's <span className="text-blue-500">Terms of Use.</span>
            </p>
            <button
              className="border border-red-500 py-2 mt-3 rounded-[5px] bg-red-600 text-white font-bold hover:bg-red-500"
              onClick={handleSubmit}
            >
              Send
            </button>
            <p className="text-red-500 text-center mt-4">{message}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {profileOpen && (
        <div
          className="bg-white absolute top-[6rem] right-[8rem] w-[15rem] h-[20rem]"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <ul
            className="flex flex-col py-4 px-4 rounded-[5px] "
            style={{ fontFamily: "Noto Serif" }}
          >
            <li
              className="cursor-pointer py-3 px-3 hover:bg-gray-300"
              onClick={() => navigate("/profile")}
            >
              Profile
            </li>
            <li
              className="cursor-pointer py-3 px-3 hover:bg-gray-300"
              onClick={() => navigate("/bookings")}
            >
              Bookings
            </li>
            <li
              className="cursor-pointer py-3 px-3 hover:bg-gray-300"
              onClick={() => navigate("/bookingHistory")}
            >
              Booking History
            </li>
            <li className="cursor-pointer py-3 px-3 hover:bg-gray-300">
              Logout
            </li>
          </ul>
        </div>
      )}
      {/* -----------------------------------------------------Modal2----------------------------------------- */}

      {successMessage ? (
        <div
          className="border absolute top-[15rem]  left-[27rem] rounded-xl bg-white w-[38rem] h-[14rem]"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <div className="flex flex-col ">
            <div className="flex flex-col py-6  px-6">
              <div className="flex gap-5 ">
                <img
                  className="w-[4rem]"
                  src="https://media0.giphy.com/media/NikzzPlFuvoCzWS7IX/giphy.gif?cid=6c09b952xnht9vja8kqrzj75f3z6o53tp331ei3j8i08aidx&ep=v1_stickers_related&rid=giphy.gif&ct=s"
                  alt=""
                ></img>
                <p className="my-4 font-bold text-[20px]">
                  Request sent Successfully
                </p>
              </div>
              <div>
                <p className="mx-20">
                  Your enquiry to {studio.companyName} was sent successfully.we
                  will let you know once we varified.
                </p>
              </div>
            </div>
            <div className=" w-full flex justify-end py-3 bg-gray-100 rounded-xl">
              <button
                className="me-5 border bg-white font-bold border-gray-300 py-2 px-5 rounded-[5px]"
                onClick={() => setSuccessMessage(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {/* -----------------------------------------------------Modal 3 ------------------------------------------------------ */}
    </>
  );
}

export default Booking;
