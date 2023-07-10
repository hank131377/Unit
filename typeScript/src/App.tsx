import React, { useState } from 'react';

import InputField from './components/InputField';
import './style/All.scss'

import { useSelector } from 'react-redux'
import TodoList from './components/TodoList';

const App:React.FC = () => {

  const [todo,setTodo]=useState<string>('')

  const todolist = useSelector((store:any)=>store.todo)
  
  console.log(todolist)
  return (
    <div className="App">
      <span className="heading">TodoList</span>
      <InputField todo={todo} setTodo={setTodo} />
      <TodoList todolist={todolist}/>
    </div>
  );
}

export default App;
