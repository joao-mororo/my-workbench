import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Translate = () => {
    const [languages, setLanguages] = useState([])
    const [from, setFrom] = useState('en')
    const [to, setTo] = useState('pt')
    const [inputText, setInputText] = useState('')
    const [translation, setTranslation] = useState('')

    // Get languages
    useEffect(() => {
        axios.get('https://libretranslate.com/languages', {
            headers: {'accept': 'application/json'}
        }).then((res) => setLanguages(res.data))
    }, [])

    const translate = () => {
        // const params = new URLSearchParams()
        // params.append('q', inputText)
        // params.append('source', from)
        // params.append('target', to)
        // params.append('format', 'text')
        // params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')


        // axios.post('https://libretranslate.com/translate', params, {
        //     headers: {
        //         'accept': 'application/json',
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // }).then((res) => {
        //     console.log(res.data)
        // })

        axios.post(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=en|pt`)
            .then((data) => console.log(data))
    }

    return (
        <div>
            <div className="input-container">
                <select className='translate-from' onChange={(e) => setFrom(e.target.value)}>
                    <option value=""></option>
                    {languages.map((item) => (
                        <option key={item.code} value={item.code}>{item.name}</option>
                    ))}
                </select>
                <p>{from}</p>

                <select className='translate-to' onChange={(e) => setTo(e.target.value)}>
                    <option value=""></option>
                    {languages.map((item) => (
                        <option key={item.code} value={item.code}>{item.name}</option>
                    ))}
                </select>
                <p>{to}</p>
            </div>

            <div className="textarea-container">
                <textarea
                    placeholder='Introduzir Texto'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    cols="30"
                    rows="10"
                ></textarea>

                <textarea
                    placeholder='Tradução'
                    value={translation}
                    onChange={(e) => setTranslation(e.target.value)}
                    cols="30"
                    rows="10"
                    disabled
                ></textarea>
            </div>
            <button onClick={() => translate()}>Traduzir</button>
        </div>
    )
}

export default Translate