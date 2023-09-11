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
import { userAxiosInstance } from "../../../Utils/Axios";

function Booking({ studio, open, setOpen, successMessage, setSuccessMessage }) {
  // const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const [price, setPrice] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [input, setInput] = useState();
  const [offer, setOffer] = useState(false);
  var userToken = useSelector((state) => state.user.userToken);

  const profileOpen = useSelector((state) => state.user.status);

  // const [successMessage, setSuccessMessage] = useState(false)
  const handlePrice = () => {
    if (!userToken) {
      navigate("/login");
    } else {
      setOpen(true);
    }
  };
  const handleCheckboxChange = (categoryId, price) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((selected) => selected !== categoryId)
      );
      setTotalPrice((prevTotal) => prevTotal - price);
    } else {
      setSelectedCategories((prevSelected) => [...prevSelected, categoryId]);
      setTotalPrice((prevTotal) => prevTotal + price);
    }
  };
  console.log("selected Category items :  : :; ", selectedCategories);

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      const res = await userAxiosInstance.post(`/bookStudio`, {
        studioId: studio._id,
        district: input.district,
        city: input.city,
        message: input.message,
        email: input.email,
        phone: input.phone,
        eventDate: input.eventDate,
        totalAmount: totalPrice,
        categories: selectedCategories.map((categoryId) => categoryId),
      });
      if (res.data.success) {
        //  toast.success("Request sent successfull")
        setOpen(false);
        setSuccessMessage(true);
      }
    } catch (error) {
      console.log("bookingsubmit : ", error.message);
    }
  };

  return (
    <>
      <div
        className={`rounded-2xl px-7 py-7 w-[25rem] ${
          successMessage || open ? "opacity-70" : "opacity-1"
        }  my-4 sticky top-16 right-5 ${price ? "h-[38rem]" : "h-[27rem]"}`}
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[25px]">{studio.companyName}</p>

          <div class="flex items-center space-x-1">
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="font-bold px-3">5.0 Fantastic </p>
            <p className="underline"> 18 reviews</p>
          </div>

          <div className="flex gap-2">
            <AddLocationAltOutlinedIcon color="action" />
            <p className="text-gray-700 hover:underline">
              {studio.district},{studio.city}
            </p>
          </div>
          <div className="flex gap-2">
            <LocalOfferOutlinedIcon color="action" />
            <p
              className="text-red-500 hover:underline"
              onClick={() => setOffer(!offer)}
            >
              20% discount
            </p>
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
          className="absolute top-[5rem] px-8 py-5 rounded-xl left-[26rem] bg-white w-[40rem] h-[35rem] "
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="text-gray-500">Studio Name</p>
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
              <p
                className="mt-2 font-bold"
                style={{ fontFamily: "Noto Serif" }}
              >
                {" "}
                Total Price :{" "}
                <span className="text-red-600 text-[20px]">
                  Rs {totalPrice}
                </span>
              </p>
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
                  className="border py-2 px-2 w-[18rem] rounded-[5px] outline-none"
                />
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                  className="border py-2 px-2 w-[18rem] rounded-[5px] outline-none"
                />
                {/* <input type='text' placeholder='Name and Surname' name='name' onChange={handleChange} className='border py-2 w-full px-2 rounded-[5px] outline-none' /> */}
              </div>
              <div className="flex gap-2 ">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  className="border py-2 px-2 w-[18rem] rounded-[5px] outline-none"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  className="border py-2 px-2 w-[18rem] rounded-[5px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                {/* <label className='text-[15px] text-gray-500'>Event date</label> */}
                <input
                  type="date"
                  placeholder="Event date"
                  name="eventDate"
                  onChange={handleChange}
                  className="border py-2 w-[285px] text-gray-500 rounded-[5px] outline-none px-2"
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
      {offer && (
        <div className="mt-20 mx-24 absolute right-[-40px] top-[10rem]"  style={{ fontFamily: "Noto Serif" }}>
          <div className=" w-[25rem] h-[17rem] px-4 rounded-xl mt-8 bg-gradient-to-br from-red-200 to-gray-300">
          {/* bg-gradient-to-br from-red-200 to-gray-300 */}
            <button className="bg-white py-1 mt-5 rounded px-5">
              EXCLUSIVE
            </button>
            <p className="mt-4 font-bold text-[29px]">
              5% Discount for your First Booking with Wedding wire
            </p>
            <button className="py-2 px-5 bg-red-500 mt-4 rounded text-white font-bold">
              SN137
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Booking;
