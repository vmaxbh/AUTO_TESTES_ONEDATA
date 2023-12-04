Feature:PCS_80_ref_PCS_33-Consulta -Fontes Pagadoras
História do usuário 
Como usuário com permissão de visitante, operador ou gestão
preciso consultar os dados de fontes pagadoras já cadastradas
para avaliar o detalhamento da entidade de fonte pagadora
Regras de negócio
Na tela inicial o usuário deverá escolher qual entidade ele quer fazer a consulta pelo “Tipo de consulta”;
Na tela de consulta deverá ter os 3 campos de busca para que o usuário realize o filtro necessário:

    Cenário 1: Tipo de fonte pagadora
    Dado que o usuário queira pesquisar o tipo de fonte pagadora
    Quando o usuário escolher qual tipo de fonte pagadora ele deseja consultar e apertar “Pesquisar”
    Então o sistema irá buscar as informações no banco de dados e irá retornar a lista de informações com 
    o tipo de fonte escolhida

        Scenario:PCS_33-Cenário-1 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-01-operadora-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Fonte pagaddora "Operadora"
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-01-operadora-02'
            And Confirmo Campos da coluna Tipo
            And captura de tela 'pcs-33-cen-01-operadora-03'
            Then captura de tela 'pcs-33-cen-01-operadora-04'

        Scenario:PCS_33-Cenário-1 Retorno Bd para front de lista de informações com o tipo de fonte "Parceira"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-01-parceria-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Fonte pagaddora "Parceria"
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-01-parceria-02'
            And Confirmo Campos da coluna Tipo
            And captura de tela 'pcs-33-cen-01-parceria-03'
            Then captura de tela 'pcs-33-cen-01-parceria-04'

        Scenario:PCS_33-Cenário-1 Retorno Bd para front de lista de informações com o tipo de fonte "Particular"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-01-particular-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Fonte pagaddora "particular"
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-01-particular-02'
            And Confirmo Campos da coluna Tipo
            And captura de tela 'pcs-33-cen-01-particular-03'
            Then captura de tela 'pcs-33-cen-01-particular-04'

        Scenario:PCS_33-Cenário-1 Retorno Bd para front de lista de informações com o tipo de fonte "Pesquisa Clinica"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-01-Pesquisa Clinica-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Fonte pagaddora "Pesquisa Clinica"
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-01-Pesquisa Clinica-02'
            And Confirmo Campos da coluna Tipo
            And captura de tela 'pcs-33-cen-01-Pesquisa Clinica-03'
            Then captura de tela 'pcs-33-cen-01-Pesquisa Clinica-04'
            

        Scenario:PCS_33-Cenário-1 Retorno Bd para front de lista de informações com o tipo de fonte "Selecionar Todos"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-01-sel_todos-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Fonte pagaddora "Selecionar todos"
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-01-sel_todos-02'
            And Confirmo Campos da coluna Tipo
            And captura de tela 'pcs-33-cen-01-sel_todos-03'
            Then captura de tela 'pcs-33-cen-01-sel_todos-04'


    Cenário 2: Status
    Dado que o usuário queira pesquisar o status
    Quando o usuário escolher qual status ele deseja consultar e apertar “Pesquisar”
    Então o sistema irá buscar as informações no banco de dados e irá retornar a lista de 
    informações com as fontes com o status escolhido

        Scenario:PCS_33-Cenário-2 Retorno Bd para front lista de informações com o "status" "ativo" da Fonte Pagadora 
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-02-ativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Status "Ativo"
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-02-ativo-02'
            And Confirmo Campos da coluna Status
            And captura de tela 'pcs-33-cen-02-ativo-03'
            Then captura de tela 'pcs-33-cen-02-ativo-04'

        Scenario:PCS_33-Cenário-2 Retorno Bd para front lista de informações com o "status" "Inativo" da Fonte Pagadora 
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-02-inativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Status "Inativo"
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-02-inativo-02'
            And Confirmo Campos da coluna Status
            And captura de tela 'pcs-33-cen-02-inativo-03'
            Then captura de tela 'pcs-33-cen-02-inativo-04'


        Scenario:PCS_33-Cenário-2 Retorno Bd para front lista de informações com o "status" "Suspenso" da Fonte Pagadora 
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-02-suspenso-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Status "Suspenso"
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-02-suspenso-02'
            And Confirmo Campos da coluna Status
            And captura de tela 'pcs-33-cen-02-suspenso-03'
            Then captura de tela 'pcs-33-cen-02-suspenso-04'
            

        Scenario:PCS_33-Cenário-2 Retorno Bd para front lista de informações com o "status" "Selecionar Todos" da Fonte Pagadora 
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-02-sel_todos-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Status "Selecionar Todos"
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-02-sel_todos-02'
            And Confirmo Campos da coluna Status
            And captura de tela 'pcs-33-cen-02-sel_todos-03'
            Then captura de tela 'pcs-33-cen-02-sel_todos-04'    


    Cenário 3:PCS_33-CNPJ e Razão Social
    Dado que o usuário queira pesquisar o CNPJ ou Razão social
    Quando o usuário preencher com a informação de busca e apertar “Pesquisar”
    Então o sistema irá buscar as informações no banco de dados e irá retornar qual fonte pagadora 
    tem as informações preenchidas.


        Scenario:PCS_33-Cenário-3 Retorno Bd para front lista de informações com o "cnpj" da Fonte Pagadora
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-03-cnpj-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Digito o CNPJ '21.882.696/5423-13' no campo de pesquisa
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-03-cnpj-02'
            And Confirmo Campos da coluna CNPJ ou Razao Solcial
            And captura de tela 'pcs-33-cen-03-cnpj-03'
            Then captura de tela 'pcs-33-cen-03-cnpj-04'
            


        Scenario:PCS_33-Cenário-3 Retorno Bd para front lista de informações com o "Razão Social" da Fonte Pagadora
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-03-raz_social-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Digito a Razao Social 'ARIEL ESPORTES EIRELI' no campo de pesquisa
            And Clico em "Pesquisar"
            And captura de tela 'pcs-33-cen-03-raz_social-02'
            And Confirmo Campos da coluna CNPJ ou Razao Solcial
            And captura de tela 'pcs-33-cen-03-raz_social-03'
            Then captura de tela 'pcs-33-cen-03-raz_social-04'



    Cenário 4: Dois parâmetros
    Dado que o usuário queira pesquisar mais de um parâmetro
    Quando o usuário selecionar mais de um parâmetro de busca e apertar “Pesquisar”
    Então o sistema irá buscar as informações no banco de dados e irá retornar com os dois parâmetros aplicados

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e status "Ativo"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-oper_ativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "operadora"
            And Seleciono Status "Ativo"
            And captura de tela 'pcs-33-cen-04-oper_ativo-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-oper_ativo-03'
            Then captura de tela 'pcs-33-cen-04-oper_ativo-04' 

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e status "Inativo"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-oper_inativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "operadora"
            And Seleciono Status "Inativo"
            And captura de tela 'pcs-33-cen-04-oper_inativo-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-oper_inativo-03'
            Then captura de tela 'pcs-33-cen-04-oper_inativo-04' 

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e status "Suspenso"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-oper_suspenso-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "operadora"
            And Seleciono Status "Suspenso"
            And captura de tela 'pcs-33-cen-04-oper_suspenso-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-oper_suspenso-03'
            Then captura de tela 'pcs-33-cen-04-oper_suspenso-04'


        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Particular" e status "Ativo"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-part_ativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Particular"
            And Seleciono Status "Ativo"
            And captura de tela 'pcs-33-cen-04-part_ativo-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-part_ativo-03'
            Then captura de tela 'pcs-33-cen-04-part_ativo-04'

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Particular" e status "Inativo"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-part_inativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Particular"
            And Seleciono Status "Inativo"
            And captura de tela 'pcs-33-cen-04-part_inativo-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-part_inativo-03'
            Then captura de tela 'pcs-33-cen-04-part_inativo-04'
            

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Particular" e status "Suspenso"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-part_suspenso-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Particular"
            And Seleciono Status "Suspenso"
            And captura de tela 'pcs-33-cen-04-part_suspenso-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-part_suspenso-03'
            Then captura de tela 'pcs-33-cen-04-part_suspenso-04'
            


        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Parceria" e status "Ativo"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-parcer_ativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Parceria"
            And Seleciono Status "Ativo"
            And captura de tela 'pcs-33-cen-04-parcer_ativo-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-parcer_ativo-03'
            Then captura de tela 'pcs-33-cen-04-parcer_ativo-04'
            

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Parceria" e status "Inativo"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-parcer_inativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Parceria"
            And Seleciono Status "Inativo"
            And captura de tela 'pcs-33-cen-04-parcer_inativo-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-parcer_inativo-03'
            Then captura de tela 'pcs-33-cen-04-parcer_inativo-04'

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Parceria" e status "Suspenso"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-parcer_suspenso-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Parceria"
            And Seleciono Status "Suspenso"
            And captura de tela 'pcs-33-cen-04-parcer_suspenso-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-parcer_suspenso-03'
            Then captura de tela 'pcs-33-cen-04-parcer_suspenso-04'
            

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Pesquisa Clínica" e status "Ativo"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-pesqui-clin-ativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Pesquisa Clínica"
            And Seleciono Status "Ativo"
            And captura de tela 'pcs-33-cen-04-pesqui-clin-ativo-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-pesqui-clin-ativo-03'
            Then captura de tela 'pcs-33-cen-04-pesqui-clin-ativo-04'
            

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Pesquisa Clínica" e status "Inativo"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-pesqui-clin-inativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Pesquisa Clínica"
            And Seleciono Status "Inativo"
            And captura de tela 'pcs-33-cen-04-pesqui-clin-inativo-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-pesqui-clin-inativo-03'
            Then captura de tela 'pcs-33-cen-04-pesqui-clin-inativo-04'
           

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Pesquisa Clínica" e status "Suspenso"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-pesqui-clin-suspenso-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Pesquisa Clínica"
            And Seleciono Status "Suspenso"
            And captura de tela 'pcs-33-cen-04-pesqui-clin-suspenso-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fonte pagadora e status nas respectivas colunas
            And captura de tela 'pcs-33-cen-04-pesqui-clin-suspenso-03'
            Then captura de tela 'pcs-33-cen-04-pesqui-clin-suspenso-04'
            
    
        
        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e "Parceria"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-oper_parceria-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Operadora"
             And Seleciono tipo de fonte pagadora "Parceria"
            And captura de tela 'pcs-33-cen-04-oper_parceria-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fontes pagadoras na respectiva coluna
            And captura de tela 'pcs-33-cen-04-oper_parceria-03'
            Then captura de tela 'pcs-33-cen-04-oper_parceria-04'

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e "Pesquisa Clínica"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-oper_pesq-clinica-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Operadora"
             And Seleciono tipo de fonte pagadora "Pesquisa Clínica"
            And captura de tela 'pcs-33-cen-04-oper_pesq-clinica-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fontes pagadoras na respectiva coluna
            And captura de tela 'pcs-33-cen-04-oper_pesq-clinica-03'
            Then captura de tela 'pcs-33-cen-04-oper_pesq-clinica-04'

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e "Particular"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-oper_particular-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Operadora"
            And Seleciono tipo de fonte pagadora "Particular"
            And captura de tela 'pcs-33-cen-04-oper_particular-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fontes pagadoras na respectiva coluna
            And captura de tela 'pcs-33-cen-04-oper_particular-03'
            Then captura de tela 'pcs-33-cen-04-oper_particular-04'

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Parceria" e "Pesquisa Clínica"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-parceria_pesq-clinica-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Parceria"
            And Seleciono tipo de fonte pagadora "Pesquisa Clínica"
            And captura de tela 'pcs-33-cen-04-parceria_pesq-clinica-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fontes pagadoras na respectiva coluna
            And captura de tela 'pcs-33-cen-04-parceria_pesq-clinica-03'
            Then captura de tela 'pcs-33-cen-04-parceria_pesq-clinica-04'

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Parceria" e "Particular"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-parceria_particular-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Parceria"
            And Seleciono tipo de fonte pagadora "Particular"
            And captura de tela 'pcs-33-cen-04-parceria_particular-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fontes pagadoras na respectiva coluna
            And captura de tela 'pcs-33-cen-04-parceria_particular-03'
            Then captura de tela 'pcs-33-cen-04-parceria_particular-04'

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Pesquisa Clínica" e "Particular"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-particular_pesq-clinica-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Pesquisa Clínica"
            And Seleciono tipo de fonte pagadora "Particular"
            And captura de tela 'pcs-33-cen-04-particular_pesq-clinica-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fontes pagadoras na respectiva coluna
            And captura de tela 'pcs-33-cen-04-particular_pesq-clinica-03'
            Then captura de tela 'pcs-33-cen-04-particular_pesq-clinica-04'

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o Status "Ativo" e "Inativo"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-ativo e inativo-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Ativo"
            And Seleciono tipo de fonte pagadora "Inativo"
            And captura de tela 'pcs-33-cen-04-ativo e inativo-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fontes pagadoras na respectiva coluna
            And captura de tela 'pcs-33-cen-04-ativo e inativo-03'
            Then captura de tela 'pcs-33-cen-04-ativo e inativo-04' 

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o Status "Ativo" e "Suspenso"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-ativo e suspenso-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Ativo"
            And Seleciono tipo de fonte pagadora "Susenso"
            And captura de tela 'pcs-33-cen-04-ativo e suspenso-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fontes pagadoras na respectiva coluna
            And captura de tela 'pcs-33-cen-04-ativo e suspenso-03'
            Then captura de tela 'pcs-33-cen-04-ativo e suspenso-04'  

        Scenario:PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o Status "Inativo" e "Suspenso"
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-04-inativo e suspenso-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de fonte pagadora "Inativo"
            And Seleciono tipo de fonte pagadora "Susenso"
            And captura de tela 'pcs-33-cen-04-inativo e suspenso-02'
            And Clico em "Pesquisar"
            And Confirmo Tipo de fontes pagadoras na respectiva coluna
            And captura de tela 'pcs-33-cen-04-inativo e suspenso-03'
            Then captura de tela 'pcs-33-cen-04-inativo e suspenso-04'      

   
    Cenário 5: Sem filtro
    Dado que o usuário selecionou o tipo de consulta “Fonte pagadora”
    Quando ele clicar no botão de pesquisar sem realizar os demais filtros
    Então retornará todos os dados relacionados a fontes pagadoras existentes na base de dados

        Scenario:PCS_33-Cenário 5 Sem filtro 
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-05-Retornar fontes pagadoras do banco-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Clico em pesquisar
            And captura de tela 'pcs-33-cen-05-Retornar fontes pagadoras do banco-02'
            And Confirmo tabela na interface com todos os tipos de Fontes pagadoras do Bd
            And Confirmo tabela na interface com todos os tipos de Status do Bd
            And captura de tela 'pcs-33-cen-05-Retornar fontes pagadoras do banco-03'
            Then captura de tela 'pcs-33-cen-05-Retornar fontes pagadoras do banco-04'
            



    Cenário 6: Limpar
    Dado que o usuário realizará uma pesquisa de dados da fonte pagadora
    Quando ele clicar no botão limpar
    Então limpará todos os dados relacionados a fontes pagadoras existentes na base de dados com exceção do tipo de consulta

        Scenario:PCS_33-Cenário-6 Função de limpar campos pesquisados 
            Given Faço Login OndeData
            When Acesso página inicial
            And captura de tela 'pcs-33-cen-06-Confirma atividade de limpar pesquisa-01'
            And Clico Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Clico em pesquisar
            And captura de tela 'pcs-33-cen-06-Confirma atividade de limpar pesquisa-02'
            And Confirmo tabela na interface com todos os tipos de Fontes pagadoras do Bd
            And Confirmo tabela na interface com todos os tipos de Status do Bd
            And Clico no botão Limpar
            And Confirmo mensagemna tela limpa "Selecione um ou mais tipo de fonte pagadora para poder carregar os resultados ou faça uma busca."
            And captura de tela 'pcs-33-cen-06-Confirma atividade de limpar pesquisa-03'
            Then captura de tela 'pcs-33-cen-06-Confirma atividade de limpar pesquisa-04'
            
        


    