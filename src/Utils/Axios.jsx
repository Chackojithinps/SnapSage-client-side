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
        console.log("token in interceptro : ", token)
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
            if (error.response && error.response.status === 500) {
                // Navigate to the 500 error page
                window.location.href = '/500';
            }
            return Promise.reject(error);
        })
    return instance
}
const userAxiosInstance = createAxiosInstanceWithInterceptor(UserApi, 'token');
const vendorAxiosInstance = createAxiosInstanceWithInterceptor(VendorApi,'vendorToken')
const adminAxiosInstance = createAxiosInstanceWithInterceptor(AdminApi,'adminToken')

export {
    userAxiosInstance,
    vendorAxiosInstance,
    adminAxiosInstance
}