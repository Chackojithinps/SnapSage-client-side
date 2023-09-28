import axios from "axios";
import { UserApi, AdminApi, VendorApi } from "./Api";

const TIMEOUT_DURATION = 110000;

const createAxiosInstanceWithInterceptor = (baseURL, tokenName) => {
    console.log("baserUrl : ", baseURL)
    const instance = axios.create({
        baseURL: baseURL,
        timeout: TIMEOUT_DURATION,
    })
    instance.interceptors.request.use(config => {
        const token = localStorage.getItem(tokenName)
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config
    }, error => {
        return Promise.reject(error);
    })
    instance.interceptors.response.use(
        response => response,
        error => {
            if (error.response) {
                if (error.response.status === 401) {
                    console.log(error.message)
                    // Redirect to login page if user is not authenticated
                    window.location.href = '/error404';
                } else if (error.response.status === 500) {
                    // Redirect to a general error page for server errors
                    window.location.href = '/error503';
                } else {
                    // Handle other HTTP error statuses or show a generic message
                    // You can also display user-friendly error messages here
                    alert("http error : ",error.response.status)
                    console.log("HTTP Error: ", error.response.status);
                }
            } else {
                // Handle network errors or other issues
                alert('Network Error : ',error.message)
                console.log("Network Error: ", error.message);
            }
            return Promise.reject(error);
        })
    return instance
}
const userAxiosInstance = createAxiosInstanceWithInterceptor(UserApi, 'token');
const vendorAxiosInstance = createAxiosInstanceWithInterceptor(VendorApi, 'token')
const adminAxiosInstance = createAxiosInstanceWithInterceptor(AdminApi, 'token')

export {
    userAxiosInstance,
    vendorAxiosInstance,
    adminAxiosInstance
}