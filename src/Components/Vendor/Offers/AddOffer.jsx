import React, { useState } from "react";
import { vendorAxiosInstance } from "../../../Utils/Axios";
import { toast } from "react-hot-toast";

function AddOffer() {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log("inut : : ",input)
  const handleAddOffer = async (e) => {
    e.preventDefault();
    const res = await vendorAxiosInstance.post("/addOffer", { input });
    if (res.data.success) {
      console.log(res.data);
      toast.success("successfully offer addded");
    }
  };
  return (
    <div className="" style={{ fontFamily: "Noto Serif" }}>
      <div
        class=" w-[40rem] absolute top-28 left-[30rem] rounded-lg shadow dark:bg-white"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div class="flex font-bold justify-center p-2">
          <p className="text-[20px] mt-10">Add Offer</p>
        </div>
        <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Add Offers here
          </h3>
          <div>
            <label
              for="fname"
              class="text-sm font-medium text-gray-900 block mb-2 "
            >
              Offer Name
            </label>
            <input
              type="text"
              name="offerName"
              id=""
              onChange={handleInputChange}
              class=" border border-gray-50 outline-none  text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 text-black"
              required=""
            />
          </div>
          <div>
            <label
              for="lname"
              class="text-sm font-medium text-gray-900 block mb-2 "
            >
              Offer Percentage
            </label>
            <input
              type="number"
              name="percentage"
              id="lname"
              onChange={handleInputChange}
              class=" border outline-none  border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black font-bold"
              required=""
            />
          </div>
          <div>
            <label
              for="lname"
              class="text-sm font-medium text-gray-900 block mb-2 "
            >
              Offer Description
            </label>
            <textarea
              type="textarea"
              name="description"
              id="lname"
              onChange={handleInputChange}
              class="bg-gray-50 border outline-none  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 text-black"
              required=""
            />
          </div>
          <div>
            <label
              for="lname"
              class="text-sm font-medium text-gray-900 block mb-2 "
            >
              IsOneTimeOffer ?
            </label>
            <select className="borde border-gray-500" name="oneTime" onChange={handleInputChange} id="cars">
              <option >select</option>
              <option value="false">false</option>
              <option value="true">true</option>
              
            </select>
          </div>

          <button
            type="submit"
            onClick={handleAddOffer}
            class="w-full text-white bg-blue-700 hover:bg-blue-800 outline- focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit Your Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddOffer;

{
  /* <div class=" w-[40rem] absolute top-28 left-[30rem] rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-end p-2">
                            <button type="button"  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                            </button>
                        </div>
                        <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="">   
                            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Add Offers here</h3>
                            <div>
                                <label for="fname" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Offer Name</label>
                                <input type="text" name="fname" id="fname" onChange={handleInputChange}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required=""/>
                            </div>
                            <div>
                                <label for="lname" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Offer Percentage</label>
                                <input type="text" name="lname" id="lname" onChange={handleInputChange}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required=""/>
                            </div>
                            <div>
                                <label for="lname" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Offer Description</label>
                                <textarea type="textarea" name="lname" id="lname" onChange={handleInputChange}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                            </div>
                            
                            <button type="submit"  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Your Profile</button>

                        </form>
                 
            </div> */
}
