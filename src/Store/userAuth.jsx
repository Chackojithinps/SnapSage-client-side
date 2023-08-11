import {createSlice} from '@reduxjs/toolkit'

const UserAuth = createSlice({
    name:"user",
    initialState:{
        userToken:null,
        userName:null
    },
    reducers:{
        adduserDetails(state,action){
            const userDetails = action.payload;
            state.userToken = userDetails.token;
            state.userName = userDetails.name
            console.log("userDetails in redux : ",userDetails)
            console.log("userToken",state.userToken)
        }
    }
})
export const {adduserDetails} = UserAuth.actions;
export default UserAuth