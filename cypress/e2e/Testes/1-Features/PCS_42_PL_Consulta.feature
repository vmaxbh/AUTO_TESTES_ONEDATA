Feature:PCS_42 Consulta de Planos
História do usuário 
Como usuário com permissão de visitante, operador ou gestão
preciso consultar os dados de planos já cadastrados
para avaliar o detalhamento da entidade


Critérios de aceitação

Cenário 1: 
Dado que o usuário irá pesquisar o plano de uma fonte pagadora
Quando escolher qual operadora ele deseja consultar e apertar “Pesquisar”
Então o sistema irá buscar as informações no banco de dados e irá retornar a lista de informações com os planos da operadora escolhida
    Scenário:PCS_42_cen 1_ Pesquisando plano por referencia "cnpj" campo "Fonte Pagadora ou CNPJ"
        Given login
        And Acesso Consulta Planos
        And Insiro CNPJ "84.415.043/0001-28" no Campo Fonte pagadora ou CNPJ
        And Seleciono o Plano
        And Clico em pesquisar
        Then Validado que todos os valores na coluna Fonte Pagadore são iguais a "TODAS AS VARIAVEIS - 84.415.043/0001-28"

    
Cenário 2: 
Dado que o usuário irá pesquisar os planos por status
Quando escolher qual status ele deseja consultar e apertar “Pesquisar”
Então o sistema irá buscar as informações no banco de dados e irá retornar a lista de informações com os planos com o status escolhido
     Scenário:PCS_42_cen 2_ Pesquisando plano por referencia de Status "ATIVO" 
        Given login
        And Acesso Consulta Planos
        And Clico campo Status
        And Seleciono Status ATIVO
        And Clico em pesquisar
        Then Validado que todos os valores na coluna Status são iguais a "ATIVO" 
     Scenário:PCS_42_cen 2_ Pesquisando plano por referencia de Status "INATIVO"
        Given login
        And Acesso Consulta Planos
        And Clico campo Status
        And Seleciono Status INATIVO
        And Clico em pesquisar
        Then Validado que todos os valores na coluna Status são iguais a "INATIVO"
     Scenário:PCS_42_cen 2_ Pesquisando plano por referencia de Status "SUSPENSO"
        Given login
        And Acesso Consulta Planos
        And Clico campo Status
        And Seleciono Status SUSPENSO
        And Clico em pesquisar
        Then Validado que todos os valores na coluna Status são iguais a "SUSPENSO"

Cenário 3: 
Dado que o usuário irá pesquisar o nome do plano
Quando preencher com a informação de busca e apertar “Pesquisar”
Então o sistema irá buscar as informações no banco de dados e irá retornar quais planos tem as informações preenchidas
    Scenário:PCS_42_cen 3_ Pesquisando plano por referencia nome do Plano campo "Fonte Pagadora ou CNPJ"
        Given login
        And Acesso Consulta Planos
        And Insiro nome do Plano  "TODAS AS VARIAVEIS" no Campo Fonte pagadora ou CNPJ
        And Seleciono o Plano
        And Clico em pesquisar
        Then Validado que todos os valores na coluna Fonte Pagadore são iguais a "TODAS AS VARIAVEIS - 84.415.043/0001-28"

Cenário 4:  
Dado que o usuário irá pesquisar um plano 
Quando selecionar mais de um parâmetro de filtro e apertar “Pesquisar”
Então o sistema irá buscar as informações no banco de dados e irá retornar considerando todos os filtros selecionados
   Scenário:PCS_42_cen 4 Filtro Multiplos Status ATIVO e SUSPENSO
      Given login
      And Acesso Consulta Planos
      And Clico campo Status
      And Seleciono Status ATIVO
      And Seleciono Status SUSPENSO
      And Clico em pesquisar
      Then Validado que todos os valores na coluna Status são iguais a "ATIVO e SUSPENSO"

   Scenário:PCS_42_cen 4 Filtro Multiplos Status INATIVO e SUSPENSO
      Given login
      And Acesso Consulta Planos
      And Clico campo Status
      And Seleciono Status INATIVO
      And Seleciono Status SUSPENSO
      And Clico em pesquisar
      Then Validado que todos os valores na coluna Status são iguais a "INATIVO e SUSPENSO"   

   Scenário:PCS_42_cen 4 Filtro Multiplos Status ATIVO e INATIVO
      Given login
      And Acesso Consulta Planos
      And Clico campo Status
      And Seleciono Status ATIVO
      And Seleciono Status INATIVO
      And Clico em pesquisar
      Then Validado que todos os valores na coluna Status são iguais a "ATIVO e INATIVO"   
   
    Scenário:PCS_42_cen 4 Filtro Multiplos Status "SELECIONAR TUDO"
      Given login
      And Acesso Consulta Planos
      And Clico campo Status
      And Seleciono Status SELECIONAR TUDO
      And Clico em pesquisar
      Then Validado que todos os valores na coluna Status são iguais a "ATIVO, INATIVO e SUSPENSO" 
Cenário 5: 
Dado que o usuário selecionou o tipo de consulta “Planos”
Quando ele clicar no botão de pesquisar sem realizar os demais filtros
Então retornará todos os dados relacionados a planos existentes na base de dados
   Scenário:PCS_42_cen 5 Pesquisa Geral após botão pesquisar
      Given login
      And Acesso Consulta Planos
      And Clico em pesquisar
      Then Validado que todos os valores na coluna Status são iguais a "ATIVO, INATIVO e SUSPENSO"
Cenário 6:
Dado que o usuário realizará uma pesquisa de dados do plano
Quando ele clicar no botão limpar
Então limpará todos os dados relacionados a planos existentes na base de dados com exceção do tipo de consulta
    Scenário:PCS_42_cen 6 após pesquisa função Limpar'
      Given login
      And Acesso Consulta Planos
      And Clico em pesquisar
      And Validado que todos os valores na coluna Status são iguais a "ATIVO, INATIVO e SUSPENSO"
      And Clico botão Limpar
      Then valido dados limpos da tabela 