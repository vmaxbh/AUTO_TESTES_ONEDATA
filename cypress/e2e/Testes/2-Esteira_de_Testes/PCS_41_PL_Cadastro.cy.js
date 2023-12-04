/// <reference types="cypress" />
let data;
import { Nav_Cadastro_FP, Nav_Cadastro_PL, Nav_Consulta_FP, Preench_Cadastro_FP, Preench_Cadastro_Parceria_FP, Preench_Cadastro_PesqClini_FP, login_hml } from './login_hml.cy.js';




before(() => {
    cy.fixture('example').then((tdata) => {
        data = tdata;

    });

});

describe('PCS_41_ Cadastro de Planos', () => {
    
    it('PCS_41_cen1_Validação das variáveis necessárias e obrigatórias para o cadastro do plano.', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_41_cen1_variaveis_01')
        Nav_Cadastro_PL()
        cy.screenshot('PCS_41_cen1_variaveis_02')
        cy.get('#\\:r3\\:').type('53.383.401/0001-34').log('Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:53.383.401/0001-34')
        cy.wait(800)
        cy.contains('CLINICA MÉDICA SÃO GERMANO S/S LTDA - 53.383.401/0001-34').click().log('Selecionando a Fonte Pagadora com base no CNPJ inserido')
        cy.get('#\\:r6\\:').should('exist').log('Campo de preenchimento "Produto" Existente no cadastro de Planos')
        cy.get('#\\:r7\\:').should('exist').log('Campo de preenchimento "Cód Identificador" Existente no cadastro de Planos')
        cy.get('#\\:r8\\:').should('exist').log('Campo de preenchimento "Plano" Existente no cadastro de Planos')
        cy.get('#\\:r9\\:').should('exist').log('Campo de preenchimento "Rede de Atendimento" Existente no cadastro de Planos')
        cy.screenshot('PCS_41_cen1_variaveis_03')
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root').should('exist').log('Campo de preenchimento "Tipo de Contrato" Existente no cadastro de Planos')
        cy.get(':nth-child(6) > .MuiFormControl-root > .MuiInputBase-root').should('exist').log('Campo de preenchimento "Abrangencia" Existente no cadastro de Planos')
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root').should('exist').log('Campo de preenchimento "Tabela Prestador" Existente no cadastro de Planos')
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root').should('exist').log('Campo de preenchimento "Tipo de Acomodação" Existente no cadastro de Planos')
        cy.get('.css-13sljp9 > .MuiInputBase-root > .MuiSelect-select').should('exist').log('Campo de preenchimento "Segmentação Assistencial" Existente no cadastro de Planos')
        cy.screenshot('PCS_41_cen1_variaveis_04')
       
    });

    it('PCS_41_cen2_Validação Ordenação de variáveis e campos "Código ANS e Plano ANS" Cadastro de Planos base FP Operadora ', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_41_cen2_orden-varia_01')
        Nav_Cadastro_PL()
        cy.screenshot('PCS_41_cen2_orden-varia_02')
        cy.get('#\\:r3\\:').type('18.194.873/0001-48').log('Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:28.458.591/0001-64')
        cy.wait(800)
        cy.contains('CLINICA MÉDICA SÃO GERMANO S/S LTDA - 18.194.873/0001-48').click().log('Selecionando a Fonte Pagadora com base no CNPJ inserido')
        cy.screenshot('PCS_41_cen2_orden-varia_03')
        cy.get('#\\:r6\\:').should('exist').log('Campo de preenchimento "Plano" Existente no cadastro de Planos')
        cy.get('#\\:r7\\:').should('exist').log('Campo de preenchimento "Produtos" Existente no cadastro de Planos')
        cy.get('#\\:rc\\:').should('exist').log('Campo "Código ANS" existente no cadastro de Plano Operadora')
        cy.get('#\\:rd\\:').should('exist').log('Campo "Plano ANS" existente no cadastro de Plano Operadora')
        cy.get('#\\:re\\:').type('Observação da Automação PCS_41_cen1_Validação Ordenação de variáveis e campos "Código ANS e Plano ANS')
        cy.screenshot('PCS_41_cen2_orden-varia_04')
        
        
    });


    it('PCS_41_cen3_Validação de campos "Descrição, Status e Observações" Cadastro de Planos base FP Parceria', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_41_cen3_parceria_01')
        Nav_Cadastro_PL()
        cy.screenshot('PCS_41_cen3_parceria_02')
        cy.get('#\\:r3\\:').type('37.736.234/0001-01').log('Inserindo CNPJ e Fonte pagadora "Parceria" Cadastrada CNPJ:45.841.515/0001-52')
        cy.wait(800)
        cy.contains('JOSE ARIMATEIA RAMOS BARROS 55078494391 - 37.736.234/0001-01').click().log('Selecionando a Fonte Pagadora com base no CNPJ inserido')
        cy.get('#\\:r6\\:').should('exist').log('Campo "Descrição" Confirmado!')
        cy.get('.css-1f2qzn3 > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').should('exist').log('Campo "Status" Confirmado')
        cy.get('#\\:r9\\:').should('exist').type('Observação da Automação PCS_41_cen3_Validação de campos "Descrição, Status e Observações" Cadastro de Planos base FP Parceria').log('Campo "Observações" Confirmado')
        cy.screenshot('PCS_41_cen3_parceria_03')
       
        
    });

    it('PCS_41_cen3_Validação de campos "Descrição, Status e Observações" Cadastro de Planos base FP Particular', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_41_cen3_particular_01')
        Nav_Cadastro_PL()
        cy.screenshot('PCS_41_cen3_particular_02')
        cy.get('#\\:r3\\:').type('91.012.121/0001-09').log('Inserindo CNPJ e Fonte pagadora "Particular" Cadastrada CNPJ:19.838.481/0001-37')
        cy.wait(800)
        cy.contains('INSTITUTO DE EDUCAÇÃO, PESQUISA E GESTÃO EM SAÚDE - 91.012.121/0001-09').click().log('Selecionando a Fonte Pagadora com base no CNPJ inserido')
        cy.get('#\\:r6\\:').should('exist').log('Campo "Descrição" Confirmado!')
        cy.get('.css-1f2qzn3 > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').should('exist').log('Campo "Status" Confirmado')
        cy.get('#\\:r9\\:').should('exist').type('Observação da Automação PCS_41_cen3_Validação de campos "Descrição, Status e Observações" Cadastro de Planos base FP Parceria').log('Campo "Observações" Confirmado')
        cy.screenshot('PCS_41_cen3_particular_03')
        
    });

    it('PCS_41_cen3_Validação de campos "Descrição, Status e Observações" Cadastro de Planos base FP  Pesquisa Clínica', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_41_cen3_Pesquisa Clínica_01')
        Nav_Cadastro_PL()
        cy.screenshot('PCS_41_cen3_Pesquisa Clínica_02')
        cy.get('#\\:r3\\:').type('86.179.196/0001-49').log('Inserindo CNPJ e Fonte pagadora "Pesquisa Clínica" Cadastrada CNPJ:31.626.263/0001-34')
        cy.wait(800)
        cy.contains('CLINICA MÉDICA SÃO GERMANO S/S LTDA - 86.179.196/0001-49').click().log('Selecionando a Fonte Pagadora com base no CNPJ inserido')
        cy.get('#\\:r6\\:').should('exist').log('Campo "Descrição" Confirmado!')
        cy.get('.css-1f2qzn3 > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').should('exist').log('Campo "Status" Confirmado')
        cy.get('#\\:r9\\:').should('exist').type('Observação da Automação PCS_41_cen3_Validação de campos "Descrição, Status e Observações" Cadastro de Planos base FP Parceria').log('Campo "Observações" Confirmado')
        cy.screenshot('PCS_41_cen3_Pesquisa Clínica_03')
        
    });

    it('PCS_41_cen4_Validação de campos Concatenados separados por hífen', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_41_cen4_hifen_01')
        Nav_Cadastro_PL()
        cy.screenshot('PCS_41_cen4_hifen_02')
        cy.get('#\\:r3\\:').type('18.194.873/0001-48').log('Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:18.194.873/0001-48')
        cy.wait(800)
        cy.contains('CLINICA MÉDICA SÃO GERMANO S/S LTDA - 18.194.873/0001-48').click().log('Selecionando a Fonte Pagadora com base no CNPJ inserido')
        cy.get('#\\:r6\\:').type('BÁSICO 2').log('Campo de preenchimento "Plano" Incluido "BÁSICO 2"')
        cy.get('#\\:r7\\:').type('123').log('Campo de preenchimento "Produtos" Incluido "123"')
        cy.get('input[id=":r8:"]').should('have.value', 'BÁSICO 2 - 123').log('Confirmado valor separado por hífen  "BÁSICO 2 - 123" dentro do campo Nome do Plano')
        cy.screenshot('PCS_41_cen4_hifen_03')
        
    });

    it('PCS_41_cen  5, 6  e 7  Validação de popup de erro ao cadastrar Plano com mesmo conteúdo de variáveis', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_41_cen5-6-7_msg-erro_01')
        Nav_Cadastro_PL()
        cy.screenshot('PCS_41_cen5-6-7_msg-erro_02')
        cy.get('#\\:r3\\:').type('84.415.043/0001-28').log('Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:84.415.043/0001-28')
        cy.wait(800)
        cy.contains('TODAS AS VARIAVEIS - 84.415.043/0001-28').click().log('Selecionando a Fonte Pagadora com base no CNPJ inserido')
        cy.get('#\\:r6\\:').type('333').log('Inclusão de dados campo "Produto"')
        cy.get('#\\:r7\\:').type('666666').log('Inclusão de dados campo "Rede de Atendimento"')
        cy.get('#\\:re\\:').type('4444').log('Inclusão de dados campo "Codigo Identificador"')
        cy.get('#\\:rf\\:').type('5555555').log('Inclusão de dados campo "Plano"')
        cy.screenshot('PCS_41_cen5-6-7_msg-erro_03')
        cy.get('.css-patpws > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root').type('SEM MENÇÂO').type('{downarrow}{enter}').log('Campo Tabela Prestador')
        cy.get('.css-patpws > :nth-child(4) > .MuiFormControl-root > .MuiInputBase-root').type('SEM MENÇÂO').type('{downarrow}{enter}').log('Campo Tipo de Acomodação')
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root').type('SEM MENÇÂO').type('{downarrow}{enter}').log('Campo Tipo de Contrato')
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root').type('SEM MENÇÂO').type('{downarrow}{enter}').log('Campo Abrangência')
        cy.get('.css-13sljp9 > .MuiInputBase-root > .MuiSelect-select').click().log('Campo Segmentação Assistencial')
        cy.get('[data-value="21"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Opção "SEM MENÇÂO"')
        cy.get('body').click().log('Clicando na tela')
        cy.get('#\\:r1\\:').click().log('Clicando no botão Salvar')
        cy.get('.css-dsrez5 > .MuiBox-root > .MuiTypography-h2').should('contain', 'Duplicidade de informações').log('Confirmação de Popup de erro')
        cy.screenshot('PCS_41_cen5-6-7_msg-erro_04')
        
    });

   it('PCS_41_cen 8 e 9 Validação de Campos Obrigatórios  Cadastro de Planos ', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_41_cen8-9_camposobrig_01')
        Nav_Cadastro_PL()
        cy.screenshot('PCS_41_cen8-9_camposobrig_02')
        cy.get('#\\:r3\\:').type('84.415.043/0001-28').log('Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:84.415.043/0001-28')
        cy.wait(800)
        cy.contains('TODAS AS VARIAVEIS - 84.415.043/0001-28').click().log('Selecionando a Fonte Pagadora com base no CNPJ inserido')
        cy.get('#\\:r1\\:').click().log('Clicando no botão Salvar')
        cy.screenshot('PCS_41_cen8-9_camposobrig_03')
        cy.get('#\\:r6\\:-helper-text').should('contain', 'Campo obrigatório').log('Confirmando campo obrigatório "Produto"')
        cy.get('#\\:r7\\:-helper-text').should('contain', 'Campo obrigatório').log('Confirmando campo obrigatório "Rede de Atendimento"')
        cy.get('#\\:r8\\:-helper-text').should('contain', 'Campo obrigatório').log('Confirmando campo obrigatório "Tabela Prestador"')
        cy.get('#\\:ra\\:-helper-text').should('contain', 'Campo obrigatório').log('Confirmando campo obrigatório "Tipo de Acomodação"')
        cy.get('#\\:rc\\:-helper-text').should('contain', 'Campo obrigatório').log('Confirmando campo obrigatório "Tipo de Contrato"')
        cy.get('#\\:re\\:-helper-text').should('contain', 'Campo obrigatório').log('Confirmando campo obrigatório "Código Identificador"')
        cy.get('#\\:rf\\:-helper-text').should('contain', 'Campo obrigatório').log('Confirmando campo obrigatório "Plano"')
        cy.get('#\\:rg\\:-helper-text').should('contain', 'Campo obrigatório').log('Confirmando campo obrigatório "Abrangência"')
        cy.get('.css-13sljp9 > .MuiFormHelperText-root').should('contain', 'Campo obrigatório').log('Confirmando campo obrigatório "Segmentação Assistencial"')
        cy.screenshot('PCS_41_cen8-9_camposobrig_04')
        
    
   });


   it('PCS_41_cen 12_Concatenação do descritivo do plano ', () => {
    login_hml()
        cy.wait(800)
        cy.screenshot('PCS_41_cen12_Concatenação-desc-plano_01')
        Nav_Cadastro_PL()
        cy.screenshot('PCS_41_cen12_Concatenação-desc-planon_02')
        cy.get('#\\:r3\\:').type('84.415.043/0001-28').log('Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:84.415.043/0001-28')
        cy.wait(800)
        cy.contains('TODAS AS VARIAVEIS - 84.415.043/0001-28').click().log('Selecionando a Fonte Pagadora com base no CNPJ inserido')
        cy.get('#\\:r6\\:').type('222').log('Campo de preenchimento "Plano" Incluido "BÁSICO 2"')
        cy.get('#\\:r7\\:').type('123').log('Campo de preenchimento "Produtos" Incluido "123"')
        cy.get('.css-patpws > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root').type('SEM MENÇÂO').type('{downarrow}{enter}').log('Campo tabela prestador marcação "SEM MENÇÂO"')
        cy.get('.css-patpws > :nth-child(4) > .MuiFormControl-root > .MuiInputBase-root').type('COLETIVA').type('{downarrow}{enter}').log('Campo tipo de acomodação marcação "COLETIVA"')
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root').type('SEM MENÇÂO').type('{downarrow}{enter}').log('Campo tipo de contrato marcação "SEM MENÇÂO"')
        cy.get('#\\:re\\:').type('4444').log('Campo codigo identificador inputado "4444"')
        cy.get('#\\:rf\\:').type('55555').log('Campo Plano inputado "55555"')
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root').type('ESTADUAL').type('{downarrow}{enter}').log('Campo Abrangência marcação "ESTADUAL"')
        cy.get('.css-13sljp9 > .MuiInputBase-root > .MuiSelect-select').click().log('Campo tipo de contrato marcação "SEM MENÇÂO"')
        cy.get('[data-value="21"]').click().log('Campo tipo de contrato marcação "SEM MENÇÂO"')
        cy.get('body').click()
        cy.get('input[id=":rj:"]').should('have.value', '222 - 123 - Coletiva - 4444 - 55555 - Estadual').log('Confirmado valor separado por hífen  "222 - 123 - Coletiva - 4444 - 55555 - Estadual" dentro do campo Nome do Plano')
        cy.screenshot('PCS_41_cen12_Concatenação-desc-plano_03')
    
   });


   it('PCS_41_cen 13 Validação lista Suspensa dentro de Segmentação assistencial ou sem menção ou as outras opções', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_41_cen13_Seg-assistencial_01')
        Nav_Cadastro_PL()
        cy.screenshot('PCS_41_cen13_Seg-assistencial_02')
        cy.get('#\\:r3\\:').type('84.415.043/0001-28').log('Inserindo CNPJ e Fonte pagadora Cadastrada CNPJ:84.415.043/0001-28')
        cy.wait(800)
        cy.contains('TODAS AS VARIAVEIS - 84.415.043/0001-28').click().log('Selecionando a Fonte Pagadora com base no CNPJ inserido')
        cy.get('.css-13sljp9 > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando em Segmentação Assistencial')
        cy.get('[tabindex="0"] > .MuiListItemText-root > .MuiTypography-root').click().log('Clicando em Ambulatorial')
        cy.get('[data-value="18"] > .MuiListItemText-root > .MuiTypography-root').click().log('Clicando em Hospitalar')
        cy.get('[data-value="19"] > .MuiListItemText-root > .MuiTypography-root').click().log('Clicando em Obstetrícia')
        cy.get('[data-value="20"] > .MuiListItemText-root > .MuiTypography-root').click().log('Clicando em Odontológico')
        cy.get('body').click()
        cy.screenshot('PCS_41_cen13_Seg-assistencial_03')
        cy.get('div[role="combobox"]').should('contain', 'AMBULATORIAL, HOSPITALAR, OBSTETRÍCIA, ODONTOLÓGICO').log('AMBULATORIAL, HOSPITALAR, OBSTETRÍCIA, ODONTOLÓGICO confirmados no campo Combobox')
        cy.get('.css-13sljp9 > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando em Segmentação Assistencial')
        cy.get('[aria-selected="false"] > .MuiListItemText-root > .MuiTypography-root').click().log('Clicando em sem Menção')
        cy.get('body').click()
        cy.get('div[role="combobox"]').should('contain', 'SEM MENÇÃO').log('Confirmado somente a opção "SEM MENÇÂO" no campo COMBOBOX')
        cy.screenshot('PCS_41_cen13_Seg-assistencial_04')

    
   });


  

});

