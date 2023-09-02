import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "./slices/user"
import questionReducer from "./slices/question"
export const store = configureStore({
  reducer: {
    user: usersReducer,
    question: questionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch