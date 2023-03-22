import React, { useState } from 'react'
import { BiX, BiPlus, BiCheck } from 'react-icons/bi'
import useLocalStorage from '../hooks/useLocalStorage'
import useKeypress from 'react-use-keypress';
import '../styles/ToDo.css'

const ToDo = () => {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useLocalStorage('todo-list', [])
  const undoneList = todoList.filter((item) => item.done === false)
  const doneList = todoList.filter((item) => item.done === true)

  const addItem = () => {
    if (inputValue === '') { return }

    setTodoList([
      ...todoList,
      {
        label: inputValue,
        done: false
      }
    ])

    setInputValue('')
  }
  useKeypress('Enter', addItem)

  const removeTodoListItem = (label) => {
    const newList = todoList.filter((item) => item.label !== label)
    setTodoList(newList)
  }

  const doneItem = (label) => {
    const newList = todoList.filter((item) => item.label !== label)
    setTodoList([
      ...newList,
      {
        label,
        done: true
      }
    ])
  }

  return (
    <section className='todo-page'>
      <div className="todo-card">
        <div className="input-item">
          <input type="text" placeholder='Digite sua tarefa' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button className='btn-add' onClick={addItem}><BiPlus /></button>
        </div>
        <div className="undone-list">
          {undoneList.map((item, i) => (
            <div className='todo-item' key={i}>
              <span>{item.label}</span>
              <div className="action-buttons">
                <button className='btn-done' onClick={() => doneItem(item.label)}><BiCheck /></button>
                <button className='btn-remove' onClick={() => removeTodoListItem(item.label)}><BiX /></button>
              </div>
            </div>
          ))}
        </div>
        {doneList.length > 0 && <hr />}
        <div className="done-list">
          {doneList.map((item, i) => (
            <div className='todo-item' key={i}>
              <span><s>{item.label}</s></span>
              <button className='btn-remove' onClick={() => removeTodoListItem(item.label)}><BiX /></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToDo