Feature:PCS_79_ref_PCS_32-Feature de Edição da Fonte Pagadora'
Documentar todas as regras de negócio para que a feature de edição da fonte pagadora 
seja entregue cumprindo as necessidades pré determinadas.
História do usuário 

Como usuário com permissão de operador ou gestão
preciso editar os dados de fontes pagadoras já cadastradas
para ajustar informações da entidade

Regras de negócio
Na tela de consulta, terá um ícone de edição em cada linha que se refere a fonte pagadora;
Após o usuário clicar no ícone de edição o sistema deverá abrir a página de cadastro com as informações da fonte pagadora selecionada para edição;
O usuário poderá editar a informação necessária e clicar em “Salvar” e irá ter um pop-up com as informações.
Salvar alterações: tem certeza que deseja alterar o [nome do campo editado] da fonte pagadora? 
Após salvar, o sistema deverá salvar os dados editados no banco de dados.
Alerta: “Edição feita com sucesso!”

Regras funcionais
As regras dos campos de edição devem seguir o mesmo modelo do campo de cadastro de nova fonte pagadora
Caso o usuário altere o status da fonte pagadora, assim que clicar em “Salvar” deverá abrir um pop-up obrigatório com a “Justificativa de mudança de status” de 
50 caracteres para o usuário justificar a mudança de status.
Depois do usuário clicar em “Continuar” o sistema irá mostrar o pop-up de “Salvar alterações” para confirmar a ação do usuário.

    Cenário 1:
    Dado que a história de consulta já esteja criada
    Quando o usuário finalizar a edição
    Então o sistema deverá confirmar com o usuário quais campos estão sendo alterados antes de salvar o novo dado
    Alerta: tela de aviso sobre a alteração
    
        Scenario 1:PCS_32-Cenário 1-O sistema deverá confirmar com o usuário quais campos estão sendo alterados antes de salvar o novo dado
            When Given Faço Login OndeData
            And Acesso Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Fonte pagaddora "Operadora"
            And Seleciono Status "Ativo"
            And Digito Cnpj ou Razão Social "xxxxxxxxx"
            And Clico em "Pesquisar"
            And Clico botão "Editar"
            And Altero Status "Ativo" para "Inativo"
            Then Confirmo mensagem de alteração

    Cenário 2:
    Dado que o usuário altere o status da fonte pagadora
    Quando o usuário clicar em Salvar
    Então o sistema deverá mostrar o pop-up com campo obrigatório “Justificativa de mudança de status”    


        Scenario 2:PCS_32-Cenário 2-Na alteração de Status da FP, o sistema deverá mostrar o pop-up com campo obrigatório “Justificativa de mudança de status”
            When Given Faço Login OndeData
            And Acesso Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Fonte pagadora "Operadora"
            And Seleciono Status "Ativo"
            And Digito Cnpj ou Razão Social "xxxxxxxxx"
            And Clico em "Pesquisar"
            And Clico botão "Editar"
            And Altero Status "Ativo" para "Inativo"
            And Confirmo mensagem de alteração
            And Clico em Salvar
            Then Confirmo Pop-up campo "Justificativa de mudança de status"

    Cenário 3:
    Dado que a história de consulta já esteja criada
    Quando o usuário salvar a edição realizada
    Então o sistema deverá mostrar um alerta “Edição feita com sucesso!”    


        Scenario 3:PCS_32-Cenário 3-Após Salvar Edição o sistema deverá mostrar um alerta “Edição feita com sucesso!”
            When Given Faço Login OndeData
            And Acesso Consultar cadastrados
            And Seleciono tipo de consulta "Fonte Pagadora"
            And Seleciono tipo de Fonte pagaddora "Operadora"
            And Seleciono Status "Ativo"
            And Digito Cnpj ou Razão Social "xxxxxxxxx"
            And Clico em "Pesquisar"
            And Clico botão "Editar"
            And Altero Status "Ativo" para "Inativo"
            And Confirmo mensagem de alteração
            And Clico em Salvar
            And Confirmo Pop-up campo "Justificativa de mudança de status"
            And Escrever justificativa "Justificativa teste no campo de Justificativa"
            And Clicar no botão "Continuar"
            And Confirmar pop-up "Salvar alterações"
            And Clicar em "Salvar"
            Then Confirmar Mensagem “Edição feita com sucesso!”


