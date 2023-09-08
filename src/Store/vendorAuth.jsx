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
            console.log("vendorDetiaalllllllllllllllll ; : : ",vendorDetails)
            console.log("v________________nderDetials.token ; : : ",vendorDetails.token)
            state.vendorToken = vendorDetails.token;
        },
        vendorLogout(state,action){
            state.vendorToken =""
            state.vendorName =""
        },
        addRegisterDetail(state,action){
            const registerDetails = action.payload;
            state.message = registerDetails.message
        }
    }
})
export const {addvendorDetails,vendorLogout,addRegisterDetail} = vendorAuth.actions;
export default vendorAuth
