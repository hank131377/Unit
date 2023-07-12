import  { useState,FC } from 'react';
import { useSelector } from 'react-redux'


import InputField from './components/InputField';
import TodoList from './components/TodoList';
import './style/All.scss'

const App:FC = () => {

  const [todo,setTodo]=useState<string>('')
  const todolist = useSelector((store:{todo:[]})=>{
    return store.todo})
  return (
    <div className="App">
      <span className="heading">TodoList</span>
      <InputField todo={todo} setTodo={setTodo} />
      <TodoList todolist={todolist}/>
    </div>
  );
}

export default App;
