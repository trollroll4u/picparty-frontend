import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../DataStructure'

// Define the initial state using that type
  export const userSlice = createSlice({
    name: 'user',
    initialState: {
      _id: "",
      name: "",
      password: "",
      email: "",
      profile_pic_file: "",
      events: [],
      pictures: [],
      comments: [],
      likes: [],
    } as UserData,
    reducers: {
      login: (state :any, action :UserData) => {
        state._id = action.payload._id
        state.name = action.payload.name
        state.password = action.payload.password
        state.email = action.payload.email
        state.profile_pic_file = action.payload.profile_pic_file
        state.events = action.payload.events
        state.pictures = action.payload.pictures
        state.comments = action.payload.comments
        state.likes = action.payload.likes
      },
      logoutUser: (state : any) => {
        state._id = "";
        state.name = "";
        state.password = "";
        state.email = "";
        state.profile_pic_file = "";
        state.events = [];
        state.pictures = [];
        state.comments = [];
        state.likes = [];
      }


    },
  })
  
  // Action creators are generated for each case reducer function
  export const { login, logoutUser } = userSlice.actions
  
  export default userSlice.reducer