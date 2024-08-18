// Exercício 1: Atualização de Título com useEffect

// Objetivo: Atualizar o título da aba do navegador conforme o usuário interage com o componente.

// Instruções:
// Crie um componente chamado TitleUpdater.
// Use useState para criar uma variável de estado number.
// Use useEffect para atualizar o título da aba do navegador toda vez que number mudar.
// Adicione botões para incrementar e decrementar number.

import { useState, useEffect } from "react";

function TitleUpdater() {
    const  [number, setNumber] = useState(0)

    useEffect(() => {
        document.title = `Valor atual ${number}`
    }, [number])

    return(
        <div className="flex justify-around p-2">
            <button 
                className="bg-violet-400 hover:bg-violet-500 p-2 rounded-2xl text-white"
                onClick={() => setNumber(prevNumber => prevNumber - 1)}
            >
                Diminuir número na aba
            </button>
            <button 
                className="bg-violet-400 hover:bg-violet-500 p-2 rounded-2xl text-white"
                onClick={() => setNumber(prevNumber => prevNumber + 1)}
            >
                Aumentar número na aba
            </button>
        </div>
    )
}

export default TitleUpdater