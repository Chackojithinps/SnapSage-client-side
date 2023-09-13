import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { reviewData } from '../../../Utils/UserEndpoints'

function Review() {
	const [rating,setRating] = useState(0)
	const [feedback,setFeedback] = useState()
	const navigate= useNavigate()
	console.log(feedback)
	const location = useLocation()
	const studioId= location.state.studioId;
    
	const handleSubmit = async()=>{
		const res = await reviewData(studioId,rating,feedback)
		if(res.data.success){
			toast.success("Review added Successfully")
			navigate(`/`)
		}
	}
  return (
    <div>
      <div className="flex flex-col max-w-xl mx-[30rem] mt-[3rem] p-8 shadow-sm rounded-xl lg:p-12 dark:bg-white dark:text-black border border-gray-100" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>
			<div className="flex space-x-3">
				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars" onClick={()=>setRating(1)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"  className={`w-10 h-10 ${rating===1 || rating ===2 || rating===3 || rating===4 || rating===5?'dark:text-yellow-500':"text-gray-400"} `}>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars" onClick={()=>setRating(2)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-10 h-10 ${ rating ===2 || rating===3 || rating===4 || rating===5?'dark:text-yellow-500':"text-gray-400"} `}>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars" onClick={()=>setRating(3)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-10 h-10 ${rating===3 || rating===4 || rating===5?'dark:text-yellow-500':"text-gray-400"} `}>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars" onClick={()=>setRating(4)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-10 h-10 ${ rating===4 || rating==5?'dark:text-yellow-500':"text-gray-400"} `}>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars" onClick={()=>setRating(5)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-10 h-10 ${rating===5?'dark:text-yellow-500':"text-gray-400"} `}>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
			</div>
		</div>
		<div className="flex flex-col w-full">
			<textarea rows="3" placeholder="Message..." name='feedback' onChange={(e)=>setFeedback(e.target.value)} className="p-4 rounded-md outline-none resize-none dark:text-black dark:bg-whire-900 border border-gray-50" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}></textarea>
			<button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400" onClick={handleSubmit}>Leave feedback</button>
		</div>
	</div>
	<div className="flex items-center justify-center">
		<a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</a>
	</div>
</div>
    </div>
  )
}

export default Review
