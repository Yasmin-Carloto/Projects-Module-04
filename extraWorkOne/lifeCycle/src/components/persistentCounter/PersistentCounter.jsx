// Exercício 3: Sincronização de Estado com Local Storage


// Objetivo: Sincronizar o estado de um componente com o Local Storage para manter dados entre as sessões do navegador.

// Instruções:
// Crie um componente chamado PersistentCounter.
// Use useState para gerenciar o contador, inicializando-o com o valor do Local Storage, se disponível.
// Use useEffect para atualizar o Local Storage sempre que o contador mudar.
// Exiba o valor do contador e adicione botões para incrementar e decrementar.

import { useState, useEffect } from "react"

function PersistentCounter() {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("currentCount")) || 0)

    useEffect(() => {
        localStorage.setItem("currentCount", JSON.stringify(count))
    }, [count])

    return (
        <div className="flex justify-around p-2">
            <button 
                className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-2xl text-white"
                onClick={() => setCount(prevCount => prevCount - 1)}
            >
                Diminua o número
            </button>

            <p className="text-lg">{count}</p>

            <button 
                className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-2xl text-white"
                onClick={() => setCount(prevCount => prevCount + 1)}
            >
                Aumente o número
            </button>
        </div>
    )
}

export default PersistentCounter