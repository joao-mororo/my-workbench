import React, { useState } from 'react'
import generateId from '../../functions/generateId';
import { BiX, BiPlus } from 'react-icons/bi'
import useLocalStorage from '../../hooks/useLocalStorage'
import useKeypress from 'react-use-keypress';
import { Checkbox } from '@mui/material';
import './ToDo.css'

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
                id: generateId(),
                label: inputValue,
                done: false
            }
        ])

        setInputValue('')
    }
    useKeypress('Enter', addItem)

    const removeTodoListItem = (id) => {
        const newList = todoList.filter((item) => item.id !== id)
        setTodoList(newList)
    }

    const handleItem = (id) => {
        const newList = todoList.filter((item) => item.id !== id)
        const item = todoList.filter((item) => item.id === id)[0]
        setTodoList([
            ...newList,
            {
                id: item.id,
                label: item.label,
                done: !item.done
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
                    {undoneList.map((item) => (
                        <div className='todo-item' key={item.id}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Checkbox checked={item.done} onChange={() => handleItem(item.id)} />
                                <span>{item.label}</span>
                            </div>
                            <button className='btn-remove' onClick={() => removeTodoListItem(item.id)}><BiX /></button>
                        </div>
                    ))}
                </div>
                {doneList.length > 0 && <hr />}
                <div className="done-list">
                    {doneList.map((item) => (
                        <div className='todo-item' key={item.id}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Checkbox checked={item.done} onChange={() => handleItem(item.id)} />
                                <span><s>{item.label}</s></span>
                            </div>
                            <button className='btn-remove' onClick={() => removeTodoListItem(item.id)}><BiX /></button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ToDo