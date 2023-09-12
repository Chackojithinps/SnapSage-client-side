import React from "react";
import { useNavigate } from "react-router-dom";

function Review() {
    const navigate = useNavigate()
  return (
    <div
      className="mx-24  w-[55rem] h-[27rem] "
      style={{ fontFamily: "Noto Serif" }}
    >
      <p className="mt-[3rem] text-[28px] " style={{ fontFamily: "Noto Serif" }}>
        Reviews
      </p>
      <div className="flex mt-5 justify-between">
        <div className="">
          <p className="text-[20px]">
            <span className="text-[25px] font-bold me-2">4.8</span>Excellent
          </p>
          <p className="text-gray-500 text-[15px] mx-28">43 reviews</p>
        </div>
        
        <div className="">
            <button onClick={()=>navigate('/review')} className="py-3 rounded-xl text-red-500 text-right px-5 border border-red-500 hover:bg-red-500 hover:text-white">Write a review</button>
        </div>
     
        
      </div>
      <div className="flex gap-7 my-5 w-[55rem]  overflow-x-auto">
        <div className="border border-gray-500 rounded w-[20rem] h-[25rem]">
          <div className="flex gap-2 w-[17rem] my-4 ms-4">
            <img
              src=""
              className="rounded-full h-[3rem] w-[3rem] border border-green-500"
              alt=""
            />
            <div>
              <p>Reshma ks</p>
              <p className="text-gray-500 text-[12px]">Married on 19/23/1999</p>
            </div>
          </div>
          <p>Hello</p>
        </div>
        <div className="border border-gray-500 rounded w-[35rem] h-[25rem]">
          <p className="w-[15rem]">Hello</p>
        </div>
        <div className="border border-gray-500 rounded w-[35rem] h-[25rem]">
          <p className="w-[15rem]">Hello</p>
        </div>
        <div className="border border-gray-500 rounded w-[35rem] h-[25rem]">
          <p className="w-[15rem]">Hello</p>
        </div>
        <div className="border border-gray-500 rounded w-[35rem] h-[25rem]">
          <p className="w-[15rem]">Hello</p>
        </div>
        <div className="border border-gray-500 rounded w-[35rem] h-[25rem]">
          <p className="w-[15rem]">Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
