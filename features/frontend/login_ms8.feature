#language: pt

Funcionalidade: Login Simples


Contexto: 
        Dado que acesso a URL do MS8
    
    Cenario: acesso a tela de login
        Quando sou redirecionado para tela de login do sistema
        Então vejo os campos para realização de meu credenciamento
        E links para as telas de recuperação de senha e primeiro acesso


    Cenario: mensagem de alerta para credencias inválidas
        Quando informo credencias inválidas
        Então vejo na tela a mensagem <Usuário ou senha inválidos>


    Cenario: mensagem de alerta para credencias não preenchidas
        Quando não informo credencias
        Então vejo no campo a mensagem <O campo é obrigatório>
