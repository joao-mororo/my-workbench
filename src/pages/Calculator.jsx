import React, { useEffect, useState } from 'react'
import useKeypress from 'react-use-keypress';
import { FaBackspace } from 'react-icons/fa'
import "../styles/Calculator.css"

const Calculator = () => {
  const [inputField, setInputField] = useState('')
  const [result, setResult] = useState('')
  const [equalPressed, setEqualPressed] = useState(false)

  useEffect(() => {
    const lastChar = inputField.slice(-1)
    const operation = inputField.replaceAll('%', '/100')

    if (equalPressed) {
      setResult('')
      return
    }
    
    if (isOperation(lastChar) && lastChar !== '%') {
      return
    }

    try {
      setResult(eval(operation))
    } catch {
      setResult('')
    }
  }, [inputField])

  const isOperation = (data) => {
    const operations = ['+', '-', '*', '/', '%']
    return operations.includes(data) ? true : false
  }

  const addChar = (e) => {
    const newValue = e.target.value
    const lastValue = inputField.slice(-1)

    if (equalPressed) {
      setEqualPressed(false)
      if (isOperation(newValue)) {
        setInputField(inputField + newValue)
      } else {
        setInputField(newValue)
      }
      return
    }

    if ((inputField === '' && newValue === '.') || (inputField === '' && isOperation(newValue))) {
      return
    }

    if (lastValue === '%' && !isOperation(newValue)) {
      setInputField(inputField + '*' + newValue)
      return
    }

    if (isOperation(newValue) && isOperation(lastValue)) {
      let value = inputField.slice(0, inputField.length - 1)
      setInputField(value + newValue)
    } else {
      setInputField(inputField + newValue)
    }
  }

  const clearInputField = () => {
    setEqualPressed(false)
    setInputField('')
  }

  const delLastChar = () => {
    setEqualPressed(false)
    const newValue = inputField.slice(0, -1)
    setInputField(newValue)
  }

  const equalButton = () => {
    if (result) {
      setInputField(result.toString())
      setResult('')
      setEqualPressed(true)
    }
  }

  const replaceString = (str) => {
    if (typeof str === 'number') {
      str = str.toString()
    }
    let newStr = str.replaceAll('*', 'x')
    newStr = newStr.replaceAll('.', ',')

    return newStr
  }

  // Physical keyboard
  useKeypress(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%', ',', 'Backspace', 'Delete', 'Enter'], (event) => {
    const key = event.key
    if (key === 'Backspace') {
      delLastChar()
      return
    }
    if (key === 'Delete') {
      clearInputField()
      return
    }
    if (key === 'Enter') {
      equalButton()
      return
    }
    if (key === ',') {
      addChar({ target: { value: '.' } })
      return
    }
    const e = { target: { value: key.toString() } }
    addChar(e)
  })

  return (
    <div className='calculator-page'>
      <div className="calculator">
        <div className="display">
          <h1 style={{color: equalPressed ? '#0d6efd' : '#fff'}}>{replaceString(inputField)}</h1>
          <h2 style={{ color: '#0d6efd' }}>{result && replaceString(result)}</h2>
        </div>
        <div className="keyboard">
          <button value='' onClick={clearInputField} className="">C</button>
          <button value='' onClick={addChar} className="">+/-</button>
          <button value='%' onClick={addChar} className="">%</button>
          <button value='/' onClick={addChar} className="white">/</button>
          <button value='7' onClick={addChar} className="black">7</button>
          <button value='8' onClick={addChar} className="black">8</button>
          <button value='9' onClick={addChar} className="black">9</button>
          <button value='*' onClick={addChar} className="white">X</button>
          <button value='4' onClick={addChar} className="black">4</button>
          <button value='5' onClick={addChar} className="black">5</button>
          <button value='6' onClick={addChar} className="black">6</button>
          <button value='-' onClick={addChar} className="white">-</button>
          <button value='1' onClick={addChar} className="black">1</button>
          <button value='2' onClick={addChar} className="black">2</button>
          <button value='3' onClick={addChar} className="black">3</button>
          <button value='+' onClick={addChar} className="white">+</button>
          <button value='.' onClick={addChar} className="black">,</button>
          <button value='0' onClick={addChar} className="black">0</button>
          <button value='' onClick={delLastChar} className="black"><FaBackspace /></button>
          <button value='' onClick={equalButton} className="blue">=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator