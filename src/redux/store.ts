import { configureStore } from '@reduxjs/toolkit'
import newSlice from './userSlice'
import todoSlice from './thunkSlice'

const store = configureStore({
  reducer: {
    store: newSlice,
    todos: todoSlice
  },
})

type RootState = ReturnType<typeof store.getState>
export const selectCounter = (state: RootState) => state.store.counter
export const selectInput = (state: RootState) => state.store.input
export const selectStatus = (state: RootState) => state.todos.status
export const selectTodos = (state: RootState) => state.todos.entities
export const selectError = (state: RootState) => state.todos.error
export default store
export type AppDispatch = typeof store.dispatch