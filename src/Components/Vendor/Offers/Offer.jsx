import React, { useEffect, useState } from "react";
import { vendorAxiosInstance } from "../../../Utils/Axios";
import { toast } from "react-hot-toast";

function Offer() {
  const [list, setList] = useState(false);
  const [offers, setOffers] = useState([]);
  const handleList = async(id) =>{
      setList(!list)

       const res = await vendorAxiosInstance.patch('/listOffer',{id})
       if(res.data.success){
         toast.success("successfully listed")
       }
  }
  const handleunList= async(id) =>{
    setList(!list)
    const res = await vendorAxiosInstance.patch('/unlistOffer',{id})
    if(res.data.success){
        toast.success("successfully unlisted")
      }
  }
  const getOffers = async () => {
    const res = await vendorAxiosInstance.get("/getOffers");
    if (res.data.success) {
      console.log("get offer data ");
      setOffers(res.data.offers);
    }
  };
  useEffect(() => {
    getOffers();
  }, [list]);
  return (
    <div className="flex flex-col" style={{ fontFamily: "Noto Serif" }}>
      
      <div className="ms-5 mt-5">
        <input
          className="py-4 w-[75rem] border border-gray-300 bg-gray-100 px-5 outline-none"
          placeholder="Search here "
        />
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[75rem] max-h-[30rem] overflow-y-scroll">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-100">
            <tr>
              <th scope="col" class="px-10 py-4 font-bold text-gray-900 ">
                Offer Name
              </th>
              <th scope="col" class="px-9 py-4 font-bold text-gray-900">
                Offer Percentage
              </th>

              <th scope="col" class="px-9 py-4 font-bold text-gray-900">
                Description
              </th>
              <th scope="col" class="px-9 py-4 font-bold text-gray-900">
                IsOnetimeOffer
              </th>

              <th scope="col" class="px-9 py-4 font-bold text-gray-900">
                Block/Unblock
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {offers.map((offer) => (
              <tr class="hover:bg-gray-50 h-[5rem]">
                <td className="px-9">
                  <p className="font-bold">{offer.offerName}</p>
                </td>
                <td className="px-9">
                  <p className=" font-bold text-red-500">{offer.percentage}%</p>
                </td>
                <td className="px-9">
                  <p className=" font-bold">{offer.description}</p>
                </td>
                <td className="px-9">
                  <p className=" font-bold">{offer.oneTime?"true":"false"}</p>
                </td>   
                <td className="px-8">
                  <div className="">
                    {offer.isListed ? (
                      <button onClick={()=>handleunList(offer._id)} className="py-1 px-4 w-[5rem] rounded-[5px] bg-green-500 text-black text-white">
                        Unlist
                      </button>
                    ) : (
                      <button onClick={()=>handleList(offer._id)} className="py-1 w-[5rem] px-4 rounded-[5px] bg-red-500 text-white">
                        List
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Offer;
