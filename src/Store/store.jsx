import { configureStore } from "@reduxjs/toolkit";
import UserAuth from "./userAuth";
import vendorAuth from "./vendorAuth";
import AdminAuth from "./AdminAuth";
const Store = configureStore({
    reducer:{
             user:UserAuth.reducer,
             vendor:vendorAuth.reducer,
             admin:AdminAuth.reducer
    }
})
export default Store