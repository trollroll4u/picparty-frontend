import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../DataStructure'
import {eventsExamples, picturesExamples }  from '../examples'

const initialState: UserData = {
  
    _id: "65c28e3a4145861695700966",
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123",
  profile_pic_path: "https://picsum.photos/300",
  events: [
    {
      user_id: "65c28e3a4145861695700966",
      pictures: [],
      comments: [],
      likes: [],
      location: "Tel Aviv, begin 5",
      description: "silvester party at the best location in town",
      title: "silvester party",
      event_pic_path: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      date:  new Date("2000-12-31T22:00:00.000Z"),
      _id: "65c28fde4145861695700974",
    }
  ],
  "pictures": [
    {
      user_id: "65c28e3a4145861695700966",
      event_id: "65c28fde4145861695700974",
      picture_path: "https://picsum.photos/900",
      comment: "",
      like: false,
      _id: "65c612d38d88af82358b98c8",
      
    }
  ],
  "comments": [
    {
      user_id: "65c28e3a4145861695700966",
      event_id: "65c28fde4145861695700974",
      picture_path: "",
      comment: "fgf",
      like: false,
      _id: "65c3befdb7504fbda0602c74",

    }
  ],
  "likes": [
    {
      user_id: "65c28e3a4145861695700966",
      event_id: "65c28fde4145861695700974",
      picture_path: "",
      comment: "",
      like: true,
      _id: "65c3bef8b7504fbda0602c6e",

    },
    {
      user_id: "65c28e3a4145861695700966",
      event_id: "65c28fde4145861695700974",
      picture_path: "",
      comment: "",
      like: true,
      _id: "65c3d682c538db51291dcb85",

    }
  ],
  }
    




export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state = action.payload
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes.
    //   // Also, no return statement is required from these functions.
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer