import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user.ts'

export default configureStore({
  reducer: { user: userSlice },
})