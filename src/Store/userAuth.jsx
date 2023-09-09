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
        },
        userLogout(state,action){
            state.userToken = ""
            state.userName = ""
        },
        showProfile(state,action){
            const profileDetails = action.payload
            console.log("action.status", action.status)
            state.status = profileDetails.status
        },
        showProfileImage(state,action){
            const profileDatas = action.payload;
            console.log("action.profileData : ",action.profileData)
            state.profileData= profileDatas.profileData;
        }
    }
})
export const {adduserDetails,userLogout,showProfile,showProfileImage} = UserAuth.actions;
export default UserAuth