import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoAdd, todoRemove, todoEdit } from './slice/todoSlice'

function App() {
  const dispatch = useDispatch()
  const initialize = {
    id: '',
    text: '',
  }
  const [target, setTarget] = useState(initialize)
  const [addText, setAddText] = useState()
  const [editText, setEditText] = useState()
  const todolist = useSelector((store) => store.todo)
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={addText}
        onChange={(e) => {
          setAddText(e.target.value)
        }}
      />
      <input
        type="button"
        name=""
        id=""
        value="新增"
        onClick={() => {
          dispatch(
            todoAdd({
              id: new Date().getTime(),
              text: addText,
            })
          )
          setAddText('')
        }}
      />
      <ul>
        {todolist.map((v, i) => {
          return v.id === target.id ? (
            <li key={v.id}>
              <input
                type="text"
                value={editText.text}
                onChange={(e) => {
                  setEditText({ ...editText, text: e.target.value })
                }}
              />
              <button
                onClick={() => {
                  dispatch(todoEdit(editText))
                  setTarget(initialize)
                }}
              >
                確認
              </button>
            </li>
          ) : (
            <li key={v.id}>
              {v.text}
              <button
                onClick={() => {
                  setTarget({ id: v.id, text: v.text })
                  setEditText({ id: v.id, text: v.text })
                }}
              >
                修改
              </button>
              <button onClick={() => [dispatch(todoRemove(v.id))]}>刪除</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
