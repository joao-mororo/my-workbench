import React, { useState } from 'react'
import "../styles/Notepad.css"

const Notepad = () => {
  const [letterColor] = useState('#0d6efd')

  return (
    <div className="notepad-page">
      <textarea style={{color: letterColor}} className='notepad' />
    </div>
  )
}

export default Notepad