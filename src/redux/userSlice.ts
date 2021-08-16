import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  counter: number,
  input: string
}

const initialState: State = {
  counter: 0,
  input: ""
}

export const newSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
     decrement: (state) => {
      state.counter -= 1
    },
    update: (state, action: PayloadAction<string>) => {
      state.input = action.payload
    }
  },
})

export const { increment, decrement, update } = newSlice.actions
export default newSlice.reducer