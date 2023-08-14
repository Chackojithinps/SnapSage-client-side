import {createSlice} from '@reduxjs/toolkit'

const vendorAuth = createSlice({
    name:"vendor",
    initialState:{
        vendorToken:null,
        vendorName:null
    },
    reducers:{
        addvendorDetails(state,action){
            const vendorDetails = action.payload;
            state.vendorToken = vendorDetails.token;
            state.vendorName = vendorDetails.name;
            console.log("vendorDetails in redux : ",vendorDetails)
            console.log("vendorToken",state.vendorToken)
        },
        vendorLogout(state,action){
            state.vendorToken = ""
            state.vendorName = ""
        }
    }
})
export const {addvendorDetails,vendorLogout} = vendorAuth.actions;
export default vendorAuth