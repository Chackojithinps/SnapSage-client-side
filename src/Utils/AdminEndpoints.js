import { adminAxiosInstance } from "./Axios";

// -----------------------------------------------------UserSignin ----------------------------------------

export const adminSignin = async (email,password) => {
    try {
        const data = await adminAxiosInstance.post(`/login`, {
            email: email,
            password: password
          });
        return data;
    } catch (error) {
        // alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- categoriesData  ----------------------------------------

export const categoriesData = async () => {
    try {
        const data = await adminAxiosInstance.get(`/categories`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- edit category ----------------------------------------


export const editCategoryData = async (id,category) => {
    try {
        const data = await adminAxiosInstance.patch(`/editCategory?id=${id}`,{
            category
         })
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- addCategory ----------------------------------------


export const addCategoryData = async (category) => {
    try {
        const data = await adminAxiosInstance.post(`/addCategory`,{  
            category:category
         })
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// -----------------------------------------------------UserSignin ----------------------------------------

export const getUnvarifiedStudiosData = async (searchInput) => {
    try {
        const data = await adminAxiosInstance.get(`/getUnvarifiedStudios?search=${searchInput}`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- userSignup  ----------------------------------------

export const rejectStudioData = async (id) => {
    try {
        const data = await adminAxiosInstance.post(`/rejectStudio?id=${id}`)  
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- user otp page ----------------------------------------


export const verifyStudioData = async (id) => {
    try {
        const data = await adminAxiosInstance.patch(`/verifyStudio?id=${id}`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- user Navbar ----------------------------------------


export const blockUser = async (userId) => {
    try {
        const data = await adminAxiosInstance.patch(`/blockUser?id=${userId}`, {})
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- user Navbar ----------------------------------------


export const unblockUserData = async (userId) => {
    try {
        const data = await adminAxiosInstance.patch(`/unblockUser?id=${userId}`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- user Navbar ----------------------------------------


export const userlistsData = async (searchInput) => {
    try {
        const data = await adminAxiosInstance.get(`/userlists?search=${searchInput}`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- user Navbar ----------------------------------------


export const vendorlistsData = async (searchInput) => {
    try {
        const data = await adminAxiosInstance.get(`/vendorlists?search=${searchInput}`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- user Navbar ----------------------------------------


export const verifyVendorData = async (id) => {
    try {
        const data = await adminAxiosInstance.patch(`/verifyVendor?id=${id}`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// ----------------------------------------------------- user Navbar ----------------------------------------


export const rejectVendorData = async (id) => {
    try {
        const data = await adminAxiosInstance.post(`/rejectVendor?id=${id}`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// ----------------------------------------------------- user Navbar ----------------------------------------

export const getUnvarfiedData = async (searchInput) => {
    try {
        const data = await adminAxiosInstance.get(`/getUnverified?search=${searchInput}`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- Chat Lists ----------------------------------------


export const chatListsData = async () => {
    try {
        const data = await adminAxiosInstance.get(`/chatLists`)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}

// ----------------------------------------------------- handle user single chat  ----------------------------------------


export const userChats = async (id) => {
    try {
        const data = await adminAxiosInstance.get(`/userChats?id=${id}`)
        console.log("chatData : : : : : ",data)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}


// ----------------------------------------------------- handle user single chat  ----------------------------------------


export const adminSendMessage = async (id,message) => {
    try {
        const data = await adminAxiosInstance.post(`/addChat`,{
              id:id,
              message:message,
              sender:'admin'
        })
        console.log("chatData : : : : : ",data)
        return data;
    } catch (error) {
        alert("userSignin ")
        return { status: 'failed', message: error.response.data.error }
    }
}