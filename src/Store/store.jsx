import { configureStore } from "@reduxjs/toolkit";
import UserAuth from "./userAuth";
import vendorAuth from "./vendorAuth";
const Store = configureStore({
    reducer:{
             user:UserAuth.reducer,
             vendor:vendorAuth.reducer
    }
})
export default Store