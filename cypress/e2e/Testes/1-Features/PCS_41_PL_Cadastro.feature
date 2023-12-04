Feature: PCS_41 Cadastro de Plano 

História do usuário
Como: usuário com permissão de operador ou gestão
Preciso criar um cadastro de planos no ecossistema Dasa
Para garantir que as informações desses planos sejam consumidas pelas ferramentas de contato com os pacientes Dasa.


Critérios de aceitação
Cenário 1:
Dado que as variáveis estão selecionadas no cadastro da fonte pagadora
Quando realizar a busca de fonte pagadora para o cadastro de um plano
Então retornará as variáveis necessárias e obrigatórias para o cadastro do plano.
    Scenario:PCS_41_cen1_Validação das variáveis necessárias e obrigatórias para o cadastro do plano.
        Given Login
        When Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:28.458.591/0001-64'
        And Seleciono a Fonte Pagadora com base no CNPJ inserido
        And Confirmo Campo de preenchimento "Plano" Existente no cadastro de Planos
        And Confirmo Campo de preenchimento "Produtos" Existente no cadastro de Planos
        Given Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:47.805.459/0001-26'
        And Seleciono a Fonte Pagadora com base no CNPJ inserido
        And Confirmo Campo de preenchimento "Plano" Existente no cadastro de Planos
        And Confirmo Campo de preenchimento "Produtos" Existente no cadastro de Planos
        Given Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:29.664.939/0001-32'
        And Seleciono a Fonte Pagadora com base no CNPJ inserido
        And Confirmo Campo de preenchimento "Plano" Existente no cadastro de Planos
        And Confirmo Campo de preenchimento "Produtos" Existente no cadastro de Planos
        Given Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:58.472.913/0001-90'
        And Seleciono a Fonte Pagadora com base no CNPJ inserido
        And Confirmo Campo variáveis "Todos" Existente no cadastro de Planos
        

Cenário 2:
Dado que a fonte pagadora selecionada é do tipo “operadora”
Quando o usuário seleciona-lá 
Então o sistema deverá aparecer os campos de acordo com a seleção e ordenamento no 
“Gerenciamento de variáveis” no cadastro da fonte pagadora selecionada e os campos de Código ANS e Plano ANS.
    Scenario:PCS_41_cen2_Validação Ordenação de variáveis e campos "Código ANS e Plano ANS" 
        Given Login
        When Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:87.176.534/0001-51'
        And Seleciono a Fonte Pagadora com base no CNPJ inserido
        And Confirmo Campo de preenchimento "Rede de atendimento" Escolha 1 cadastro fonte pagadora
        And Confirmo Campo de preenchimento "Código identificador" Escolha 2 cadastro fonte pagadora
        And Confirmo Campo de preenchimento "Abrangência" Escolha 3 cadastro fonte pagadora
        And Confirmo Campo "Código ANS" existente no cadastro de Plano Operadora
        And Confirmo Campo "Plano ANS" existente no cadastro de Plano Operadora
        Then Confirmo e digito no campo de Observações 
Cenário 3: 
Dado que o usuário preencha o campo de fonte pagadora
Quando o usuário selecionar “Particular” ou “Parceria” ou “Pesquisa clínica”
Então o sistema deverá mostrar apenas os campos:  “Descrição”, “Status” e “Observações”
    Scenario:PCS_41_cen3_Validação de campos "Descrição, Status e Observações" Cadastro de Planos base FP Parceria, Particular e Pesquisa Clínica
        Given Login
        When Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:45.841.515/0001-52'
        And Seleciono a Fonte Pagadora com base no CNPJ inserido
        And Confirmo Campo de preenchimento "Descrição" Escolha 1 cadastro fonte pagadora
        And Confirmo Campo de preenchimento "Status" Escolha 2 cadastro fonte pagadora
        And Confirmo Campo de preenchimento "Observações" Escolha 3 cadastro fonte pagadora
        And Acesso campo de novo cadastro
        And Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:91.012.121/0001-09'
        And Seleciono a Fonte Pagadora com base no CNPJ inserido
        And Confirmo Campo de preenchimento "Descrição" Escolha 1 cadastro fonte pagadora
        And Confirmo Campo de preenchimento "Status" Escolha 2 cadastro fonte pagadora
        And Confirmo Campo de preenchimento "Observações" Escolha 3 cadastro fonte pagadora
        And Acesso campo de novo cadastro
        And Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:86.179.196/0001-49'
        And Seleciono a Fonte Pagadora com base no CNPJ inserido
        And Confirmo Campo de preenchimento "Descrição" Escolha 1 cadastro fonte pagadora
        And Confirmo Campo de preenchimento "Status" Escolha 2 cadastro fonte pagadora
        And Confirmo Campo de preenchimento "Observações" Escolha 3 cadastro fonte pagadora
        
Cenário 4: 
Dado que o usuário preencheu as variáveis do plano para a operadora selecionada
Quando visualizar o campo “Nome do plano”
Então deverá visualizar uma concatenação, na ordem de preenchimento das variáveis, separando as variáveis por hífen. 
     Scenario:PCS_41_cen4_Validação de campos Concatenados separados por hífen 
        Given Login
        When Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:18.194.873/0001-48'
        And Seleciono a Fonte Pagadora com base no CNPJ inserido
        And Digito no campo variável Plano "BÀSICO 2"
        And Digito no campo produto "123"
        Then Confirmo "BÁSICO 2 - 123" no campo "Nome do PLano"
