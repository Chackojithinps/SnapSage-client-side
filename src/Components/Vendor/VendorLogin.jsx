import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import toast from "react-hot-toast";
import { addvendorDetails } from "../../Store/vendorAuth";
import { vendorAxiosInstance } from "../../Utils/Axios";

function VendorLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checked, setCheckbox] = useState(false);
  const [loader,setLoader] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  // -------------------------------------------HandleSubmit Funciton ------------------------->

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (checked) {
        setLoader(true)
        const res = await vendorAxiosInstance.post(`/login`, {
          email: email,
          password: password,
        });
        setLoader(false)
        if (res.status === 200){
          console.log("res.data.data.std : ",res.data)
          toast.success(res.data.message);
          localStorage.setItem("token",res.data.vendorDetail.token);
          dispatch(addvendorDetails({token: res.data.vendorDetail.token }))
          navigate("/vendor");
        } else {
          toast.error(res.data.message);
        }
      } else {
        return;
      }
    } catch (error) {
      console.log("userlogin", error.message);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      {!loader?<div
        className="min-h-screen py-28"
       
      >
        <div className="container mx-auto">
          <div className="bg-white w-10/12 lg:w-8/12 mx-auto flex-col lg:flex-row shadow-lg overflow-hidden flex">
            <div
              className="w-full lg:w-1/2 text-white flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Vendor Login
              </h2>
              <p className="mb-4 text-center">
                Hey,Enter your details to get sign in to your account
              </p>
              <form action="">
                <div className="grid grid-cols-2 gap-2"></div>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email/Phone no"
                    className="border border-gray-400 py-2 px-3 my-2 rounded w-full outline-blue-300"
                  />
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Passcode"
                    className="border border-gray-400 py-2 px-3 rounded my-1 w-full outline-blue-300"
                  />
                  <input
                    type="checkbox"
                    onChange={(e) => setCheckbox(e.target.checked)}
                    className="border border-gray-400 my-4"
                  />
                  <span className="mx-2">
                    I accept the{" "}
                    <span className="text-purple-500">Terms of use</span>T &{" "}
                    <span className="text-purple-500">privacy policy</span>
                  </span>
                </div>
                <div className="flex items-center justify-center my-6">
                  <button
                    className="border border-gray-500 py-1 px-2 w-full bg-purple-500 text-white rounded text-center "
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
                <p className="my-3 text-center">
                  Don't you have an account?{" "}
                  <span
                    className="font-bold hover:text-blue-500 hover:cursor-pointer"
                    onClick={() => navigate("/vendor/register")}
                  >
                    register
                  </span>{" "}
                  now
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>:<div>Loading.......</div>}
    </>
  );
}

export default VendorLogin;
