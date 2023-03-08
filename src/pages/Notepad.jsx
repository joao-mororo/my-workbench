import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import "../styles/Notepad.css"

const Notepad = () => {
  const [notes, setNotes] = useLocalStorage('notepad-content', '')
  const [letterColor] = useState('#0d6efd')

  return (
    <div className="notepad-page">
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} style={{color: letterColor}} className='notepad' />
    </div>
  )
}

export default Notepad