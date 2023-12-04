Feature:PCS_67_Historico de planos

História do usuário
Como usuário com permissão de gestão
preciso visualizar o histórico de cadastro e edições realizada pelo usuário com permissão de operador
para avaliar qual, quando e por quem o campo foi editado.

Critérios de aceite

Cenário 1
Dado que o usuário do portal de cadastro one data acessou a página de consulta de planos
Quando abrir a tabela com as informações requisitadas
Então o botão de histórico deverá ficar disponível para acessar.
    Scenario:PCS_67_cenario 1_Confirmação de campo histórico
        Given login
        When Acesso consulta de plano
        And Clico em Pesquisar
        And Acesso histórico do primeiro item da lista
        Then Valido e confirmo componente interno do Histórico de Planos 'Histórico de edição'

Cenário 2
Dado que foi realizado apenas o cadastro daquele plano requisitado para ver o histórico
Quando clicar no botão de histórico
Então o pop-up de histórico deverá conter apenas: ID do plano, Criado por, Data de criação.
    Scenario:PCS_67_cenario 2_Confirmação de campo histórico
        Given login
        When Acesso consulta de plano
        And Insiro CNPJ de plano para consulta'45.841.515/0001-52'
        And Clico em Pesquisar
        And Acesso histórico do primeiro item da lista
        Then Confirmo dados dos campos de ID, Criado por e Data de Criação Histórico

Cenário 3
Dado que foi realizado uma edição de um plano
Quando o usuário selecionar o botão de histórico
Então visualizará as últimas edição realizada com o nome do usuário, campo alterado com “de” e “para”, data da alteração.
    Scenario:PCS_67_cenario 3_Confirmação de campo histórico
        Given login
        When Acesso consulta de plano
        And Insiro CNPJ de plano para consulta'61.486.650/0001-83'
        And Clico em Pesquisar
        And Acesso histórico do primeiro item da lista
        And Confirmo existencia de campo Preenchido de "data"
        And Confirmo existencia de campo "Editado por"
        And Confirmo existencia de campo "Campo editado"
        And Confirmo existencia de campo "de"
        Then Confirmo existencia de campo "para"
Cenário 4
Dado que o usuário editou o status do plano
Quando clicar no botão de histórico
Então além dos dados de última edição, deverá aparecer em formato de tooltip a justificativa apresentada pelo usuário.