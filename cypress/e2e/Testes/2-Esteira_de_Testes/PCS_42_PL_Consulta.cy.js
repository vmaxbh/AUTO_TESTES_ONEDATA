/// <reference types="cypress" />
let data;
import { consulta_plano, login_hml } from './login_hml.cy.js';




before(() => {
    cy.fixture('example').then((tdata) => {
        data = tdata;

    });

});

describe('PCS_42 Consulta de Planos', () => {
    it('PCS_42_cen 1_ Pesquisando plano por referencia "cnpj" campo "Fonte Pagadora ou CNPJ"', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 1_ConsultaCnpj_01')
        consulta_plano()
        cy.get('#\\:r1\\:').type('84.415.043/0001-28').log('Inserindo CNPJ no campo "Fonte Pagadora ou CNPJ"')
        cy.screenshot('PCS_42_cen 1_ConsultaCnpj_02')
        cy.wait(800)
        cy.contains('TODAS AS VARIAVEIS - 84.415.043/0001-28').click().log('Clicando em plano concatenado "TODAS AS VARIAVEIS - 84.415.043/0001-28"')
        cy.wait(1000)
        cy.get('#\\:r5\\:').click()
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="nomeFontePagadora"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('TODAS AS VARIAVEIS - 84.415.043/0001-28');
        }).log('Validado que todos os valores na coluna Fonte Pagadore são iguais a "TODAS AS VARIAVEIS - 84.415.043/0001-28"')
        cy.screenshot('PCS_42_cen 1_ConsultaCnpj_03')
        
        
    });
    it('PCS_42_cen 1_ Pesquisando plano por referencia nome da fonte Pagadora campo "Fonte Pagadora ou CNPJ"', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 1_ConsultanomeFP_01')
        consulta_plano()
        cy.get('#\\:r1\\:').type('TODAS AS VARIAVEIS').log('Inserindo CNPJ no campo "Fonte Pagadora ou CNPJ"')
        cy.screenshot('PCS_42_cen 1_ConsultanomeFP_02')
        cy.wait(800)
        cy.contains('TODAS AS VARIAVEIS - 84.415.043/0001-28').click().log('Clicando em plano concatenado "TODAS AS VARIAVEIS - 84.415.043/0001-28"')
        cy.wait(1000)
        cy.get('#\\:r5\\:').click()
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="nomeFontePagadora"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('TODAS AS VARIAVEIS - 84.415.043/0001-28');
        }).log('Validado que todos os valores na coluna Fonte Pagadore são iguais a "TODAS AS VARIAVEIS - 84.415.043/0001-28"')
        cy.screenshot('PCS_42_cen 1_ConsultanomeFP_03')
        
    });
    
    it('PCS_42_cen 2_ Pesquisando plano por referencia de Status "ATIVO"', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 2_ConsultaStatusAtivo_01')
        consulta_plano()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando em Status')
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click().log('Selecionando Status "Ativo"')
        cy.screenshot('PCS_42_cen 2_ConsultaStatusAtivo_02')
        cy.wait(1000)
        cy.get('#\\:r5\\:').click({force: true}).log('CLicando em "Pesquisar"')
        cy.wait(1000)
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="status"]').each(($cell) => {
            expect($cell.text()).to.equal('ATIVO')
         });
        cy.log('Coluna de Status Validada para status Ativo no conteúdo') 
        cy.screenshot('PCS_42_cen 2_ConsultaStatusAtivo_03')
            
    });
    it('PCS_42_cen 2_ Pesquisando plano por referencia de Status "INATIVO"', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 2_ConsultaStatusInativo_01')
        consulta_plano()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando em Status')
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.screenshot('PCS_42_cen 2_ConsultaStatusInativo_02')
        cy.wait(1000)
        cy.get('#\\:r5\\:').click({force: true}).log('CLicando em "Pesquisar"')
        cy.wait(1000)
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="status"]').each(($cell) => {
            expect($cell.text()).to.equal('INATIVO')
         });
        cy.log('Coluna de Status Validada para status Inativo no conteúdo')
        cy.screenshot('PCS_42_cen 2_ConsultaStatusInativo_03')
            
    });
    it('PCS_42_cen 2_ Pesquisando plano por referencia de Status "SUSPENSO"', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 2_ConsultaStatusSuspenso_01')
        consulta_plano()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando em Status')
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(1000)
        cy.screenshot('PCS_42_cen 2_ConsultaStatusSuspenso_02')
        cy.get('#\\:r5\\:').click({force: true}).log('CLicando em "Pesquisar"')
        cy.wait(1000)
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="status"]').each(($cell) => {
            expect($cell.text()).to.equal('SUSPENSO')
         });
        cy.log('Coluna de Status Validada para status Inativo no conteúdo')
        cy.screenshot('PCS_42_cen 2_ConsultaStatusSuspenso_03')
        
    });

    it('PCS_42_cen 3_ Pesquisando plano por referencia nome do plano no campo "Plano"', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 3_ConsultaPlano_01')
        consulta_plano()
        cy.get('#\\:r4\\:').type('333 - 666666 - 4444 - 5555555').log('Inserindo CNPJ no campo "Fonte Pagadora ou CNPJ"')
        cy.wait(800)
        cy.screenshot('PCS_42_cen 3_ConsultaPlano_02')
        cy.get('#\\:r5\\:').click({force: true}).log('CLicando em "Pesquisar"')
        cy.wait(1000)
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="nomeFontePagadora"] div.MuiDataGrid-cellContent').each(($cell) => {
            expect($cell.text()).to.equal('TODAS AS VARIAVEIS - 84.415.043/0001-28');
        }).log('Validado que todos os valores na coluna Fonte Pagadore são iguais a "TODAS AS VARIAVEIS - 84.415.043/0001-28"')
        cy.screenshot('PCS_42_cen 3_ConsultaPlano_03')
        
    });

    it('PCS_42_cen 4 Filtro Multiplos Status ATIVO e SUSPENSO', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-AtivoSuspenso_01')
        consulta_plano()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando em Status')
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-AtivoSuspenso_02')
        cy.get('#\\:r5\\:').click({force: true}).log('CLicando em "Pesquisar"')
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="status"]').each(($cell) => {
            const cellText = $cell.text().trim();
            if (cellText === 'ATIVO' || cellText === 'SUSPENSO') {
                cy.log('Status válido: ' + cellText);
            } else {
                cy.log('Status inválido: ' + cellText);
            }
         });
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-AtivoSuspenso_03') 
        
    });

    it('PCS_42_cen 4 Filtro Multiplos Status INATIVO e SUSPENSO', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-InativoSuspenso_01')
        consulta_plano()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando em Status')
        cy.get('[data-value="3"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-InativoSuspenso_02')
        cy.get('#\\:r5\\:').click({force: true}).log('CLicando em "Pesquisar"')
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="status"]').each(($cell) => {
            const cellText = $cell.text().trim();
            if (cellText === 'INATIVO' || cellText === 'SUSPENSO') {
                cy.log('Status válido: ' + cellText);
            } else {
                cy.log('Status inválido: ' + cellText);
            }
         });
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-InativoSuspenso_03') 
        
    });

    it('PCS_42_cen 4 Filtro Multiplos Status ATIVO e INATIVO', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-AtivoInativo_01')
        consulta_plano()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando em Status')
        cy.get('[data-value="1"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('[data-value="2"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-AtivoInativo_02')
        cy.get('#\\:r5\\:').click({force: true}).log('CLicando em "Pesquisar"')
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="status"]').each(($cell) => {
            const cellText = $cell.text().trim();
            if (cellText === 'ATIVO' || cellText === 'INATIVO') {
                cy.log('Status válido: ' + cellText);
            } else {
                cy.log('Status inválido: ' + cellText);
            }
         });
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-AtivoInativo_03') 
        
    });

    it('PCS_42_cen 4 Filtro Multiplos Status "SELECIONAR TUDO"', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-StatusTodos_01')
        consulta_plano()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando em Status')
        cy.get('[tabindex="0"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-StatusTodos_02')
        cy.get('#\\:r5\\:').click({force: true}).log('CLicando em "Pesquisar"')
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="status"]').each(($cell) => {
            const cellText = $cell.text().trim();
            if (cellText === 'ATIVO' || cellText === 'INATIVO' || cellText === 'SUSPENSO') {
                cy.log('Status válido: ' + cellText);
            } else {
                cy.log('Status inválido: ' + cellText);
            }
         });
        cy.screenshot('PCS_42_cen 4_ConsultaFiltrosMultipl-StatusTodos_03')  
        
    });

    it('PCS_42_cen 5 Pesquisa Geral após botão pesquisar', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 5_ConsultaGeral-btPesquisar_01')
        consulta_plano()
        cy.screenshot('PCS_42_cen 5_ConsultaGeral-btPesquisar_02')
        cy.get('#\\:r5\\:').click({force: true}).log('CLicando em "Pesquisar"')
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="status"]').each(($cell) => {
            const cellText = $cell.text().trim();
            if (cellText === 'ATIVO' || cellText === 'INATIVO' || cellText === 'SUSPENSO') {
                cy.log('Status válido: ' + cellText);
            } else {
                cy.log('Status inválido: ' + cellText);
            }
         });
        cy.screenshot('PCS_42_cen 5_ConsultaGeral-btPesquisar_03')  
        
    });

    it('PCS_42_cen 6 após pesquisa função Limpar', () => {
        login_hml()
        cy.wait(800)
        cy.screenshot('PCS_42_cen 6_ConsultaFunção-Limpar_01')
        consulta_plano()
        cy.screenshot('PCS_42_cen 6_ConsultaFunção-Limpar_02')
        cy.get('#\\:r5\\:').click({force: true}).log('CLicando em "Pesquisar"')
        cy.screenshot('PCS_42_cen 6_ConsultaFunção-Limpar_03')
        cy.get('.MuiDataGrid-root .MuiDataGrid-cell[data-field="status"]').each(($cell) => {
            const cellText = $cell.text().trim();
            if (cellText === 'ATIVO' || cellText === 'INATIVO' || cellText === 'SUSPENSO') {
                cy.log('Status válido: ' + cellText);
            } else {
                cy.log('Status inválido: ' + cellText);
            }
         });
        cy.get('.MuiButton-outlined').click()
        cy.get('.css-h8m1q6 > .MuiBox-root > .MuiTypography-root').should('contain', 'Selecione um ou mais tipo de fonte pagadora para poder carregar os resultados ou faça uma busca.')
        cy.log('Função de Limpar após pesquisa ok!') 
        cy.screenshot('PCS_42_cen 6_ConsultaFunção-Limpar_04')
        
    });
    
    
});