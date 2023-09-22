import { vendorAxiosInstance } from "./Axios";

// --------------------------------------------------------vendor login --------------------------------------------------

export const vendorLogin = async (email, password) => {
    try {
        const data = await vendorAxiosInstance.post(`/login`, {
            email: email,
            password: password,
        });
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// --------------------------------------------------------Add Photos --------------------------------------------------


export const AddPhotosData = async (studioId) => {
    try {
        const data = await vendorAxiosInstance.get(`/getStudioImages?id=${studioId}`)
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// --------------------------------------------------------upload studio Images --------------------------------------------------


export const uploadStudioImages = async (formData) => {
    try {
        const data = await vendorAxiosInstance.post(`/uploadStudioimg`, formData);
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// --------------------------------------------------------get studio --------------------------------------------------


export const getStudioData = async () => {
    try {
        const data = await vendorAxiosInstance.get(`/getStudios`)
        console.log("data ____________________ : ",data)
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// --------------------------------------------------------get categories --------------------------------------------------


export const getCategoriesData = async (selectedStudio) => {
    try {
        const data = await vendorAxiosInstance.get(`/getimageCategories?id=${selectedStudio}`)

        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// --------------------------------------------------------get categories in add Studio page --------------------------------------------------


export const getCategoriesDatas = async () => {
    try {
        const data = await vendorAxiosInstance.get(`/getCategories`)
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// --------------------------------------------------------add Studio  --------------------------------------------------


export const addstudioData = async (input, selectedCategories, categoryPrices) => {
    try {
        const data = await vendorAxiosInstance.post(`/addStudio`, {
            studioName: input.studioName,
            description: input.description,
            district: input.district,
            email: input.email,
            place: input.place,
            city: input.city,
            zipcode: input.zipcode,
            categories: selectedCategories.map(categoryId => ({
                categoryId,
                price: categoryPrices[categoryId] || 0
            }))
        });
        return data;

    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// -------------------------------------------------------- Register vendor --------------------------------------------------


export const registerData = async (formData) => {
    try {
        const data = await vendorAxiosInstance.post(`/register`, formData)
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// -------------------------------------------------------- user Profile image add --------------------------------------------------


export const AddprofileImage = async (formData) => {
    try {
        const data = await vendorAxiosInstance.post(`/upload`, formData);
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// -------------------------------------------------------- get Profile --------------------------------------------------


export const getProfileVendor = async () => {
    try {
        const data = await vendorAxiosInstance.get(`/profile`)
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// -------------------------------------------------------- add Offer --------------------------------------------------


export const addOfferData = async (input) => {
    try {
        const data = await vendorAxiosInstance.post("/addOffer", { input });
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// -------------------------------------------------------- list offer --------------------------------------------------


export const listOfferData = async (id) => {
    try {
        const data = await vendorAxiosInstance.patch('/listOffer', { id })
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// -------------------------------------------------------- unlist Offer --------------------------------------------------


export const unlistOfferData = async (id) => {
    try {
        const data = await vendorAxiosInstance.patch('/unlistOffer', { id })
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// -------------------------------------------------------- get Offer lists --------------------------------------------------


export const getOfferDatas = async () => {
    try {
    const data = await vendorAxiosInstance.get("/getOffers");

        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// -------------------------------------------------------- Accept Booking --------------------------------------------------


export const acceptBookingData = async (id,email) => {
    try {
        const data = await vendorAxiosInstance.patch(`acceptBooking?id=${id}`, {
            email:email
        })
        return data;
    } catch (error) {
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}
// -------------------------------------------------------- Booking  --------------------------------------------------


export const bookingData = async (searchInput) => {
    try {
        const data = await vendorAxiosInstance.get(`/bookings?search=${searchInput}`)
        return data;
    } catch (error){
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// -------------------------------------------------------- get all Booking data for dashboard  --------------------------------------------------


export const allbookingData = async () => {
    try {
        const data = await vendorAxiosInstance.get(`/allBookings`)
        console.log("data >>>>>>>>>>>>>... ,",data)
        return data;
    } catch (error){
        alert("vendorside ")
        return { status: 'failed', message: error.response.data.error }
    }
}
