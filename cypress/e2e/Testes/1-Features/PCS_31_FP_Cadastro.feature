Feature:PCS_68_ref_PCS_31 Estória do usuário 

Como operador de cadastro
preciso criar um novo cadastro de fonte pagadora
para adicioná-la no banco de dados


	Cenário 1:Escolha da fonte pagadora confirmação de campos
	Quando o usuário escolher qual tipo de fonte pagadora vai querer realizar o cadastro
	Então os outros campos aparecerão dependendo da sua escolha

		Scenario 1:PCS_31-Cenário 1-Validar campos após escolha fonte pagadora Operadora
			Given Faço Login OndeData
			When Acesso a tela "Inicial"
			When Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Confirmo campo "Código ANS"
			And Confirmo campo "Versão TISS*"
			And Confirmo campo "CNPJ*"
			And Confirmo campo "Razão Social*"
			And Confirmo campo "Denominação"
			And Confirmo campo "Observações"
			And Confirmo campo "CEP"
			And Confirmo campo "Rua ou logradouro"
			And Confirmo campo "Número"
			And Confirmo campo "Complemento"
			And Confirmo campo "Bairro"
			And Confirmo campo "Cidade"
			And Confirmo campo "Estado"
			And Confirmo campo "E-mail"
			And Confirmo campo "(DDD)"
			And Confirmo campo "Telefone"
			And Confirmo Gerenciamento de Variáveis- Campo "Plano"
			And Confirmo Gerenciamento de Variáveis- Campo "Código Identificador"
			And Confiro Gerenciamento de Variáveis- Campo "Tabela Prestador"
			And Confirmo Gerenciamento de Variáveis- Campo "Rede de Atendimento"
			And Confirmo Gerenciamento de Variáveis- Campo "Tipo de Contrato"
			And Confirmo Gerenciamento de Variáveis- Campo "Tipo de Acomodação"
			And Confirmo Gerenciamento de Variáveis- Campo "Produto"
			And Confirmo Gerenciamento de Variáveis- Campo "Abrangência"
			And Confirmo Gerenciamento de Variáveis- Campo "Segmentação Assistencial"
			Then Validação de todos os campos ok  após escolha fonte pagadora Operadora!



		Scenario 1:PCS_31-Cenário 1-Validar campos após escolha fonte pagadora Parceria
			Given Faço Login OndeData
			When Acesso a tela "Inicial"
			When Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Confirmo que o campo "Código ANS" está inexistente na interface
			And Confirmo que o campo "Versão TISS*" está inexistente na interface
			And Confirmo campo "CNPJ*"
			And Confirmo campo "Razão Social*"
			And Confirmo campo "Denominação"
			And Confirmo campo "Observações"
			And Confirmo campo "CEP"
			And Confirmo campo "Rua ou logradouro"
			And Confirmo campo "Número"
			And Confirmo campo "Complemento"
			And Confirmo campo "Bairro"
			And Confirmo campo "Cidade"
			And Confirmo campo "Estado"
			And Confirmo campo "E-mail"
			And Confirmo campo "(DDD)"
			And Confirmo campo "Telefone"
			Then Validação ok para campos após escolha fonte pagadora Parceria!	

		
		Scenario 1:PCS_31-Cenário 1-Validar campos após escolha fonte pagadora Pesquisa Clínica
			Given Faço Login OndeData
			When Acesso a tela "Inicial"
			When Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Confirmo que o campo "Código ANS" está inexistente na interface
			And Confirmo que o campo "Versão TISS*" está inexistente na interface
			And Confirmo campo "CNPJ*"
			And Confirmo campo "Razão Social*"
			And Confirmo campo "Denominação"
			And Confirmo campo "Observações"
			And Confirmo campo "CEP"
			And Confirmo campo "Rua ou logradouro"
			And Confirmo campo "Número"
			And Confirmo campo "Complemento"
			And Confirmo campo "Bairro"
			And Confirmo campo "Cidade"
			And Confirmo campo "Estado"
			And Confirmo campo "E-mail"
			And Confirmo campo "(DDD)"
			And Confirmo campo "Telefone"	
			Then Validação ok para campos após escolha fonte pagadora Pesquisa Clínica!	


	Cenário 2:ID único
	Quando for realizado um novo cadastro
	Então o sistema deverá gerar um ID Único para a nova fonte pagadora	
	Dado que o usuário preencha todos os campos obrigatórios
	Quando o usuário clicar no botão ”salvar”
	Então o sistema irá verificar se todos os campos obrigatórios foram preenchidos e irá salvar e 
	mostrar um aviso “Cadastro realizado com sucesso!”	

		Scenario 2:PCS_31-Cenário 2-Validar ID único após cadastro de Fonte Pagadora
			Avaliar no Front se confirmação será automatizada ou manual.

	Cenário 3:Validar cadastro de Fonte Pagadora por mensagem Cadastro realizado com sucesso!
	Dado que o usuário preencha todos os campos obrigatórios
	Quando o usuário clicar no botão ”salvar”
	Então o sistema irá verificar se todos os campos obrigatórios foram preenchidos e irá salvar e 
	mostrar um aviso “Cadastro realizado com sucesso!”		

		Scenario 3:PCS_31-Cenário 3-Cadastro Fonte Pagadora Operadora
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Incluo Codigo Operadora ANS "43"
			And Incluo versão TISS "12.34.56"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Clico em salvar
			Then Valido mensagem "Cadastro Realizado com Sucesso"

		Scenario 3:PCS_31-Cenário 3-Cadastro Fonte Pagadora Parceria
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Parceria"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE !!!VALIDAR!!!"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Clico em salvar
			Then Valido mensagem "Cadastro Realizado com Sucesso"

		
		Scenario 3:PCS_31-Cenário 3-Cadastro Fonte Pagadora Pesquisa Clinica 
			Given Processo de buscar e gerar CNPJ para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Pesquisa Clinica"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Nome Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE !!!VALIDAR!!!"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Clico em salvar
			Then Valido mensagem "Cadastro Realizado com Sucesso"
				

	Cenário 4:Validar mensagem de erro na falta dos campos obrigatórios para cadastro
	Dado que o usuário não preencha os campos obrigatórios
	Quando o usuário clicar no botão ”salvar”
	Então o sistema irá alertar em vermelho quais campos são obrigatórios e não foram preenchidos e 
	terá um alerta “O cadastro não foi salvo. Reveja os campos obrigatórios”		

		Scenario 4:PCS_31-Cenário 4-Validação de msg de erro no Cadastro Fonte Pagadora Operadora
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Clico em salvar
			And Confirmo mensagem de erro 
			And Incluo CNPJ da Fonte Pagadora
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo Razão Social da Fonte Pagadora
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo Codigo Operadora ANS "43"
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo versão TISS "12.34.56"
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo Cep da Fonte Pagadora 
			And Clico em salvar
			And Confirmo mensagem de erro
			And Valido Endereço de acordo com o cep cadastrado 
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo numero do Endereço
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo o Complemento do Endereço
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo o e-mail
			And Clico em salvar
			And Confirmo mensagem de erro
			And incluo o (DDD)
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo o Telefone
			And Clico em salvar
			And Confirmo mensagem de erro
			And Clico em salvar
			Then Valido mensagem "Cadastro Realizado com Sucesso"

		Scenario 4:PCS_31-Cenário 4-Validação de msg de erro no Cadastro Fonte Pagadora Parceria
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Parceria"
			And Clico em salvar
			And Confirmo mensagem de erro 
			And Incluo CNPJ da Fonte Pagadora
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo Razão Social da Fonte Pagadora
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo Cep da Fonte Pagadora 
			And Clico em salvar
			And Confirmo mensagem de erro
			And Valido Endereço de acordo com o cep cadastrado 
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo numero do Endereço
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo o Complemento do Endereço
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo o e-mail
			And Clico em salvar
			And Confirmo mensagem de erro
			And incluo o (DDD)
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo o Telefone
			And Clico em salvar
			And Confirmo mensagem de erro
			And Clico em salvar
			Then Valido mensagem "Cadastro Realizado com Sucesso"	

		

		Scenario 4:PCS_31-Cenário 4-Validação de msg de erro no Cadastro Fonte Pagadora Pesquisa Clinica
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Pesquisa Clinica"
			And Clico em salvar
			And Confirmo mensagem de erro 
			And Incluo CNPJ da Fonte Pagadora
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo Razão Social da Fonte Pagadora
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo Cep da Fonte Pagadora 
			And Clico em salvar
			And Confirmo mensagem de erro
			And Valido Endereço de acordo com o cep cadastrado 
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo numero do Endereço
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo o Complemento do Endereço
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo o e-mail
			And Clico em salvar
			And Confirmo mensagem de erro
			And incluo o (DDD)
			And Clico em salvar
			And Confirmo mensagem de erro
			And Incluo o Telefone
			And Clico em salvar
			And Confirmo mensagem de erro
			And Clico em salvar
			Then Valido mensagem "Cadastro Realizado com Sucesso"		

	Cenário 5:Confirmação de caixa alta nos campos de cadastro
	Quando o usuário preencher algum dado em caixa baixa
	Então o sistema deve tornar o texto em caixa alta (máscara)		

		Scenario 5:PCS_31-Cenário 5-Validação CAIXA ALTA Cadastro Fonte Pagadora Operadora 
			Teste Manual
			
					

	Cenário 6:Validação de preenchimento de cnpj fora do padrão
	Quando o usuário preencher um CNPJ fora do padrão da área de negócio
	Então o sistema deverá alertar “CNPJ inválido”

		Scenario 6:PCS_31-Cenário 6-Validação de cnpj fora do padrão Cadastro Fonte Pagadora Operadora
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ incorreto "123.456" da Fonte Pagadora
			Then Confirmo mensagem de erro "CNPJ inválido" no campo CNPJ

	Cenário 7:Validação de preenchimento de cnpj ja cadastrado
	Dado que haja a integração com o banco de dados com todos os CNPJs cadastrados
	Quando o usuário preencher um CNPJ já cadastrado
	Então o sistema deverá validar se já existe o CNPJ cadastrado no banco de dados e retornar um alerta “CNPJ já cadastrado”

		Scenario 7:PCS_31-Cenário 7-Validação de preenchimento de cnpj ja cadastrado Cadastro Fonte Pagadora Operadora
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ incorreto "02.866.602/0001-51" da Fonte Pagadora
			And Incluo Denominação
			And Incluo cod ANS
			And Incluo versão TISS
			And Incluo Obsevações
			And Clico no botão Salvar
			Then Confirmo mensagem de erro "CNPJ já cadastrado" no campo CNPJ			

	Cenário 8: Variáveis
	Dado que o usuário tenha escolhido o tipo de fonte pagadora “operadora”
	Quando o usuário preencher o Gerenciamento de variáveis
	Então o sistema deverá mostrar as 9 opções com checkbox onde o usuário possa selecionar uma ou mais variáveis
	Opções de preenchimento em ordem
	Selecionar apenas 'Planos”
	Selecionar apenas 'Rede de atendimento”
	Selecionar “Plano” e “Produto”
	Selecionar “Plano” e “Tabela prestador”
	Selecionar “Rede de atendimento” e “Tipo contrato”
	Selecionar “Rede de atendimento” e “Tipo de acomodação”
	Selecionar “Produto”, “Plano” e “Tipo contrato”
	Selecionar “Rede de atendimento”, “Código Identificador” e “Abrangência”
	Selecionar “Rede de atendimento”, “Tipo de acomodação” e “Segmentação assistencial”
	Selecionar “Produto”, “Plano”,  “Tipo contrato” e “Tipo de acomodação”	

		Scenario 8:PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis apenas 'Planos”
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Incluo Codigo Operadora ANS "43"
			And Incluo versão TISS "12.34.56"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Escolho variável "Plano"
			And Clico em salvar
			Then Valido mensagem "Cadastro Realizado com Sucesso"
		Scenario 8:PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis apenas 'Rede de atendimento”
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Incluo Codigo Operadora ANS "43"
			And Incluo versão TISS "12.34.56"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Escolho variável "Rede de atendimento"
			And Clico em salvar
			Then Valido mensagem "Cadastro Realizado com Sucesso"
		Scenario 8:PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Plano” e “Produto”
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Incluo Codigo Operadora ANS "43"
			And Incluo versão TISS "12.34.56"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Escolho variável “Plano” e “Produto”
			And Clico em salvar
			Then Valido mensagem "Cadastro Realizado com Sucesso"
		Scenario 8:PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Rede de atendimento” e “Tipo contrato”
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Incluo Codigo Operadora ANS "43"
			And Incluo versão TISS "12.34.56"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Escolho variável “Rede de atendimento” e “Tipo contrato”
			And Clico em salvar
			Then Valido mensagem Rede de atendimento” e “Tipo contrato”
		Scenario 8:PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Rede de atendimento” e “Tipo de acomodação”
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Incluo Codigo Operadora ANS "43"
			And Incluo versão TISS "12.34.56"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Escolho variável “Rede de atendimento” e “Rede de atendimento” e “Tipo de acomodação”
			And Clico em salvar
			Then Valido mensagem Rede de atendimento” e “Tipo contrato”
		Scenario 8:PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Produto”, “Plano” e “Tipo contrato”
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Incluo Codigo Operadora ANS "43"
			And Incluo versão TISS "12.34.56"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Escolho variável “Rede de atendimento” e “Produto”, “Plano” e “Tipo contrato”
			And Clico em salvar
			Then Valido mensagem Rede de atendimento” e “Tipo contrato”
		Scenario 8:PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis“Rede de atendimento”, “Código Identificador” e “Abrangência”
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Incluo Codigo Operadora ANS "43"
			And Incluo versão TISS "12.34.56"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Escolho variável “Código Identificador” e “Abrangência”
			And Clico em salvar
			Then Valido mensagem Rede de atendimento” e “Tipo contrato”
		Scenario 8:PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Rede de atendimento”, “Tipo de acomodação” e “Segmentação assistencial”
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Incluo Codigo Operadora ANS "43"
			And Incluo versão TISS "12.34.56"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Escolho variável “Rede de atendimento”, “Tipo de acomodação” e “Segmentação assistencial”
			And Clico em salvar
			Then Valido mensagem Rede de atendimento” e “Tipo contrato”
		Scenario 8:PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Produto”, “Plano”,  “Tipo contrato” e “Tipo de acomodação”
			Given Processo de buscar e gerar Cnpj para cadastro
			When Faço Login OndeData
			And Acesso a tela de cadastro clico em "Novo Cadastro"
			And Seleciono o Tipo de Cadastro "Fonte Pagadora"
			And Seleciono Informações da Fonte Pagadora "Operadora"
			And Incluo CNPJ da Fonte Pagadora
			And Incluo Razão Social da Fonte Pagadora
			And Incluo Denominação Fonte Pagadora "SUL AMERICA SAUDE"
			And Incluo Codigo Operadora ANS "43"
			And Incluo versão TISS "12.34.56"
			And Incluo mensagem campo de Observação "Teste mensagem campo de OBS"
			And Incluo Cep da Fonte Pagadora 
			And Valido Endereço de acordo com o cep cadastrado 
			And Incluo numero do Endereço
			And Incluo o Complemento do Endereço
			And Incluo o e-mail
			And incluo o (DDD)
			And Incluo o Telefone
			And Escolho variável “Produto”, “Plano”,  “Tipo contrato” e “Tipo de acomodação”
			And Clico em salvar
			Then Valido mensagem Rede de atendimento” e “Tipo contrato”

		

		