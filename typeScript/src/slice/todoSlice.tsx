import { createSlice } from '@reduxjs/toolkit'

export interface Props {
    id:number;
    todo:string;
    isDone:boolean
  }
  
  export const initial: Props = {
    id: 1,
    todo:'預設事項',
    isDone:false
  };

const todoSlice = createSlice({
    name: 'todo',
    initialState:[
        initial
    ],
    reducers: {
        todoAdd:(store,action)=>{
            store.push(action.payload)
        },
        todoRemove:(store,action)=>{
            return store.filter((v)=>{
                return v.id !== action.payload
            })
        },
        todoEdit:(state,action)=>{
            const index = state.findIndex((v,i)=>{
                return v.id === action.payload.id
            })
            state[index].todo=action.payload.editText
        },
        todoDone:(state,action)=>{
            const index = state.findIndex((v,i)=>{
                return v.id === action.payload.id
            })
            state[index].isDone=action.payload.isDone
        }
    },
  })
  
  export const { todoAdd, todoRemove, todoEdit,todoDone } = todoSlice.actions
  export default todoSlice.reducer