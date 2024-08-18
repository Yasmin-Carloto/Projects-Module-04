# Extra Work One
Primeira atividade extra de fixação de conteúdo.
Os desafios inclusos nessa atividade são: 
1. Atualização de Título com useEffect
    - Objetivo: Atualizar o título da aba do navegador conforme o usuário interage com o componente.
    - Instruções:
        1. Crie um componente chamado TitleUpdater.
        2. Use useState para criar uma variável de estado number.
        3. Use useEffect para atualizar o título da aba do navegador toda vez que number mudar.
        4. Adicione botões para incrementar e decrementar number.

2. Monitoramento de Largura da Janela
    - Objetivo: Criar um componente que monitore e exiba a largura da janela do navegador, atualizando-se conforme a janela é redimensionada.
    - Instruções:
        1. Crie um componente chamado WindowSize.
        2. Utilize useState para armazenar a largura atual da janela.
        3. Utilize useEffect para adicionar e remover um event listener que atualiza o estado sempre que a janela é redimensionada.
        4. Exiba a largura atual da janela.

3. Sincronização de Estado com Local Storage
    - Objetivo: Sincronizar o estado de um componente com o Local Storage para manter dados entre as sessões do navegador.
    - Instruções:
        1. Crie um componente chamado PersistentCounter.
        2. Use useState para gerenciar o contador, inicializando-o com o valor do Local Storage, se disponível.
        3. Use useEffect para atualizar o Local Storage sempre que o contador mudar.
        4. Exiba o valor do contador e adicione botões para incrementar e decrementar.

4. Relógio em Tempo Real
    - Objetivo: Criar um relógio digital que atualiza a hora a cada segundo.
    - Instruções:
        1. Crie um componente chamado RealTimeClock.
        2. Utilize useState para armazenar a hora atual.
        3. Utilize useEffect para configurar um intervalo que atualiza a hora a cada segundo.
        4. Certifique-se de limpar o intervalo quando o componente for desmontado para evitar vazamentos de memória.

5. Exibir/Mostrar Texto
    - Objetivo: Criar um componente que alterna entre exibir e esconder um texto com o clique de um botão.
    - Instruções:
        1. Crie um componente chamado ToggleText.
        2. Use useState para gerenciar se o texto está visível ou não.
        3. Adicione um botão que alterne o estado de visibilidade do texto.
        4. Exiba o texto somente quando estiver visível.

6. Contador com Limite
    - Objetivo: Criar um contador que não ultrapasse um limite superior e que avise quando atingido.
    - Instruções:
        1. Crie um componente chamado LimitedCounter.
        2. Use useState para armazenar o valor do contador.
        3. Adicione botões para incrementar e decrementar o contador.
        4. Não permita que o contador ultrapasse o valor 10 e exiba uma mensagem quando o limite for atingido.

## Acessar
Está hospedado no Github Pages neste link: []()

## Tecnologias usadas no projeto
* React
* Tailwind

## Rodar o projeto em sua máquina

1. Coloque no terminal:
```
git clone https://github.com/Yasmin-Carloto/Projects-Module-04.git
```

2. Abrir com o VS CODE (ou IDE de preferência)

3. Digitar no terminal: 
```
cd ./extraWorkOne/lifeCycle
```

4. Digitar no terminal do diretório do projeto: 
```
npm run dev
```