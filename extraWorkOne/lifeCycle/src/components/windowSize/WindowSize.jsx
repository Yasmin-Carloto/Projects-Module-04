// Exercício 2: Monitoramento de Largura da Janela

// Objetivo: Criar um componente que monitore e exiba a largura da janela do navegador, atualizando-se conforme a janela é redimensionada.

// Instruções:
// Crie um componente chamado WindowSize.
// Utilize useState para armazenar a largura atual da janela.
// Utilize useEffect para adicionar e remover um event listener que atualiza o estado sempre que a janela é redimensionada.
// Exiba a largura atual da janela.

import { useState, useEffect } from "react";

function WindowSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handlerResize = (event) => {
        event.preventDefault()
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)

        window.addEventListener('resize', handlerResize)

        return () => window.removeEventListener('resize', handlerResize)
    }, [])

    return (
        <h1 className="text-center p-6 text-xl text-orange-500 font-semibold">Largura atual da tela: {windowWidth}</h1>
    )
}

export default WindowSize