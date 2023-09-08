// import axios from "axios";
// import { baseUrl, adminUrl, venueUrl } from "../constants/constants";

// const createAxiosClient = (baseURL) => {
//   const client = axios.create({
//     baseURL,
//     timeout: 4000,
//     timeoutErrorMessage: "Request timeout... Please Try Again!!!",
//   });
//   return client;
// };

// const attachToken = (req, tokenName = "userToken") => {
//   let authToken = localStorage.getItem(tokenName);
//   // console.log(authToken,"authtoken",tokenName)
//   if (authToken) {
//     req.headers.Authorization = `Bearer ${authToken}`;
//   }
//   return req;
// };

// const vendorAxiosInstance = createAxiosClient(venueUrl);
// vendorAxiosInstance.interceptors.request.use(async (req) => {
//   const modifiedReq = attachToken(req, "venderToken");
//   return modifiedReq;
// });

// const userAxiosInstance = createAxiosClient(baseUrl);
// userAxiosInstance.interceptors.request.use(async (req) => {
//   const modifiedReq = attachToken(req);
//   return modifiedReq;
// });

// const adminAxiosInstance = createAxiosClient(adminUrl);
// adminAxiosInstance.interceptors.request.use(async (req) => {
//   const modifiedReq = attachToken(req, "adminToken");
//   return modifiedReq;
// });

// export { vendorAxiosInstance, userAxiosInstance, adminAxiosInstance };