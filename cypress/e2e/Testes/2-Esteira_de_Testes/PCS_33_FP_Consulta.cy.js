/// <reference types="cypress" />
let data;
import { Nav_Consulta_Status_FP, Nav_Consulta_cnpjDescri_FP, Nav_Consulta_tipo_FP, login_hml } from './login_hml.cy.js';


before(() => {
    cy.fixture('example').then((tdata) => {
        data = tdata;

    });

});


describe('PCS_33-Consulta -Fontes Pagadoras', () => {
    it('PCS_33-Cenário-1 Retorno Bd para front de lista de informações com o tipo de fonte Operadora', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-01-operadora-01')
        Nav_Consulta_tipo_FP()
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Fonte de Pagadora "Operadora"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "pesquisar"')
        cy.wait(1000)
        cy.screenshot('pcs-33-cen-01-operadora-02')
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('OPERADORA');
          }).log('Validando se na Coluna "Tipo" da tabela de Fontes Pagadoras existem somente a opção "OPERADORA"')
        cy.screenshot('pcs-33-cen-01-operadora-03')
        cy.screenshot('pcs-33-cen-01-operadora-04')  
        

          
                       
    });
    
    it('PCS_33-Cenário-1 Retorno Bd para front de lista de informações com o tipo de fonte Parceira', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-01-parceria-01')
        Nav_Consulta_tipo_FP()
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "pesquisar"')
        cy.wait(1000)
        cy.screenshot('pcs-33-cen-01-parceria-02')
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PARCERIA');
          }).log('Validando se na Coluna "Tipo" da tabela de Fontes Pagadoras existem somente a opção "PARCERIA"')
        cy.screenshot('pcs-33-cen-01-parceria-03')
        cy.screenshot('pcs-33-cen-01-parceria-04')
    });

    it('PCS_33-Cenário-1 Retorno Bd para front de lista de informações com o tipo de fonte Particular', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-01-particula-01')
        Nav_Consulta_tipo_FP()
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "pesquisar"')
        cy.wait(1000)
        cy.screenshot('pcs-33-cen-01-particular-02')
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PARTICULAR');
          }).log('Validando se na Coluna "Tipo" da tabela de Fontes Pagadoras existem somente a opção "PARTICULAR"')
        cy.screenshot('pcs-33-cen-01-particular-03')
        cy.screenshot('pcs-33-cen-01-particular-04')
    });

    it('PCS_33-Cenário-1 Retorno Bd para front de lista de informações com o tipo de fonte Pesquisa Clinica', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-01-Pesquisa Clinica-01')
        Nav_Consulta_tipo_FP()
        cy.wait(1000)
        cy.get('[data-value="4"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "pesquisar"')
        cy.wait(1000)
        cy.screenshot('pcs-33-cen-01-Pesquisa Clinica-02')
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PESQUISA CLÍNICA');
          }).log('Validando se na Coluna "Tipo" da tabela de Fontes Pagadoras existem somente a opção "PESQUISA CLÍNICA"')
        cy.screenshot('pcs-33-cen-01-Pesquisa Clinicar-03')
        cy.screenshot('pcs-33-cen-01-Pesquisa Clinica-04')
        
    });

    it('PCS_33-Cenário-1 Retorno Bd para front de lista de informações com o tipo de fonte Selecionar Todos', () => { 
        login_hml()
        cy.screenshot('pcs-33-cen-01-sel_todos-01')
        Nav_Consulta_tipo_FP()
        cy.wait(1000)
        cy.get('[tabindex="0"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "Pesquisar"')
        cy.wait(1000)
        cy.screenshot('pcs-33-cen-01-sel_todos-02')
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.be.oneOf(['OPERADORA', 'PARTICULAR', 'PARCERIA', 'PESQUISA CLÍNICA']);
          }).log('Validando se na Coluna "Tipo" da tabela de Fontes Pagadoras existem somente a opção "SELECIONAR TODOS"')
        cy.screenshot('pcs-33-cen-01-sel_todos-03') 
        cy.screenshot('pcs-33-cen-01-sel_todos-04')
    });

    it('PCS_33-Cenário-2 Retorno Bd para front lista de informações com o "status" "ativo" da Fonte Pagadora', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-02-ativo-01')
        Nav_Consulta_Status_FP()
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Status "Ativo"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "Pesquisar"')
        cy.wait(1000)
        cy.screenshot('pcs-33-cen-02-ativo-02')
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'ATIVO' || cellText === '').to.be.true;
        }).log('Validando se na Coluna "Status" da tabela de Fontes Pagadoras existem somente a opção "ATIVO"')
        cy.screenshot('pcs-33-cen-02-ativo-03')
        cy.screenshot('pcs-33-cen-02-ativo-04')


        
               
    });

    it('PCS_33-Cenário-2 Retorno Bd para front lista de informações com o "status" "Inativo" da Fonte Pagadora', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-02-inativo-01')
        Nav_Consulta_Status_FP()
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Status "Inativo"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "Pesquisar"')
        cy.wait(1000)
        cy.screenshot('pcs-33-cen-02-inativo-02')
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'INATIVO' || cellText === '').to.be.true;
        }).log('Validando se na Coluna "Status" da tabela de Fontes Pagadoras existem somente a opção "INATIVO"')
        cy.screenshot('pcs-33-cen-02-inativo-03')
        cy.screenshot('pcs-33-cen-02-inativo-04')
        
    });

    it('PCS_33-Cenário-2 Retorno Bd para front lista de informações com o "status" "Suspenso" da Fonte Pagadora', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-02-suspenso-01')
        Nav_Consulta_Status_FP()
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Status "Suspenso"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "Pesquisar"')
        cy.wait(1000)
        cy.screenshot('pcs-33-cen-02-suspenso-02')
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'SUSPENSO' || cellText === '').to.be.true;
        }).log('Validando se na Coluna "Status" da tabela de Fontes Pagadoras existem somente a opção "SUSPENSO"')
        cy.screenshot('pcs-33-cen-02-suspenso-03')
        cy.screenshot('pcs-33-cen-02-suspenso-04')
        
    });

    it('PCS_33-Cenário-2 Retorno Bd para front lista de informações com o "status" "Selecionar Todos" da Fonte Pagadora', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-02-sel_todos-01')
        Nav_Consulta_Status_FP()
        cy.wait(2000)
        cy.get('[tabindex="0"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Status "Selecionar Todos"')
        cy.wait(2000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "Pesquisar"')
        cy.wait(2000)
        cy.screenshot('pcs-33-cen-02-sel_todos-02')
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'ATIVO' || cellText === 'INATIVO' || cellText === 'SUSPENSO' || cellText === '').to.be.true;
        }).log('Validando se na Coluna "Status" da tabela de Fontes Pagadoras existem somente a opção "SELECIONAR TODOS"')
        cy.screenshot('pcs-33-cen-02-sel_todos-03')
        cy.screenshot('pcs-33-cen-02-sel_todos-04')
        
    });

    it('PCS_33-Cenário-3 Retorno Bd para front lista de informações com o "cnpj" da Fonte Pagadora', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-03-cnpj-01')
        Nav_Consulta_cnpjDescri_FP()
        cy.get('#\\:r3\\:').type('13.268.862/0001-41')
        cy.wait(1000)
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "Pesquisar"')
        cy.wait(1000)
        cy.screenshot('pcs-33-cen-03-cnpj-02')
        cy.get('.MuiDataGrid-row > [data-field="cnpj"]').should('contain', '13.268.862/0001-41').log('Confirmando cnpj na lista da tabela')
        cy.log('Cnpj confirmado com sucessso!')
        cy.screenshot('pcs-33-cen-03-cnpj-03')
        cy.screenshot('pcs-33-cen-03-cnpj-04')
        
           
    });

    it('PCS_33-Cenário-3 Retorno Bd para front lista de informações com o "Razão Social" da Fonte Pagadora', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-03-raz_social-01')
        Nav_Consulta_cnpjDescri_FP()
        cy.get('#\\:r3\\:').type('SIMONE IRYS OLIVEIRATESTE PCS_40 AUTO CYPRESS QA LTDA')
        cy.wait(1000)
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click().log('Clicando no botão "Pesquisar"')
        cy.wait(1000)
        cy.screenshot('pcs-33-cen-03-raz_social-02')
        cy.get('[data-field="razaoSocial"] > .MuiDataGrid-cellContent').should('contain', 'SIMONE IRYS OLIVEIRATESTE PCS_40 AUTO CYPRESS QA LTDA')
        cy.log('Cnpj confirmado com sucessso!')
        cy.screenshot('pcs-33-cen-03-raz_social-03')
        cy.screenshot('pcs-33-cen-03-raz_social-04')
       
        
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e status "Ativo"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-oper_ativo-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true }).log('Selecionando Tipo de "Fonte Pagadora"')
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Tipod e Fonte Pagadora "Operadora"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando no campo Status')
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Status "Ativo"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.screenshot('pcs-33-cen-04-oper_ativo-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('OPERADORA');
          }).log('Validando se na Coluna "TIPO" da tabela de Fontes Pagadoras existem somente a opção "OPERADORA"')
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'ATIVO' || cellText === '').to.be.true;
        }).log('Validando se na Coluna "Status" da tabela de Fontes Pagadoras existem somente a opção "ATIVO"')
        cy.screenshot('pcs-33-cen-04-oper_ativo-03')  
        cy.screenshot('pcs-33-cen-04-oper_ativo-04')
        
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e status "Inativo"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-oper_inativo-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true }).log('Selecionando Tipo de "Fonte Pagadora"')
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Tipod e Fonte Pagadora "Operadora"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando no campo Status')
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Status "Inativo"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.screenshot('pcs-33-cen-04-oper_inativo-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('OPERADORA');
          }).log('Validando se na Coluna "TIPO" da tabela de Fontes Pagadoras existem somente a opção "OPERADORA"')
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'INATIVO' || cellText === '').to.be.true;
        }).log('Validando se na Coluna "Status" da tabela de Fontes Pagadoras existem somente a opção "INATIVO"')
        cy.screenshot('pcs-33-cen-04-oper_inativo-03')  
        cy.screenshot('pcs-33-cen-04-oper_inativo-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e status "Suspenso"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-oper_suspenso-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true }).log('Selecionando Tipod e Fonte Pagadora "Operadora"')
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando no campo Status')
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Status "Suspenso"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.screenshot('pcs-33-cen-04-oper_suspenso-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('OPERADORA');
          }).log('Validando se na Coluna "TIPO" da tabela de Fontes Pagadoras existem somente a opção "OPERADORA"')
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'SUSPENSO' || cellText === '').to.be.true;
        }).log('Validando se na Coluna "Status" da tabela de Fontes Pagadoras existem somente a opção "SUSPENSO"')
        cy.screenshot('pcs-33-cen-04-oper_suspenso-03')  
        cy.screenshot('pcs-33-cen-04-oper_suspenso-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Particular" e status "Ativo"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-part_ativo-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true }).log('Selecionando Tipod e Fonte Pagadora "Particular"')
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando no campo Status')
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true }).log('Selecionando Status "Ativo"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.screenshot('pcs-33-cen-04-part_ativo-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PARTICULAR');
          }).log('Validando se na Coluna "TIPO" da tabela de Fontes Pagadoras existem somente a opção "PARTICULAR"')
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'ATIVO' || cellText === '').to.be.true;
        }).log('Validando se na Coluna "Status" da tabela de Fontes Pagadoras existem somente a opção "ATIVO"')
        cy.screenshot('pcs-33-cen-04-part_ativo-03')  
        cy.screenshot('pcs-33-cen-04-part_ativo-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Particular" e status "Inativo"', () => {
        /// Falta dados condizentes no banco de dados do Front        
        login_hml()
        cy.screenshot('pcs-33-cen-04-part_inativo-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true }).log('Selecionando Tipod e Fonte Pagadora "Particular"')
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando no campo Status')
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true }).log('Selecionando Status "Inativo"')
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.screenshot('pcs-33-cen-04-part_inativo-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PARTICULAR');
          }).log('Validando se na Coluna "TIPO" da tabela de Fontes Pagadoras existem somente a opção "PARTICULAR"')
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'INATIVO' || cellText === '').to.be.true;
        }).log('Validando se na Coluna "Status" da tabela de Fontes Pagadoras existem somente a opção "INATIVO"')
        cy.screenshot('pcs-33-cen-04-part_inativo-03')  
        cy.screenshot('pcs-33-cen-04-part_inativo-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Particular" e status "Suspenso"', () => {
        /// Falta dados condizentes no banco de dados do Front
        login_hml()
        cy.screenshot('pcs-33-cen-04-part_suspenso-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true }).log('Selecionando Tipod e Fonte Pagadora "Particular"')
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando no campo Status')
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('body').click().log('Clicando na tela para validar seleção')
        cy.screenshot('pcs-33-cen-04-part_suspenso-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PARTICULAR');
          }).log('Validando se na Coluna "TIPO" da tabela de Fontes Pagadoras existem somente a opção "PARTICULAR"')
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'SUSPENSO' || cellText === '').to.be.true;
        }).log('Validando se na Coluna "Status" da tabela de Fontes Pagadoras existem somente a opção "SUSPENSO"')
        cy.screenshot('pcs-33-cen-04-part_suspenso-03')  
        cy.screenshot('pcs-33-cen-04-part_suspenso-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Parceria" e status "Ativo"', () => {
        /// Falta dados condizentes no banco de dados do Front
        login_hml()
        cy.screenshot('pcs-33-cen-04-parcer_ativo-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click()
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-parcer_ativo-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PARCERIA');
          });
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'ATIVO' || cellText === '').to.be.true;
        });
        cy.screenshot('pcs-33-cen-04-parcer_ativo-03')  
        cy.screenshot('pcs-33-cen-04-parcer_ativo-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Parceria" e status "Inativo"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-parcer_inativo-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click()
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-parcer_inativo-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PARCERIA');
          });
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'INATIVO' || cellText === '').to.be.true;
        });
        cy.screenshot('pcs-33-cen-04-parcer_inativo-03')  
        cy.screenshot('pcs-33-cen-04-parcer_inativo-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Parceria" e status "Suspenso"', () => {
        /// Falta dados condizentes no banco de dados do Front
        login_hml()
        cy.screenshot('pcs-33-cen-04-parcer_suspenso-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click()
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-parcer_suspenso-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PARCERIA');
          });
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'SUSPENSO' || cellText === '').to.be.true;
        });
        cy.screenshot('pcs-33-cen-04-parcer_suspenso-03')  
        cy.screenshot('pcs-33-cen-04-parcer_suspenso-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Pesquisa Clínica" e status "Ativo"', () => {
        /// Falta dados condizentes no banco de dados do Front
        login_hml()
        cy.screenshot('pcs-33-cen-04-pesqui-clin-ativo-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="4"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click()
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-pesqui-clin-ativo-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PESQUISA CLÍNICA');
          });
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'ATIVO' || cellText === '').to.be.true;
        });
        cy.screenshot('pcs-33-cen-04-pesqui-clin-ativo-03')  
        cy.screenshot('pcs-33-cen-04-pesqui-clin-ativo-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Pesquisa Clínica" e status "Inativo"', () => {
        /// Falta dados condizentes no banco de dados do Front
        login_hml()
        cy.screenshot('pcs-33-cen-04-pesqui-clin-inativo-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="4"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click()
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-pesqui-clin-inativo-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PESQUISA CLÍNICA');
          });
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'INATIVO' || cellText === '').to.be.true;
        });
        cy.screenshot('pcs-33-cen-04-pesqui-clin-inativo-03')  
        cy.screenshot('pcs-33-cen-04-pesqui-clin-inativo-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Pesquisa Clínica" e status "Suspenso"', () => {
        /// Falta dados condizentes no banco de dados do Front
        login_hml()
        cy.screenshot('pcs-33-cen-04-pesqui-clin-suspenso-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="4"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click()
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-pesqui-clin-suspenso-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('PESQUISA CLÍNICA');
          });
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'SUSPENSO' || cellText === '').to.be.true;
        });
        cy.screenshot('pcs-33-cen-04-pesqui-clin-suspenso-03')  
        cy.screenshot('pcs-33-cen-04-pesqui-clin-suspenso-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e "Parceria"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-oper_parceria-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-oper_parceria-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'OPERADORA' || cellText === 'PARCERIA').to.be.true;
        });
        
        cy.screenshot('pcs-33-cen-04-oper_parceria-03')
        cy.screenshot('pcs-33-cen-04-oper_parceria-04')


    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e "Pesquisa Clínica"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-oper_pesq-clinica-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="4"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-oper_pesq-clinica-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'OPERADORA' || cellText === 'PESQUISA CLÍNICA').to.be.true;
        });
        
        cy.screenshot('pcs-33-cen-04-oper_pesq-clinica-03')
        cy.screenshot('pcs-33-cen-04-oper_pesq-clinica-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Operadora" e "Particular"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-oper_particular-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-oper_particular-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'OPERADORA' || cellText === 'PARTICULAR').to.be.true;
        });
        
        cy.screenshot('pcs-33-cen-04-oper_particular-03')
        cy.screenshot('pcs-33-cen-04-oper_particular-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Parceria" e "Pesquisa Clínica"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-parceria_pesq-clinica-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="4"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-parceria_pesq-clinica-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'PARCERIA' || cellText === 'PESQUISA CLÍNICA').to.be.true;
        });
        
        cy.screenshot('pcs-33-cen-04-parceria_pesq-clinica-03')
        cy.screenshot('pcs-33-cen-04-parceria_pesq-clinica-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Parceria" e "Particular"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-parceria_particular-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-parceria_particular-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'PARCERIA' || cellText === 'PARTICULAR').to.be.true;
        });
        
        cy.screenshot('pcs-33-cen-04-parceria_particular-03')
        cy.screenshot('pcs-33-cen-04-parceria_particular-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o tipo de fonte "Pesquisa Clínica" e "Particular"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-particular_pesq-clinica-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="4"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-particular_pesq-clinica-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'PARTICULAR' || cellText === 'PESQUISA CLÍNICA').to.be.true;
        });
        
        cy.screenshot('pcs-33-cen-04-particular_pesq-clinica-03')
        cy.screenshot('pcs-33-cen-04-particular_pesq-clinica-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o Status "Ativo" e "Inativo"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-ativo e inativo-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-ativo e inativo-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'ATIVO' || cellText === 'INATIVO' || cellText === '').to.be.true;
        });
        cy.screenshot('pcs-33-cen-04-ativo e inativo-03')
        cy.screenshot('pcs-33-cen-04-ativo e inativo-04')
              
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o Status "Ativo" e "Suspenso"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-ativo e suspens-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-ativo e suspens-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'ATIVO' || cellText === 'SUSPENSO' || cellText === '').to.be.true;
        });
        cy.screenshot('pcs-33-cen-04-ativo e suspenso-03')
        cy.screenshot('pcs-33-cen-04-ativo e suspenso-04')
    });

    it('PCS_33-Cenário-4 Retorno Bd para front de lista de informações com o Status "Inativo" e "Suspenso"', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-04-inativo e suspenso-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.wait(1000)
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-04-inativo e suspenso-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'INATIVO' || cellText === 'SUSPENSO' || cellText === '').to.be.true;
        });
        cy.screenshot('pcs-33-cen-04-inativo e suspenso-03')
        cy.screenshot('pcs-33-cen-04-inativo e suspenso-04')
    });

    it('PCS_33-Cenário 5 Sem filtro', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-05-Retornar fontes pagadoras do banco-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-05-Retornar fontes pagadoras do banco-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(1000)
        cy.get('div[data-field="status"] div.MuiBox-root').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'INATIVO' || cellText === 'SUSPENSO' || cellText === 'ATIVO' || cellText === '').to.be.true;
        });

        cy.get('div[data-field="tipo"] div.MuiDataGrid-cellContent').each(($cell) => {
            const cellText = $cell.text();
            expect(cellText === 'PARTICULAR' || cellText === 'PESQUISA CLÍNICA' || cellText === 'OPERADORA' || cellText === 'PARCERIA').to.be.true;
        });
        cy.screenshot('pcs-33-cen-05-Retornar fontes pagadoras do banco-03')
        cy.screenshot('pcs-33-cen-05-Retornar fontes pagadoras do banco-04')
       
        
        
    });


    it('PCS_33-Cenário-6 Função de limpar campos pesquisados', () => {
        login_hml()
        cy.screenshot('pcs-33-cen-06-Confirma atividade de limpar pesquisa-01')
        cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
        cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
        cy.get('[tabindex="0"] > a').click()
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click({ force: true })
        cy.get('body').click()
        cy.screenshot('pcs-33-cen-06-Confirma atividade de limpar pesquisa-02')
        cy.get('button.MuiButton-containedPrimary').contains('Pesquisar').click()
        cy.wait(2000)
        cy.screenshot('pcs-33-cen-06-Confirma atividade de limpar pesquisa-03')
        cy.get('.MuiButton-outlined').click()
        cy.get('.css-h8m1q6 > .MuiBox-root > .MuiTypography-root').should('contain', 'Selecione um ou mais tipo de fonte pagadora para poder carregar os resultados ou faça uma busca.')
        cy.log('Tela Limpa após clique em botão lipar, atividade confirmada!')
        cy.screenshot('pcs-33-cen-06-Confirma atividade de limpar pesquisa-04')

        
    });




   
});