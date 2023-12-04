/// <reference types="cypress" />
let data;
import { Nav_Cadastro_FP, Nav_Consulta_FP, Preench_Cadastro_FP, Preench_Cadastro_Parceria_FP, Preench_Cadastro_PesqClini_FP, login_hml } from './login_hml.cy.js';
let cnpjGerado_cen2;

before(() => {
    cy.fixture('example').then((tdata) => {
        data = tdata;

    });

});

describe('PCS_40-Histórico de cadastro e Edição de Fonte Pagadora', () => {
    it('PCS_40-Cenário 1-Histórico de quem e quando com data e horário cadastro realizado', () => {
        login_hml()
        cy.screenshot('PCS_40-Cenário1_usuario-data-cadastro-historico_01') 
        Nav_Consulta_FP()
        cy.screenshot('PCS_40-Cenário1_usuario-data-cadastro-historico_02') 
        cy.get('#\\:r3\\:').type('45.841.515/0001-52') 
        cy.get('#\\:r4\\:').click()  
        cy.get('[data-testid="SourceOutlinedIcon"]').click()        
        cy.wait(500)
        cy.get(':nth-child(2) > .css-ojpuqs')
        .invoke('text')
        .then((text) => {
            if (text.trim() !== "") {
                cy.log('Usuário que criou cadastro existe no modal de histórico');
            } else {
                cy.log('Os dados da criação do cadastro não existem modal de histórico');
            }
        });
        cy.get(':nth-child(3) > .css-ojpuqs')
        .invoke('text')
        .then((text) => {
            if (text.trim() !== "") {
                cy.log('Data foi Gerada no modal de histórico');
            } else {
                cy.log('Os dados da Data do cadastro não existem modal de histórico');
            }
        });

        cy.screenshot('PCS_40-Cenário1_usuario-data-cadastro-historico_03')                             
            
       
            
               
    });



    it('PCS_40-Cenário 2 e 3-Histórico de quem e quando, com data e horário, de → para de edição do cadastro realizado', () => {
        login_hml()
        cy.screenshot('PCS_40-Cenário2 e 3_edição-usuario-data e hora-de → para-historic_01') 
        Nav_Consulta_FP()
        cy.screenshot('PCS_40-Cenário2 e 3_edição-usuario-data e hora-de → para-historic_02') 
        cy.get('#\\:r3\\:').type('45.841.515/0001-52') 
        cy.get('#\\:r4\\:').click()  
        cy.get('[data-testid="EditOutlinedIcon"]').click()
        cy.get('#\\:r1m\\:').type('{selectall}{del}')
        cy.get('#\\:r1m\\:').type('FUNDAÇÃO ANTONIO PRUDENTE LTDA')
        cy.get('#\\:r1g\\:').click()
        cy.screenshot('PCS_40-Cenário2 e 3_edição-usuario-data e hora-de → para-historic_03') 
        cy.get('[data-testid="SourceOutlinedIcon"]').click()
            cy.get('.MuiDataGrid-row > [data-field="dataHoraOperacao"]')
            .invoke('text')
            .then((text) => {
                if (text.trim() !== "") {
                    cy.log('Data e hora da edição foi gerada no modal de histórico');
                } else {
                    cy.log('Os dados da Data e hora da edição do cadastro não existem modal de histórico');
                }
            });

            cy.get('.MuiDataGrid-row > [data-field="usuarioOneData"]')
            .invoke('text')
            .then((text) => {
                if (text.trim() !== "") {
                    cy.log('Usuário da edição foi gerado no modal de histórico');
                } else {
                    cy.log('Os dados da Data e hora da edição do cadastro não existem modal de histórico');
                }
            });

            cy.get('[data-field="nomeColuna"] > .MuiDataGrid-cellContent')
            .invoke('text')
            .then((text) => {
                if (text.trim() !== "") {
                    cy.log('Campo editado foi gerado no modal de histórico');
                } else {
                    cy.log('Os dados do campo editado do cadastro não existem modal de histórico');
                }
            });

            cy.get('.MuiDataGrid-row > [data-field="valorAnterior"]')
            .invoke('text')
            .then((text) => {
                if (text.trim() !== "") {
                    cy.log('de → para foi gerado no modal de histórico');
                } else {
                    cy.log('Os dados do de → para editado do cadastro não existem modal de histórico');
                }
            });
            cy.contains('FUNDAÇÃO ANTONIO PRUDENTE LTDA')
            cy.screenshot('PCS_40-Cenário2 e 3_edição-usuario-data e hora-de → para-historico_04')

        
       
           
        
    });






  

    
    
});
