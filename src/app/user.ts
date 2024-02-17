import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../DataStructure'

const initialState : UserData= {

  _id: "65ce545b6c2a7815ff1a020c",
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123",
  profile_pic_file: true,
  events: [
    {
      user_id: "65ce545b6c2a7815ff1a020c",
      pictures: [],
      comments: [],
      likes: [],
      location: "Tel Aviv, begin 5",
      description: "silvester party at the best location in town",
      title: "silvester party",
      event_pic_file: true,
      date:  new Date("2000-12-31T22:00:00.000Z"),
      _id: "65ce54d26c2a7815ff1a020f",
    }
  ],
  "pictures": [
    {
      user_id: "65ce545b6c2a7815ff1a020c",
      event_id: "65ce54d26c2a7815ff1a020f",
      pic_file: true,
      _id: "65c612d38d88af82358b98c8",
      
    }
  ],
  "comments": [
    {
      user_id: "65ce545b6c2a7815ff1a020c",
      event_id: "65ce54d26c2a7815ff1a020f",
      comment: "fgf",
      _id: "65c3befdb7504fbda0602c74",

    }
  ],
  "likes": [
    {
      user_id: "65ce545b6c2a7815ff1a020c",
      event_id: "65ce54d26c2a7815ff1a020f",
      like: true,
      _id: "65c3bef8b7504fbda0602c6e",

    },
    {
      user_id: "65ce545b6c2a7815ff1a020c",
      event_id: "65ce54d26c2a7815ff1a020f",
      like: true,
      _id: "65c3d682c538db51291dcb85",

    }
  ],
}
  export const userSlice = createSlice({
    name: 'user',
    initialState: {
      _id: "65d0a0edde1e768e36e07bbd",
      name: "ohad alb",
      password: "password123",
      email: "ohad.alb@example.com",
      profile_pic_file: true,
      events: [],
      pictures: [],
      comments: [],
      likes: [],
    } as UserData,
    reducers: {
      login: (state, action) => {
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
      logout: (state) => {
        state._id = "";
        state.name = "";
        state.password = "";
        state.email = "";
        state.profile_pic_file = false;
        state.events = [];
        state.pictures = [];
        state.comments = [];
        state.likes = [];
      }


    },
  })
  
  // Action creators are generated for each case reducer function
  export const { login, logout } = userSlice.actions
  
  export default userSlice.reducer