import { createSlice } from '@reduxjs/toolkit'
import { UserData } from './DataStructure'




export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
        id: "1",
        name: "ohad",
        password: "1234",
        email: "aaaa@gmail.com",
        profile_pic_path: "https://picsum.photos/200",
        events: [],
        pictures: [],
        comments: [],
        likes: [],
        } as UserData,
    },
  reducers: {
    login: (state, user:UserData) => {
      state.value = user
    },
    logout: () => {
      user = {}
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer