import { useState , FC } from 'react';
import { MdDone } from 'react-icons/md'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

import { todoRemove, todoEdit,todoDone } from '../slice/todoSlice'

interface Props{
    todo:string
    id:number
    isDone:boolean;
}

const SignleTodo:FC<Props> = ({todo,id,isDone}) => {
    const dispatch = useDispatch()
    const [edit,setEdit]=useState<boolean>(false)
    const [editText,setEditText]=useState<string>(todo)
    return (
    <form className='todos__single'>
        {edit?<input type='text' value={editText} onChange={(e)=>{
            setEditText(e.target.value)
        }}/>:
        <span className={isDone?'todos__single--text todos__finish':'todos__single--text'}>{todo}</span>}
        <div>
            <span className="icon">
                <AiFillEdit onClick={()=>{
                    setEdit(!edit)
                    if(edit){
                        dispatch(
                            todoEdit({
                                id,
                                editText
                            })
                        )
                    }
                }}/>
            </span>
            <span className="icon">
                <AiFillDelete onClick={()=>{
                    dispatch(
                        todoRemove(id)
                    )

                }}/>
            </span>
            <span className="icon">
                <MdDone onClick={()=>{
                    dispatch(todoDone({
                        id,
                        isDone:!isDone
                    }))
                }}/>
            </span>
        </div>
    </form>
  )
}

export default SignleTodo