import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Desafio do Counter</h1>
            <button onClick={() => setCount(count + 1)}>
                Clique aqui
            </button>
            <p>Você clicou {count} vezes.</p>
        </div>
    )
}

export default Counter

// Por que a desestruturação do useState acontece em um array?