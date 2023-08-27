import {createSlice} from '@reduxjs/toolkit'

const AdminAuth = createSlice({
    name:"admin",
    initialState:{
        userToken:null
    },
    reducers:{
        addAdminDetails(state,action){
            const adminDetails = action.payload;
            state.adminToken = adminDetails.token;
            console.log("adminDetails in redux : ",adminDetails)
            console.log("admdinTooken",state.adminToken)
        }
    }
})
export const {addAdminDetails} = AdminAuth.actions;
export default AdminAuth