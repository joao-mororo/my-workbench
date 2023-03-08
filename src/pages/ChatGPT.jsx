import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'
import useKeypress from 'react-use-keypress';
import "../styles/ChatGPT.css"

const ChatGPT = () => {
  const [message, setMessage] = useState('')
  const [array, setArray] = useState([])
  const [loading, setLoading] = useState(false)
  const [apiKey] = useState(process.env.REACT_APP_OPENAI_API_KEY)

  const sendMessage = () => {
    const clienteMessage = <p className='client-message'>{message}</p>
    if (message === "") {
      return
    }
    setArray([...array, clienteMessage])
    setLoading(true)

    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 2048,
        temperature: 0.5
      })
    })
      .then((res) => res.json())
      .then((json) => {
        if(json.error?.message) {
          setArray([...array, <p className='error-message'>Error: {json.error.message}</p>])
        } else if (json.choices?.[0].text) {
          let text = json.choices[0].text || "Sem resposta"
          console.log(text)
          setArray([...array, clienteMessage, <p className='ai-message'>{text}</p>])
        }
      })
      .catch((err) => {
        setArray([...array, clienteMessage, <p className='error-message'>Error: {err}</p>])
      })
      .finally(() => {
        setMessage("")
        setLoading(false)
      })
    return console.log(array)
  }

  useKeypress(['Enter'], sendMessage)

  return (
    <div className='chatgpt-page'>
      <p style={{position: 'absolute', right: '10px', top: '10px'}}>{loading ? 'loading' : 'not loading'}</p>
      <div className="chat-body">
        <p className="client-message">Hi, Im Client</p>
        <p className="ai-message">Im ChatGPT</p>
        <p className="error-message">Im a errror message </p>
        {array}
      </div>
      <div className="input-area">
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
        <button onClick={sendMessage}><IoSend /></button>
      </div>
    </div>
  )
}

export default ChatGPT