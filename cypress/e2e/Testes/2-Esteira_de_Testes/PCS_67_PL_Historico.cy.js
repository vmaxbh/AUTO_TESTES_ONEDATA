/// <reference types="cypress" />
let data;
import { consulta_plano, gerador_pessoas, login_hml } from './login_hml.cy.js';

describe('PCS_67_Historico de planos', () => {
    it('PCS_67_cenario 1_Confirmação de campo histórico', () => {
        login_hml()
        consulta_plano()
        cy.get('#\\:r5\\:').click()
        cy.get('[data-testid="SourceOutlinedIcon"]').eq(0).click()
        cy.get('.css-1lekzkb > .MuiTypography-root').should('contain', 'Histórico de edição')
               
    });

    it('PCS_67_cenario 2_Validação ID, Criado por e Data de Criação Histórico', () => {
        login_hml()
        consulta_plano()
        cy.get('#\\:r1\\:').type('45.841.515/0001-52')
        cy.get('#\\:r5\\:').click()
        cy.get('[data-testid="SourceOutlinedIcon"]').eq(0).click()
        cy.get(':nth-child(1) > .css-ojpuqs').should('contain', '#2')
        cy.get(':nth-child(2) > .css-ojpuqs').should('contain', 'T36256415850')
        cy.get(':nth-child(3) > .css-ojpuqs').should('contain', '27/11/2023')
        
        
    });

   
    it.only('PCS_67_cenario 3_', () => {
        login_hml()
        consulta_plano()
        cy.get('#\\:r1\\:').type('61.486.650/0001-83')
        cy.contains('OFICIAL DE REGISTRO CIVIL DAS PESSOAS NATURAIS E TABELIAO DE NOTAS DO 30O SUBDISTRITO - IBIRAPUERA DA COMARCA DA CAPITAL - 61.486.650/0001-83').click()
        cy.get('#\\:r5\\:').click()
        cy.get('[data-testid="SourceOutlinedIcon"]').eq(0).click()
        cy.get('.MuiDataGrid-row > [data-field="dataHoraOperacao"]').should('exist').log('Existe campo preenchido de data')
        cy.get('.MuiDataGrid-row > [data-field="usuarioOneData"]').should('exist').log('Campo "Editado Por"') 
        cy.get('[data-field="nomeColuna"] > .MuiDataGrid-cellContent').should('exist').log('Existe "campo Editado"')
        cy.get('.MuiDataGrid-row > [data-field="valorAnterior"]').should('exist').log('Existe o "de"')
        cy.get('.css-1ukpj3t > .MuiDataGrid-root > .MuiDataGrid-main > .MuiDataGrid-virtualScroller > .MuiDataGrid-virtualScrollerContent > .MuiDataGrid-virtualScrollerRenderZone > .MuiDataGrid-row > .MuiDataGrid-cell--withRenderer > .MuiBox-root').should('exist').log('Existe o "para"')
        

        
        
    });
});