import React from 'react';
import {  useDispatch } from 'react-redux'
import { todoAdd } from '../slice/todoSlice'

interface Props{
    todo:string;
    setTodo:(value: string) => void;
}

const InputField:React.FC<Props> = ({todo,setTodo}) => {
    const dispatch = useDispatch()
    return (
   <div className='input'>
    <input type="text" placeholder='輸入代辦事項' className='input__box'
    value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    <button className='input__submit' type='button' onClick={()=>{
        dispatch(
            todoAdd({
                id:new Date().getTime(),
                todo,
                isDone:false
            })
        )
    
    }}>確認</button>
   </div>
  )
}

export default InputField