import React, { useState } from 'react'
import countries from '../../data/countries'
import { FaVolumeUp, FaCopy, FaExchangeAlt } from 'react-icons/fa'
import styles from './Translate.module.css'

const Translate = () => {
    const [from, setFrom] = useState('en-GB')
    const [to, setTo] = useState('pt-BR')
    const [text, setText] = useState('')
    const [translation, setTranslation] = useState('')
    const [translating, setTranslating] = useState(false)

    const translate = () => {
        if (text === '') {
            return
        }

        setTranslating(true)
        fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setTranslation(data.responseData.translatedText)
                data.matches.forEach(data => {
                    if (data.id === 0) {
                        setTranslation(data.translation)
                    }
                });
            })
            .catch(err => alert(err))
            .finally(() => setTranslating(false))
    }

    const speak = (textToSpeak, lang) => {
        let utterance = new SpeechSynthesisUtterance(textToSpeak)
        utterance.lang = lang

        speechSynthesis.speak(utterance);
    }

    const replaceInputs = () => {
        setText(translation)
        setTranslation(text)
        setFrom(to)
        setTo(from)
    }

    const copyToClipboard = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
        alert('Texto copiado')
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.text_input}>
                        <textarea spellcheck="false" className={styles.from_text} placeholder="Introduzir texto" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        <textarea spellcheck="false" value={translating ? 'Traduzindo...' : translation} readonly disabled className={styles.to_text} placeholder={translating ? "Traduzindo..." : "Tradução"}></textarea>
                    </div>
                    <ul className={styles.controls}>
                        <li className={`${styles.row} ${styles.from}`}>
                            <div className={styles.icons}>
                                <FaVolumeUp onClick={() => speak(text, from)} />
                                <FaCopy onClick={() => copyToClipboard(text)} />
                            </div>
                            <select onChange={(e) => setFrom(e.target.value)}>
                                {Object.keys(countries).map((key) => (
                                    <option selected={key === from} value={key}>{countries[key]}</option>
                                ))}
                            </select>
                        </li>
                        <li className={styles.exchange}>
                            <FaExchangeAlt onClick={() => replaceInputs()} />
                        </li>
                        <li className={`${styles.row} ${styles.to}`}>
                            <select onChange={(e) => setTo(e.target.value)}>
                                {Object.keys(countries).map((key) => (
                                    <option selected={key === to} value={key}>{countries[key]}</option>
                                ))}
                            </select>
                            <div className={styles.icons}>
                                <FaVolumeUp onClick={() => speak(translation, to)} />
                                <FaCopy onClick={() => copyToClipboard(translation)} />
                            </div>
                        </li>
                    </ul>
                </div>
                <button onClick={() => translate()}>Translate Text</button>
            </div>
        </section>
    )
}

export default Translate