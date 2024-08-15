import { useState, useEffect } from "react"

const LifeCycleComponent = () => {
    const [count, setCount] = useState(0) //Cria um estado react. Onde, toda vez que esse mudar, qualquer utilização dele no código será notificada e atualizada, sem a necesidade de atualização da página inteira.

    useEffect(() => { //Lida com a atualização e montagem do componente. Usando um return no useEffect, conseguimos fazer algo na desmontagem do componente.
        const timerId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return () => {
            clearInterval(timerId)
            console.log("Timer foi limpo");
        }
    }, [])

    return (
        <h1>{count}</h1>
    )
}

export default LifeCycleComponent