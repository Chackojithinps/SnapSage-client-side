import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { userAxiosInstance } from '../../../Utils/Axios';

function Payment() {
    // const [enteredAmount,setEnteredAmount] = useState(0)
    const [validationMessage, setValidationMessage] = useState('')
    const [amount,setAmount] = useState(0)
    const [open,setOpen] = useState(false)
    const location = useLocation();
    
    const { bookings } = location.state;
    const totalAmount= bookings.totalAmount;
    console.log("bookings :  :  : ",bookings)

    const handleChange = (e) => {
        const amount = e.target.value;
        setAmount(amount)
        if (amount < totalAmount * 0.25) {
            setValidationMessage('Amount must be at least 25% of the total amount.');
        } else {
            setValidationMessage('');
        }
    }

    const verifyPayment =async (response,bookingId,amount)=>{
       const res = await userAxiosInstance.post(`/verifyPayment`,{response,bookingId,amount,totalAmount})
       if(res){
         console.log("res.data :",res.data)
         console.log("res.data :",res)
         toast.success("payment done")
       } else{
          console.log("error res.dta : ",res)
         toast.error("payment failed")
       }
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log("etnetedd")
        if(validationMessage){
            console.log("errrrrrrrrrr")
           setOpen(true)
           setTimeout(()=>{
              setOpen(false)
           },3000)
        }else{
            console.log("hello")
            const res = await userAxiosInstance.post(`/payment?id=${bookings._id}`,{
                amount:amount
            })
            if(res.data.success){
                console.log("entered payment")
                console.log("res.data.order : ",res.data.data)
                var amount1 = res.data.data.amount * 100
                console.log(amount);
                var options = {
                    key: "rzp_test_Qt18oumm8k0BKa", // Enter the Key ID generated from the Dashboard
                    amount: amount1, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    currency: "INR",
                    name: "SnapSage",
                    description: "India's best Mens Fashion website",
                    image: "/public/img/logo.png",
                    order_id: res.data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    handler: function (response) {
                        verifyPayment(response,bookings._id,amount);
                        console.log("response : ", response)
                    },                 
            }
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        
            }else{
                console.log("Error happened")
            }
          }
        }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Payment
                </h2>

            </div>

            <div className="mt-8 mx-5 md:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form >
                        <div>
                            <label for="email" className="block font-medium leading-5  text-gray-700">Enter Amount</label>

                            <div className="mt-1 relative rounded-md shadow-sm">

                                <input id="amount" name="amount" placeholder="" type="number" required=""
                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                                  placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300
                                   transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleChange}/>
                               {open && <p className=" text-red-500">{validationMessage}</p>}
                            </div>
                        </div>
                        <div className='text-right'>
                            <p className='mt-3 font-bold'>Total amount paid : <span className='text-green-500'>₹ {bookings.advanceAmount?bookings.advanceAmount:0}</span></p>
                            <p className='mt-3 font-bold'>Balance Amount : <span className='text-red-500 text-[20px]'>₹ {bookings.totalAmount}</span></p>
                         </div>
                     
                        


                        
                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm 
                                font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 
                                focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo
                                 active:bg-indigo-700 transition duration-150 ease-in-out" onClick={handleSubmit}>
                                    Pay now
                                </button>
                            </span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Payment
