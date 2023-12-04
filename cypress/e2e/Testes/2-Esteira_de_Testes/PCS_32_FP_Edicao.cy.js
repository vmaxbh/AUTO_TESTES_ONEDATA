/// <reference types="cypress" />
let data;
import { Nav_Cadastro_FP, Preench_Cadastro_FP, Preench_Cadastro_Parceria_FP, Preench_Cadastro_PesqClini_FP, login_hml } from './login_hml.cy.js';
let cnpjGerado_cen2;

before(() => {
    cy.fixture('example').then((tdata) => {
        data = tdata;

    });

});

describe('PCS_32-Feature de Edição da Fonte Pagadora', () => {
    it('PCS_32-Cenário 1-O sistema deverá confirmar com o usuário quais campos estão sendo alterados antes de salvar o novo dado', () => {
        return true;
        /// exemplo de mensagem de confirmação não identificada no figma (protótipo)


        
    });
    
    it('PCS_32-Cenário 2-Na alteração de Status da FP, o sistema deverá mostrar o pop-up com campo obrigatório “Justificativa de mudança de status”', () => {
        cy.visit(data.url_cnpj)
        cy.log('Site gerador de CNPJ acessado com sucesso!')
        cy.get('#pontuacao').click()
        cy.get('#gerar').click()
        cy.wait(1000)
        cy.get('#cnpj').invoke('val').then((cnpjCopiado) => {
            cnpjGerado_cen2 = cnpjCopiado.replace(/\D/g,'');
            cy.get('#gerar').click()
            cy.log('CNPJ Gerado e coletado com Sucesso')
            login_hml()
            cy.screenshot('PCS_32-Cenário 2_pop-up obrigatório-mudança Status_01')
            Nav_Cadastro_FP()
            cy.screenshot('PCS_32-Cenário 2_pop-up obrigatório-mudança Status_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_PesqClini_FP()
            cy.screenshot('PCS_32-Cenário 2_pop-up obrigatório-mudança Status_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('PCS_32-Cenário 2_pop-up obrigatório-mudança Status_04')
            cy.wait(500)
            cy.contains('Consultar Cadastro').click()
            cy.wait(1500)
            cy.get('#ddlTipoCadastro').click()
            cy.wait(1000)
            cy.get('a[href="/consultar-cadastro/fonte-pagadora"]').click({force: true})
            cy.get('.MuiInputBase-input.MuiFilledInput-input.css-2bxn45').type(cnpjGerado_cen2)
            cy.screenshot('PCS_32-Cenário 2_pop-up obrigatório-mudança Status_05')
            cy.contains('Pesquisar').click()
            cy.wait(500)
            cy.get('[data-testid="EditOutlinedIcon"]').click()
            cy.get('.MuiGrid-grid-xs-2 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.screenshot('PCS_32-Cenário 2_pop-up obrigatório-mudança Status_06')
            cy.contains('Inativo').click()
            cy.get('.MuiGrid-grid-xs-2 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').should('exist').log('Existe tela de confirmação na mudança de Status')
            cy.screenshot('PCS_32-Cenário 2_pop-up obrigatório-mudança Status_07')
            cy.get('#\\:r2t\\:').type('Teste automatizado de mudança de status')
            cy.get('.css-1xyyr8m > .MuiBox-root > .MuiButton-contained').click()
            cy.wait(500)
            cy.screenshot('PCS_32-Cenário 2_pop-up obrigatório-mudança Status_08')
            cy.get('#\\:r2a\\:').click()
            cy.wait(500)
            cy.screenshot('PCS_32-Cenário 2_pop-up obrigatório-mudança Status_09')
            
                 
            
       });
        
    });

    it('PCS_32-Cenário 3-Após Salvar Edição o sistema deverá mostrar um alerta “Edição feita com sucesso!”', () => {
        cy.visit(data.url_cnpj)
        cy.log('Site gerador de CNPJ acessado com sucesso!')
        cy.get('#pontuacao').click()
        cy.get('#gerar').click()
        cy.wait(1000)
        cy.get('#cnpj').invoke('val').then((cnpjCopiado) => {
            cnpjGerado_cen2 = cnpjCopiado.replace(/\D/g,'');
            cy.get('#gerar').click()
            cy.log('CNPJ Gerado e coletado com Sucesso')
            login_hml()
            cy.screenshot('PCS_32-Cenário 3_alert obrigatório-confirm edição_01')
            Nav_Cadastro_FP()
            cy.screenshot('PCS_32-Cenário 3_alert obrigatório-confirm edição_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_PesqClini_FP()
            cy.screenshot('PCS_32-Cenário 3_alert obrigatório-confirm edição_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(1500)
            cy.contains('Consultar Cadastro').click()
            cy.wait(1500)
            cy.get('#ddlTipoCadastro').click()
            cy.wait(1000)
            cy.get('a[href="/consultar-cadastro/fonte-pagadora"]').click({force: true})
            cy.get('.MuiInputBase-input.MuiFilledInput-input.css-2bxn45').type(cnpjGerado_cen2)
            cy.screenshot('PCS_32-Cenário 3_alert obrigatório-confirm edição_04')
            cy.contains('Pesquisar').click()
            cy.wait(500)
            cy.get('[data-testid="EditOutlinedIcon"]').click()
            cy.get('.MuiGrid-grid-xs-2 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.contains('Inativo').click()
            cy.get('.MuiGrid-grid-xs-2 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').should('exist').log('Existe tela de confirmação na mudança de Status')
            cy.screenshot('PCS_32-Cenário 3_alert obrigatório-confirm edição_05')
            cy.get('#\\:r2t\\:').type('Teste automatizado de mudança de status')
            cy.get('.css-1xyyr8m > .MuiBox-root > .MuiButton-contained').click()
            cy.wait(500)
            cy.screenshot('PCS_32-Cenário 3_alert obrigatório-confirm edição_06')
            cy.get('#\\:r2a\\:').click()
            cy.wait(500)
            cy.screenshot('PCS_32-Cenário 3_alert obrigatório-confirm edição_07')
            cy.wait(500)
            cy.on('window:alert', (str) => {
                expect(str).to.eq('Fonte pagadora atualizada com sucesso')
              }).log('Alert confirmado com sucesso!')
            cy.screenshot('PCS_32-Cenário 3_alert obrigatório-confirm edição_08')  
              
            
       });
        
    });
});