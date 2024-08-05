import "./TextArea.css"
import { useState } from "react"

const TextArea = () => {
    const [text, setText] = useState("")

    return (
        <div className="mirror-container">
            <h1>Desafio da Text Area espelhada</h1>
            <textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Escreva aqui e teste a solução" className="mirror-text-area">
            </textarea>
            <p className="mirrored-text">{text}</p>
        </div>
    )
}

export default TextArea