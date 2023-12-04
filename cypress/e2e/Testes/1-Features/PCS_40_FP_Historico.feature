Feature:PCS_81_ref_PCS_40-Histórico de cadastro
História do usuário
Como usuário com permissão de gestão
preciso visualizar o histórico de cadastro e edições realizada pelo usuário com permissão de operador
para avaliar qual, quando e por quem o campo foi editado.

Cenário 1
Dado que o usuário com permissão de gestão realizou uma consulta referente a fonte pagadora
Quando clicar no botão de histórico
Então o sistema deverá retornar informações de quem e quando com data e horário do cadastro realizado

    Scenario:PCS_40-Cenário 1-Histórico de quem e quando com data e horário cadastro realizado
        Given Login efetuado
        When clico em consultar cadastros
        And No tipo de consulta escolho "Fonte Pagadora"
        And Escolho o tipo de Fonte pagadora "Parceria"
        And Digito o CNPJ no campo "CNPJ ou Razão Social"
        And Clico em Pesquisar
        And Clico no botão histórico
        And Confirmo dados de usuário que cadastrou 
        Then Confirmo a data que foi cadastrado


Cenário 2 
Dado que foi realizado uma edição de uma fonte pagadora
Quando o usuário com permissão de acesso gestão acessar o histórico de edição dessa fonte pagadora
Então visualizará a última edição realizada com o nome do usuário, dado alterado, o dia e horário de alteração

Cenário 3
Dado que o dado da fonte pagadora foi cadastrado e depois realizado uma edição
Quando o usuário com permissão de acesso gestão acessar o histórico da fonte pagadora
Então visualizará as informações de quem e quando com data e horário do cadastro realizado e a última edição realizada 
com o nome do usuário, dado alterado com de → para , o dia e horário de alteração.

    Scenario:PCS_40-Cenário 2 e 3-Histórico de quem e quando, com data e horário, de → para de edição do cadastro realizado
    
        Given Login efetuado
        When clico em consultar cadastros
        And No tipo de consulta escolho "Fonte Pagadora"
        And Escolho o tipo de Fonte pagadora "Parceria"
        And Digito o CNPJ no campo "CNPJ ou Razão Social"
        And Clico em Pesquisar
        And Clico no botão histórico
        And Confirmo dados de usuário que editou 
        Then Confirmo a data que foi editado
        And Confirmo o campo que foi Editado 
        And Confirmo o de => para

