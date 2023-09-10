import {createSlice} from '@reduxjs/toolkit'

const AdminAuth = createSlice({
    name:"admin",
    initialState:{
        userToken:null
    },
    reducers:{
        addAdminDetails(state,action){
            const adminDetails = action.payload;
            state.AdminToken = adminDetails.token;
            console.log("adminDetails in redux : ",adminDetails)
            console.log("admdinTooken",state.adminToken)
        },
        adminLogout(state,action){
            state.AdminToken =""
            // state.vendorName =""
        }
    }
})
export const {addAdminDetails,adminLogout} = AdminAuth.actions;
export default AdminAuth