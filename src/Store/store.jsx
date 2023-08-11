import { configureStore } from "@reduxjs/toolkit";
import UserAuth from "./userAuth";
const Store = configureStore({
    reducer:{user:UserAuth.reducer}
})
export default Store