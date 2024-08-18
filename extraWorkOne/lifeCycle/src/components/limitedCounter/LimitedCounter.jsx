// Exercício 6: Contador com Limite

// Objetivo: Criar um contador que não ultrapasse um limite superior e que avise quando atingido.

// Instruções:
// Crie um componente chamado LimitedCounter.
// Use useState para armazenar o valor do contador.
// Adicione botões para incrementar e decrementar o contador.
// Não permita que o contador ultrapasse o valor 10 e exiba uma mensagem quando o limite for atingido.

import { useState } from "react"

function LimitedCounter() {
    const [limitedCount, setLimitedCount] = useState(0)
    const [error, setError] = useState(false)

    const handleClick = (event) => {
        if(event.target.name == "increase"){
            if(limitedCount >= 10){
                setError(true)
            }else{
                setLimitedCount(prevLimitedCount => prevLimitedCount + 1)
            }
        } else if(event.target.name == "decrease"){
            setError(false)
            setLimitedCount(prevLimitedCount => prevLimitedCount - 1)
        }
        
    }

    return (
        <div className="flex flex-col gap-2 text-center">
            <div className="flex justify-around items-center p-2">
                <button 
                    className="bg-slate-400 hover:bg-slate-500 p-2 rounded-2xl text-white"
                    onClick={(event) => handleClick(event)}
                    name="decrease"
                >
                    Diminua o número
                </button>

                <p className="text-lg">{limitedCount}</p>

                <button 
                    className="bg-slate-400 hover:bg-slate-500 p-2 rounded-2xl text-white"
                    onClick={(event) => handleClick(event)}
                    name="increase"
                >
                    Aumente o número
                </button>
            </div>
            
            {error && <p className="text-red-600">Número não pode passar de 10!</p>}
        </div>
    )
}

export default LimitedCounter