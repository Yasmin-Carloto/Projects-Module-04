// Exercício 4: Relógio em Tempo Real

// Objetivo: Criar um relógio digital que atualiza a hora a cada segundo.

// Instruções:
// Crie um componente chamado RealTimeClock.
// Utilize useState para armazenar a hora atual.
// Utilize useEffect para configurar um intervalo que atualiza a hora a cada segundo.
// Certifique-se de limpar o intervalo quando o componente for desmontado para evitar vazamentos de memória.

import { useEffect, useState } from "react";

function RealTimeClock() {
    const [time, setTime] = useState({
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    })

    useEffect(() => {
        const setTimeOnScreen = setInterval(() => {
            setTime(prevTime => ({
                ...prevTime,
                hour: new Date().getHours(),
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds()
            }))
        }, 1000)
 
        return () => {
            clearInterval(setTimeOnScreen)
        }
    }, [])
    
    return (
        <h1
            className="text-xl text-center text-blue-400" 
        >
            {time.hour}:{time.minutes}:{time.seconds}
        </h1>
    )
}

export default RealTimeClock