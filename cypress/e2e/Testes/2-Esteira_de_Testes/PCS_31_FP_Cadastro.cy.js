/// <reference types="cypress" />
let data;

import { Nav_Cadastro_FP, Preench_Cadastro_FP, Preench_Cadastro_Parceria_FP, Preench_Cadastro_PesqClini_FP, login_hml } from './login_hml.cy.js';

before(() => {
    cy.fixture('example').then((tdata) => {
        data = tdata;

    });

});

describe('PCS_31 Cadastro de Fonte Pagadora ', () => {
    it('PCS_31-Cenário 1-Validar campos após escolha fonte pagadora Operadora', () => {
        login_hml()
            cy.screenshot('pcs_31_cen1_val-camp-cad-Opera_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen1_val-camp-cad-Opera_02')
            cy.get('#\\:r7\\:').type('02.866.602/0001-51')
            cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Operadora').type('{downarrow}{enter}')
            cy.get('#\\:r7\\:').should('exist')
            cy.get('#\\:r8\\:').should('exist')
            cy.get('#\\:r9\\:').should('exist')
            cy.get('#\\:rp\\:').should('exist')
            cy.get('#\\:rq\\:').should('exist')
            cy.get('#\\:rc\\:').should('exist')
            cy.get('#\\:rd\\:').should('exist')
            cy.get('#\\:re\\:').should('exist')
            cy.get('#\\:rf\\:').should('exist')
            cy.get('#\\:rg\\:').should('exist')
            cy.get('#\\:rh\\:').should('exist')
            cy.get('#\\:ri\\:').should('exist')
            cy.get('#\\:rj\\:').should('exist')
            cy.get('#\\:rk\\:').should('exist')
            cy.get('#\\:rl\\:').should('exist')
            cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root').should('exist')
            cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiTypography-root').should('exist')
            cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').should('exist')
            cy.get(':nth-child(4) > .MuiFormControlLabel-root > .MuiTypography-root').should('exist')
            cy.get(':nth-child(5) > .MuiFormControlLabel-root > .MuiTypography-root').should('exist')
            cy.get(':nth-child(6) > .MuiFormControlLabel-root > .MuiTypography-root').should('exist')
            cy.get(':nth-child(7) > .MuiFormControlLabel-root > .MuiTypography-root').should('exist')
            cy.get(':nth-child(8) > .MuiFormControlLabel-root > .MuiTypography-root').should('exist')
            cy.get(':nth-child(9) > .MuiFormControlLabel-root > .MuiTypography-root').should('exist')
            cy.screenshot('pcs_31_cen1_val-camp-cad-Opera_03')

               
        
    });

    it('PCS_31-Cenário 1-Validar campos após escolha fonte pagadora Parceria', () => {
        login_hml()
            cy.screenshot('pcs_31_cen1_val-camp-cad-parc_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen1_val-camp-cad-parc_02')
            cy.get('#\\:r7\\:').type('02.866.602/0001-51')
            cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Parceria').type('{downarrow}{enter}')
            cy.get('#\\:r7\\:').should('exist')
            cy.get('#\\:r8\\:').should('exist')
            cy.get('#\\:r9\\:').should('exist')
            cy.get('#\\:rc\\:').should('exist')
            cy.get('#\\:rd\\:').should('exist')
            cy.get('#\\:re\\:').should('exist')
            cy.get('#\\:rf\\:').should('exist')
            cy.get('#\\:rg\\:').should('exist')
            cy.get('#\\:rh\\:').should('exist')
            cy.get('#\\:ri\\:').should('exist')
            cy.get('#\\:rj\\:').should('exist')
            cy.get('#\\:rk\\:').should('exist')
            cy.get('#\\:rl\\:').should('exist')
            cy.screenshot('pcs_31_cen1_val-camp-cad-parc_03')
        

    });
   
    it('PCS_31-Cenário 1-Validar campos após escolha fonte pagadora Pesquisa Clínica', () => {
        login_hml()
            cy.screenshot('pcs_31_cen1_val-camp-cad-pesqui-clini_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen1_val-camp-cad-pesqui-clini_02')
            cy.get('#\\:r7\\:').type('02.866.602/0001-51')
            cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Pesquisa clínica').type('{downarrow}{enter}')
            cy.get('#\\:r7\\:').should('exist')
            cy.get('#\\:r8\\:').should('exist')
            cy.get('#\\:r9\\:').should('exist')
            cy.get('#\\:rc\\:').should('exist')
            cy.get('#\\:rd\\:').should('exist')
            cy.get('#\\:re\\:').should('exist')
            cy.get('#\\:rf\\:').should('exist')
            cy.get('#\\:rg\\:').should('exist')
            cy.get('#\\:rh\\:').should('exist')
            cy.get('#\\:ri\\:').should('exist')
            cy.get('#\\:rj\\:').should('exist')
            cy.get('#\\:rk\\:').should('exist')
            cy.get('#\\:rl\\:').should('exist')
            cy.screenshot('pcs_31_cen1_val-camp-cad-pesqui-clini_03')
                   
        
    });

    let cnpjGerado_cen2;

  
    it('PCS_31-Cenário 3-Cadastro Fonte Pagadora Operadora', () => {
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
            cy.screenshot('pcs_31_cen3_cad-Opera_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen3_cad-Opera_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_FP()
            cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').click()
            cy.screenshot('pcs_31_cen3_cad-Opera_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen3_cad-Opera_04')
            
           
                                
            
       });
        
        
               
    });

    it('PCS_31-Cenário 3-Cadastro Fonte Pagadora Parceria', () => {
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
            cy.screenshot('pcs_31_cen3_cad-parc_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen3_cad-parc_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_Parceria_FP()
            cy.screenshot('pcs_31_cen3_cad-parc_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen3_cad-parc_04')
            
                                     
            
       });
        
               
    });

    it('PCS_31-Cenário 3-Cadastro Fonte Pagadora Pesquisa Clinica', () => {
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
            cy.screenshot('pcs_31_cen3_cad-pesqui-clini_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen3_cad-pesqui-clini_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_PesqClini_FP()
            cy.screenshot('pcs_31_cen3_cad-pesqui-clini_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen3_cad-pesqui-clini_04')
                                            
            
       });
        
               
    });

  
   
    it('PCS_31-Cenário 4-Validação de msg de erro no Cadastro Fonte Pagadora Operadora', () => {
        login_hml()
            cy.screenshot('pcs_31_cen4_val-erro-camp-cad-Opera_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen4_val-erro-camp-cad-Opera_02')
            cy.get('#\\:r7\\:').type('12345')
            cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Operadora').type('{downarrow}{enter}')
            cy.get('#\\:r1\\:').click()
            cy.get('#\\:r7\\:-helper-text').should('contain', 'CNPJ inválido')
            cy.get('#\\:r8\\:-helper-text').should('contain', 'Razão Social é de preenchimento obrigatório.')
            cy.get('#\\:r9\\:-helper-text').should('contain', 'Denominação é de seleção obrigatória.')
            cy.get('#\\:rp\\:-helper-text').should('contain', 'Cód da Operadora na ANS deve ser informado para este tipo de Fonte Pagadora')
            cy.get('#\\:rq\\:-helper-text').should('contain', 'Versão TISS deve ser informada para este tipo de Fonte Pagadora')
            cy.screenshot('pcs_31_cen4_val-erro-camp-cad-Opera_03')    
        
    });

    it('PCS_31-Cenário 4-Validação de msg de erro no Cadastro Fonte Pagadora Parceria', () => {
        login_hml()
            cy.screenshot('pcs_31_cen4_val-erro-camp-cad-Parc_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen4_val-erro-camp-cad-Parc_02')
            cy.get('#\\:r7\\:').type('12345')
            cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Parceria').type('{downarrow}{enter}')
            cy.get('#\\:r1\\:').click()
            cy.get('#\\:r7\\:-helper-text').should('contain', 'CNPJ inválido')
            cy.get('#\\:r8\\:-helper-text').should('contain', 'Razão Social é de preenchimento obrigatório.')
            cy.get('#\\:r9\\:-helper-text').should('contain', 'Denominação é de seleção obrigatória.')
            cy.screenshot('pcs_31_cen4_val-erro-camp-cad-Parc_03')
       
        
    });

    it('PCS_31-Cenário 4-Validação de msg de erro no Cadastro Fonte Pagadora Pesquisa Clinica', () => {
        login_hml()
            cy.screenshot('pcs_31_cen4_val-erro-camp-cad-Pesq-clin_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen4_val-erro-camp-cad-Pesq-clin_02')
            cy.get('#\\:r7\\:').type('12345')
            cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Pesquisa clínica').type('{downarrow}{enter}')
            cy.get('#\\:r1\\:').click()
            cy.get('#\\:r7\\:-helper-text').should('contain', 'CNPJ inválido')
            cy.get('#\\:r8\\:-helper-text').should('contain', 'Razão Social é de preenchimento obrigatório.')
            cy.get('#\\:r9\\:-helper-text').should('contain', 'Denominação é de seleção obrigatória.')
            cy.screenshot('pcs_31_cen4_val-erro-camp-cad-Pesq-clin_03')
        
    });

  
    it('PCS_31-Cenário 6-Validação de cnpj fora do padrão Cadastro Fonte Pagadora Operadora', () => {
        login_hml()
            cy.screenshot('pcs_31_cen6_val-erro-cnpj_errado-Pesq-clin_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen6_val-erro-cnpj_errado-Pesq-clin_02')
            cy.get('#\\:r7\\:').type('12345')
            cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Operadora').type('{downarrow}{enter}')
            cy.get('#\\:r1\\:').click()
            cy.get('#\\:r7\\:-helper-text').should('contain', 'CNPJ inválido')
            cy.screenshot('pcs_31_cen6_val-erro-cnpj_errado-Pesq-clin_03')
        
            
    });
    it('PCS_31-Cenário 7-Validação de preenchimento de cnpj ja cadastrado Cadastro Fonte Pagadora Operadora', () => {
        login_hml()
            cy.screenshot('pcs_31_cen7_val-erro-cnpj_existente-Pesq-clin_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen7_val-erro-cnpj_existente-Pesq-clin_02')
            cy.get('#\\:r7\\:').type('28134969000174')
            cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Operadora').type('{downarrow}{enter}')
            cy.get('#\\:r9\\:').type('dasa')
            cy.get('#\\:rp\\:').type('416428')
            cy.get('#\\:rq\\:').type('04.00.01')
            cy.get('#\\:ra\\:').type('Observações de QA para teste')
            cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').click()
            cy.screenshot('pcs_31_cen7_val-erro-cnpj_existente-Pesq-clin_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(1000)
            cy.get('.css-dsrez5 > .MuiBox-root > .MuiTypography-body1').should('contain', 'Ja existe uma outra Fonte Pagadora com esse CNPJ!')
            cy.screenshot('pcs_31_cen7_val-erro-cnpj_existente-Pesq-clin_04')
        
        
    });

    it('PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis apenas "Planos”', () => {
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
            cy.screenshot('pcs_31_cen8_cad-Opera_var_plano_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_plano_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_FP()
            cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Plano').click()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_plano_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen8_cad-Opera_var_plano_04')
            
                        
       });
        
               
    });

    it('PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis apenas "Rede de atendimento”', () => {
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
            cy.screenshot('pcs_31_cen8_cad-Opera_var_Red-Atend_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_Red-Atend_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_FP()
            cy.get(':nth-child(4) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Rede de atendimento').click()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_Red-Atend_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen8_cad-Opera_var_Red-Atend_04')
                        
            
       });
        
               
    });

    it('PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Plano” e “Produto”', () => {
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
            cy.screenshot('pcs_31_cen8_cad-Opera_var_plan-produ_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_plan-produ_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_FP()
            cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Plano').click()
            cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Produto').click()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_plan-produ_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen8_cad-Opera_var_plan-produ_04')
                   
       });
        
               
    });

    it('PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Rede de atendimento” e “Tipo contrato”', () => {
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
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoContrat_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoContrat_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_FP()
            cy.get(':nth-child(4) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Rede de atendimento').click()
            cy.get(':nth-child(8) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Tipo de contrato').click()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoContrat_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoContrat_04')
                   
       });
        
               
    });

    it('PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Rede de atendimento” e “Tipo de acomodação”', () => {
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
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoAcomod_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoAcomod_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_FP()
            cy.get(':nth-child(4) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Rede de atendimento').click()
            cy.get(':nth-child(6) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Tipo de acomodação').click()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoAcomod_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoAcomod_04')
                   
       });
        
               
    });

    it('PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis , “Plano”, “Produto” e “Tipo contrato”', () => {
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
            cy.screenshot('pcs_31_cen8_cad-Opera_var_prod-plan-tipoContr_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_prod-plan-tipoContr_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_FP()
            cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Plano').click()
            cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Produto').click()
            cy.get(':nth-child(8) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Tipo de contrato').click()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_prod-plan-tipoContr_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen8_cad-Opera_var_prod-plan-tipoContr_04')
                              
       });
        
               
    });

    it('PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis“Rede de atendimento”, “Código Identificador” e “Abrangência”', () => {
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
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-codIdenti-abrange_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-codIdenti-abrange_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_FP()
            cy.get(':nth-child(4) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Rede de atendimento').click()
            cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Código identificador').click()
            cy.get(':nth-child(9) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Abrangência').click()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-codIdenti-abrange_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-codIdenti-abrange_04')
                   
       });
        
               
    });

    it('PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Rede de atendimento”, “Tipo de acomodação” e “Segmentação assistencial”', () => {
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
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoAcom-segmAss_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoAcom-segmAss_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_FP()
            cy.get(':nth-child(4) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Rede de atendimento').click()
            cy.get(':nth-child(6) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Tipo de acomodação').click()
            cy.get(':nth-child(7) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Segmentação assistencial').click()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoAcom-segmAss_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen8_cad-Opera_var_redeAtend-tipoAcom-segmAss_04')
                     
       });
        
               
    });

    it('PCS_31-Cenário 8-Cadastro Fonte Pagadora Operadora Variáveis “Produto”, “Plano”,  “Tipo contrato” e “Tipo de acomodação”', () => {
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
            cy.screenshot('pcs_31_cen8_cad-Opera_var_produt-plano-tipoContr-tipoAcomod_01')
            Nav_Cadastro_FP()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_produt-plano-tipoContr-tipoAcomod_02')
            cy.get('#\\:r7\\:').type(cnpjGerado_cen2)
            Preench_Cadastro_FP()
            cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Produto').click()
            cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Plano').click()
            cy.get(':nth-child(8) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Tipo de contrato').click()
            cy.get(':nth-child(6) > .MuiFormControlLabel-root > .MuiTypography-root').should('contain', 'Tipo de acomodação').click()
            cy.screenshot('pcs_31_cen8_cad-Opera_var_produt-plano-tipoContr-tipoAcomod_03')
            cy.get('#\\:r1\\:').click()
            cy.wait(2000)
            cy.screenshot('pcs_31_cen8_cad-Opera_var_produt-plano-tipoContr-tipoAcomod_04')
                                     
       });
                   
    });
    
});


