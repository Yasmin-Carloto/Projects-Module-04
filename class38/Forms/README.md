# Projects for Class 38
Projetos da aula 38 incluem:
* Um Form de um campo somente, como exemplo para a manipulção do onChange de input e do onSubmit dos formulários
* Um Form que, de maneira simples, lida com erros do usuário para a submissão do formulário.
* O terceiro form é um desafio, proposto em aula que segue as seguintes regras: 
    * Objetivo: 
        * Desenvolver um formulário de registro de usuário que colete informações básicas, como nome, email, senha e confirmação de senha. O formulário deve validar os dados inseridos e exibir mensagens de erro apropriadas quando os dados não forem válidos.
    * Requisitos do desafio:
        * Estrutura do Formulário: 
            * Campo para Nome Completo (obrigatório)
            * Campo para Email (obrigatório e deve ser um email válido)
            * Campo para Senha (obrigatório e deve ter no mínimo 8 caracteres)
            * Campo para Confirmação de Senha (obrigatório e deve ser igual ao campo de senha)
            * Botão de submissão

        * Validações
            * Todos os campos são obrigatórios.
            * O email deve ter um formato válido (exemplo: usuario@dominio.com).
            * A senha deve ter no mínimo 8 caracteres.
            * A confirmação de senha deve ser idêntica a senha
        
        * Comportamento do Formulário
            * Exibir mensagens de erro abaixo dos campos que não passam validações.
            * Exibir uma mensagem de sucesso ao final do formulário quando todos os dados forem válidos e o formulário for submetido.

## Tecnologias usadas no projeto
* React
* Tailwindcss

## Rodar o projeto em sua máquina

1. Coloque no terminal:
```
git clone https://github.com/Yasmin-Carloto/Projects-Module-04.git
```

2. Abrir com o VS CODE (ou IDE de preferência)

3. Digitar no terminal: 
```
cd ./class38/Forms
```

4. Digitar no terminal do diretório do projeto: 
```
npm run dev
```