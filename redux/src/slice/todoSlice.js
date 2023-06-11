import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    {
      id: 1,
      text: '事項1',
    },
  ],
  reducers: {
    todoAdd(store, action) {
      store.push(action.payload)
    },
    todoRemove(store, action) {
      return store.filter((v, i) => {
        return v.id !== action.payload
      })
    },
    todoEdit(store, action) {
      console.log(action)
      const index = store.findIndex((v) => v.id === action.payload.id)
      console.log(index)
      store[index] = action.payload
    },
  },
})

export const { todoAdd, todoRemove, todoEdit } = todoSlice.actions
export default todoSlice.reducer
