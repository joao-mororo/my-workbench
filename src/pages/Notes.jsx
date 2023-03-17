import React, { useState } from 'react'
import { BiPlus, BiX } from "react-icons/bi";
import '../styles/Notes.css'
import useLocalStorage from '../hooks/useLocalStorage';

const Notes = () => {
    const [notes, setNotes] = useLocalStorage('notes', [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const randomID = () => {
        let ID = "";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 8; i++) {
            ID += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return ID;
    }

    const addNote = () => {
        if (title === '' || body === '') {
            return
        }
        
        setNotes([...notes, {
            id: randomID(),
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

            {notes.map((note) => (
                <div className='note-card' style={{ backgroundColor: '#ffffff33' }}>
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