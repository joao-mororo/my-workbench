import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import generateId from '../functions/generateId';
import { BiPlus, BiX } from "react-icons/bi";
import '../styles/Notes.css'

const Notes = () => {
    const [notes, setNotes] = useLocalStorage('notes', [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const randomColor = () => {
        const colors = ['#0d6efd', '#6610f2', '#6f42c1', '#d63384', '#dc3545', '#198754']
        const color = Math.floor(Math.random() * colors.length);
        return colors[color]
    }

    const addNote = () => {
        if (title === '' || body === '') {
            return
        }
        
        setNotes([...notes, {
            id: generateId(),
            color: randomColor(),
            title,
            body
        }])

        setTitle("")
        setBody("")
    }

    const removeNote = (id) => {
        const newNotes = notes.filter((item) => item.id !== id)
        setNotes(newNotes)
    }

    return (
        <div className='notes-page'>
            <div className='note-card' style={{ backgroundColor: '#ffffff33' }}>
                <button onClick={() => addNote({ title, body })}><BiPlus /></button>
                <input
                    type="text"
                    className='card-title'
                    placeholder='Título'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <hr />
                <textarea
                    className='card-body'
                    placeholder='...'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>

            {notes.map((note, i) => (
                <div className='note-card' style={{ backgroundColor: note.color || '#ffffff33' }} key={i}>
                    <button onClick={() => removeNote(note.id)}><BiX /></button>
                    <p className='card-title'>{note.title}</p>
                    <hr />
                    <p className='card-body'>{note.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Notes