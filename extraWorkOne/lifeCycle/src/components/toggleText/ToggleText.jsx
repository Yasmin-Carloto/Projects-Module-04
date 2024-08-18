// Exercício 5: Exibir/Mostrar Texto

// Objetivo: Criar um componente que alterna entre exibir e esconder um texto com o clique de um botão.

// Instruções:
// Crie um componente chamado ToggleText.
// Use useState para gerenciar se o texto está visível ou não.
// Adicione um botão que alterne o estado de visibilidade do texto.
// Exiba o texto somente quando estiver visível.

import { useState } from "react";

function ToggleText() {
    const [seeText, setSeeText] = useState(true)

    return (
            seeText ? (
                <div className="text-center">
                    <h3>Você vê esse texto</h3>
                    <button 
                        className="bg-green-400 hover:bg-green-500 p-2 rounded-xl m-2"
                        onClick={() => setSeeText(!seeText)}
                    >
                        Esconder texto
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <button 
                        className="bg-green-400 hover:bg-green-500 p-2 rounded-xl m-2"
                        onClick={() => setSeeText(!seeText)}
                    >
                        Ver texto
                    </button>
                </div>
            )
    )
}

export default ToggleText