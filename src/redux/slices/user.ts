import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IUserSlice {
  email: string
}

const initialState: IUserSlice = {
    email: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser : (state, action:  PayloadAction<string>) =>{
        state.email = action.payload
    }
  },
})

export const { setUser} = userSlice.actions
export default userSlice.reducer