import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { UserApi } from '../../../Apis/UserApi';

function Payment() {
    // const [enteredAmount,setEnteredAmount] = useState(0)
    const [validationMessage, setValidationMessage] = useState('')
    const [open,setOpen] = useState(false)
    const location = useLocation();
    
    const { bookings } = location.state;
    const totalAmount= bookings.totalAmount;
    console.log("bookings :  :  : ",bookings)

    const handleChange = (e) => {
        const amount = e.target.value;
       
        if (amount < totalAmount * 0.25) {
            setValidationMessage('Amount must be at least 25% of the total amount.');
        } else {
            setValidationMessage('');
        }
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(setValidationMessage){
           setOpen(true)
           setTimeout(()=>{
              setOpen(false)
           },3000)
        }else{
            const res = await axios.patch(`${UserApi}/payment`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
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
