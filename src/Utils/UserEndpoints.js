import { userAxiosInstance } from "./Axios";

// -----------------------------------------------------UserSignin ----------------------------------------

export const userSignin = async (email,password) => {
    try {
        const data = await userAxiosInstance.post(`/login`, {
            email: email,
            password: password
        });
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- userSignup  ----------------------------------------

export const userRegister = async (email) => {
    try {
        const data = await userAxiosInstance.post(`/register`, {   
            email: email,
          })
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- user otp page ----------------------------------------


export const otpVerify = async (enteredOTP,userData) => {
    try {
        const data= await userAxiosInstance.post("/verifyOtp",{
            otp:enteredOTP,
            userData:userData
        })
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- user Navbar ----------------------------------------


export const userNavbar = async () => {
    try {
        const data = await userAxiosInstance.get(`/getProfileData`);
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// ----------------------------------------------------- user Profile ----------------------------------------

export const getProfile = async () => {
    try {
        const data = await userAxiosInstance.get(`/profile`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- user Home page get Studios  ----------------------------------------

export const getStudiosHome = async (search,location,category) => {
    try {
        console.log("category : : : ",category)
        const data = await userAxiosInstance.get(`/getStudios?search=${search}&location=${location}&category=${category}`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// ----------------------------------------------------- StudioDetails Booking  ----------------------------------------

export const BookingData = async (input,studio,allOffers,offerPrice,selectedCategories) => {
    try {
        const data = await userAxiosInstance.post(`/bookStudio`, {
            offers: allOffers,
            studioId: studio._id,
            district: input.district,
            city: input.city,
            message: input.message,
            email: input.email,
            phone: input.phone,
            eventDate: input.eventDate,
            totalAmount: offerPrice,
            categories: selectedCategories.map((categoryId) => categoryId),
          });
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- get is user booked the studio  ----------------------------------------

export const isuserBooked = async (studio) => {
    try {
        const data = await userAxiosInstance.get(`/isUserBooked?id=${studio._id}`);
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// -------------------------------------------------------------- get Offers -----------------------------------------------------------

export const getOfferData = async (studio) => {
    try {
        const data = await userAxiosInstance.get(`/getOffers?id=${studio.vendorId}`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// -------------------------------------------------------------- review -----------------------------------------------------------

export const reviewData = async (studioId,rating,feedback) => {
    try {
        const data = await userAxiosInstance.post('/addReview',{
            studioId,
            rating,
            feedback
        })
        return data
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// --------------------------------------------------------------Booking lists in user side -----------------------------------------------------------

export const bookingLists = async () => {
    try {
        const data = await userAxiosInstance.get(`/bookings`)
        return data
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// --------------------------------------------------------------Booking History -----------------------------------------------------------

export const bookingHistory = async () => {
    try {
        const data = await userAxiosInstance.get(`/bookingHistory`)
        return data
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// -------------------------------------------------------------  Verify Payment -----------------------------------------------------------

export const verifyPaymentData  = async (response,bookingId,amount,totalAmount) => {
    try {
        const data = await userAxiosInstance.post(`/verifyPayment`,{response,bookingId,amount,totalAmount})
        return data
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// -------------------------------------------------------------  Payment -----------------------------------------------------------

export const paymentData  = async (bookings,amount) => {
    try {
        const data = await userAxiosInstance.post(`/payment?id=${bookings._id}`,{
            amount:amount
        })
        return data
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// -------------------------------------------------------------  get chat -----------------------------------------------------------

export const getChat  = async () => {
    try {
        const data = await userAxiosInstance.get(`/getChats`)
        return data
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}
// -------------------------------------------------------------  get categories -----------------------------------------------------------

export const getCategoriesData  = async () => {
    try {
        const data = await userAxiosInstance.get(`/getCategories`)
        return data
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// -------------------------------------------------------------- get chat -----------------------------------------------------------

export const getChatData  = async () => {
    try {
        console.log("entered chat data")
        const data = await userAxiosInstance.get(`/getChats`)
        return data
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// -------------------------------------------------------------- add Chat by user -----------------------------------------------------------

export const userSendMessage = async (message) => {
    try {
        const data = await userAxiosInstance.post(`/addChat`,{
              message:message,
              sender:'user'
        })
        console.log("chatData : : : : : >>>>>>>>>>>>>>>>>>>>>>>>>> ",data)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