Cenário 5: 
Dado que o usuário preencheu as variáveis obrigatórias para o plano
Quando for realizar o salvamento das informações 
Então precisará validar que não existe um cadastro que compõe TODAS as variáveis informadas
Cenário 6:
Dado que o sistema identificou um cadastro com as mesmas informações de variáveis no banco de dados
Quando o usuário tentar realizar o salvamento da informações
Então deverá abrir um pop-up identificando que o plano está duplicado e que não será possível prosseguir com a ação.
Cenário 7:
Dado que o usuário está realizando o novo cadastro de um plano
Quando preencher os campos “Plano”, “Rede de atendimento” e/ou “Descrição”
Então o sistema deve aplicar uma máscara para deixar todo o texto em caixa alta
     Scenario:PCS_41_cen 5, 6  e 7 Validação de popup de erro ao cadastrar Plano com mesmo conteúdo de variáveis
        Given Login
        When Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:84.415.043/0001-28'
        And Inclusão de dados campo "Produto
        And Inclusão de dados campo "Rede de Atendimento
        And Inclusão de dados campo "Codigo Identificador
        And Inclusão de dados campo "Plano"
        And Inclusão Campo Tabela Prestador
        And Inclusão Campo Tipo de Acomodação
        And Inclusão Campo Tipo de Contrato
        And Inclusão Campo Abrangência
        And Inclusão Campo Segmentação Assistencial
        And Selecionando Opção "SEM MENÇÂO"
        And Clicando no botão Salvar
        Then Confirmação de Popup de erro
Cenário 8:
Dado que o usuário não preencheu todos os campos obrigatórios
Quando clicar no botão “Salvar”
Então os campos obrigatórios deverão estar sinalizados indicando ao usuário o que falta preenchimento
Cenário 9: 
Dado que os campos para planos são obrigatórios de acordo com as variáveis 
Quando passar pelo campo obrigatório sem o seu preenchimento
Então abaixo do campo deverá aparecer um alerta em vermelho “Preenchimento obrigatório”
    Scenario:PCS_41_cen 8 e 9 Validação de Campos Obrigatórios  Cadastro de Planos 
        Given Login
        When Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:84.415.043/0001-28'
        And Clicando no botão Salvar
        And Confirmando campo obrigatório "Produto"
        And Confirmando campo obrigatório "Rede de Atendimento
        And Confirmando campo obrigatório "Tabela Prestador"
        And Confirmando campo obrigatório "Tipo de Acomodação"
        And Confirmando campo obrigatório "Tipo de Contrato"
        And Confirmando campo obrigatório "Código Identificador"
        And Confirmando campo obrigatório "Plano"
        And Confirmando campo obrigatório "Abrangência"
        Then Confirmando campo obrigatório "Segmentação Assistencial"
       
Cenário 10:
Dado que a operadora não tenha a parametrização de variáveis no cadastro de nova fonte pagadora
Quando o usuário selecionar a fonte pagadora em que irá cadastrar novo plano
Então o sistema não deixará o usuário seguir com o cadastro e deverá retornar o alerta “As variáveis dessa operadora não foram selecionadas. Edite o cadastro dessa fonte pagadora para adicionar suas variáveis”
    Scenário:Suspenso pela Obrigatoriedade de cadastro de ao menos uma variável no cadastro de Fonte Pagadora


Cenário 11:
Dado que o usuário irá realizar o cadastro de um novo plano
Quando o campo a ser preenchido for “Rede de atendimento”, “Descrição” e/ou “Plano”
Então o sistema deverá ter um autocomplete para mostrar para o usuário os dados com os mesmos caracteres que estão salvos no banco para a fonte pagadora selecionada
Eleonora sugeriu para esse cenário ser criado um card de melhoria.

Cenário 12:
Dado que o plano a ser cadastrado não possui preenchimento na variável da operadora 
Quando selecionar o campo “sem menção”
Então o sistema não deverá considerar essa atribuição na concatenação do descritivo do plano
    Scenario:PCS_41_cen 12_Concatenação do descritivo do plano
        Given Login
        When Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:84.415.043/0001-28'
        And Preencho campo Produto "222"
        And Preencho campo Rede de Atendimento "123"
        And Preencho campo Tabela prestador "SEM MENÇÂO"
        And Preencho campo Tipo Acomodação "COLETIVA"
        And Preencho campo Tipo de Contrato "SEM MENÇÂO"
        And Preencho campo Codigo Identificador "4444"
        And Preencho campo Plano "55555"
        And Preencho campo Abrangência "ESTADUAL"
        And Preencho campo Segmentação assistencial "SEM MENÇÂO"
        Then Confirmo concatenação "222 - 123 - Coletiva - 4444 - 55555 - Estadual"
        
Cenário 13:
Dado que o plano a ser cadastrado não possui segmentação assistencial, mas a operadora possui essa variável selecionada 
Quando selecionar o campo “sem menção” para essa variável
Então o sistema não deverá permitir a seleção de Ambulatorial, Hospitalar, Obstetrícia e/ou Odontológico
    Scenario:PCS_41_cen 13 Validação lista Suspensa dentro de Segmentação assistencial ou sem menção ou as outras opções
        Given Login
        When Acesso campo de novo cadastro
        When Clico em campo de cadastro
        And Escolho tipo de cadastro "Plano"
        And Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:84.415.043/0001-28'
        And Clicando em Segmentação Assistencial
        And Clicando em Ambulatorial
        And Clicando em Hospitalar
        And Clicando em Obstetrícia
        And Clicando em Odontológico
        And AMBULATORIAL, HOSPITALAR, OBSTETRÍCIA, ODONTOLÓGICO confirmados no campo Combobox
        And Clicando em Segmentação Assistencial
        And Clicando em sem Menção
        Then Confirmado somente a opção "SEM MENÇÂO" no campo COMBOBOX


