import axios from 'axios';
import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function VendorOtp() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate= useNavigate()
  const inputRefs = useRef([...Array(6)].map(() => React.createRef()));
  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const enteredOTP = otp.join(''); // Concatenate all the values from the otp state array
    console.log('Entered OTP:', enteredOTP);
    const res= await axios.post("http://localhost:5000/vendor/verifyOtp",{
        otp:enteredOTP
    })
    if(res){
        console.log("res is there" , res)
        toast.success(res.data.message)
        navigate('/vendor')
    }else{
      toast.error("somthing wrong")
    }
};

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Otp Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email ba**@dipainhouse.com</p>
              </div>
            </div>

            <div>
              <form action="" method="post" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-16">
                  <div className="flex gap-2 flex-row items-center justify-between mx-auto w-full">
                    {otp.map((digit, index) => (
                      <div className="w-20 h-16" key={index}>
                        <input
                          ref={inputRefs.current[index]}
                          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                          value={digit}
                          onChange={(e) => handleChange(index, e.target.value)}
                          maxLength={1}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                        type="submit"
                      >
                        Verify Account
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't receive the code?</p>
                      <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VendorOtp;
