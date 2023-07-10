import React from 'react';
import SignleTodo from './SignleTodo'

interface Props{
    todolist:any
}

const TodoList:React.FC<Props> = ({todolist}) => {
  return (
    <div className='todos'>
        {todolist.map((v:any)=>{
            const todo = v.todo
            const id = v.id
            const isDone = v.isDone
            return <SignleTodo key={v.id} todo={todo} id={id} isDone={isDone}/>
    })}
    </div>
  )
}

export default TodoList