/// <reference types="cypress" />
let data;


before(() => {
    cy.fixture('example').then((tdata) => {
        data = tdata;

    });

});


export function login_hml() {
    cy.visit(data.url);
    cy.wait(1000)
    cy.get('#username').type(data.username_OneData);
    cy.wait(1000)
    cy.get('#password').type(data.password_OneData);
    cy.wait(1000)
    cy.get('#kc-login').click();
}


export function consulta_plano(){
    cy.get('[href="/consultar-cadastro"]').click().log('Acessando campo de consulta de cadastro de Plano')
    cy.get('#ddlTipoCadastro').click()
    cy.get('a[href="/consultar-cadastro/planos"]').click()

}

export function Nav_Cadastro_PL(){
    cy.get('[href="/novo-cadastro"]').click()
    cy.get('#ddlTipoCadastro').click()
    cy.get('[data-value="create-planos"]').click()

}


export function Nav_Cadastro_FP(){
    cy.get('[href="/novo-cadastro"]').click()
    cy.get('#ddlTipoCadastro').click()
    cy.get('[data-value="create-fonte-pagadora"]').click()

}

export function Preench_Cadastro_FP(){
    cy.wait(1000)
    cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Operadora').type('{downarrow}{enter}')
    cy.wait(1000)
    cy.get('#\\:r8\\:').type('{selectall}{del}')
    cy.wait(1000)
    cy.get('#\\:r8\\:').type('TESTE AUTO CYPRESS QA LTDA')
    cy.get('#\\:r9\\:').type('dasa')
    cy.get('#\\:rp\\:').type('416428')
    cy.get('#\\:rq\\:').type('04.00.01')
    cy.get('#\\:ra\\:').type('Observações de QA para teste')
    cy.wait(500)
    cy.get('#\\:rb\\:').type('{selectall}{del}')
    cy.get('#\\:rb\\:').type('30510000')
    cy.wait(500)
    cy.get('#\\:rd\\:').type('{selectall}{del}')
    cy.get('#\\:rd\\:').type('12')
    cy.wait(500)
    cy.get('#\\:rc\\:').type('{selectall}{del}')
    cy.get('#\\:rc\\:').type('AV BRASIL')
    cy.wait(500)
    cy.get('#\\:re\\:').type('{selectall}{del}')
    cy.get('#\\:re\\:').type('CASA')
    cy.wait(500)
    cy.get('#\\:rf\\:').type('{selectall}{del}')
    cy.get('#\\:rf\\:').type('GAMELEIRA')
    cy.wait(500)
    cy.get('#\\:rg\\:').type('{selectall}{del}')
    cy.get('#\\:rg\\:').type('BELO HORIZONTE')
    cy.wait(500)
    cy.get('#\\:rh\\:').type('{selectall}{del}')
    cy.get('#\\:rh\\:').type('MG')
    cy.wait(500)
    cy.get('#\\:ri\\:').type('{selectall}{del}')
    cy.get('#\\:ri\\:').type('teste@teste.com.br')
    cy.get('#\\:rj\\:').type('{selectall}{del}')
    cy.get('#\\:rj\\:').type('21')
    cy.get('#\\:rk\\:').type('{selectall}{del}')
    cy.get('#\\:rk\\:').type('999999999')


}

export function Preench_Cadastro_PesqClini_FP(){
    cy.wait(1000)
    cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Pesquisa clínica').type('{downarrow}{enter}')
    cy.wait(1000)
    cy.get('#\\:r8\\:').type('{selectall}{del}')
    cy.wait(1000)
    cy.get('#\\:r8\\:').type('TESTE AUTO CYPRESS QA LTDA')
    cy.get('#\\:r9\\:').type('dasa')
    cy.get('#\\:ra\\:').type('Observações de QA para teste')
    cy.wait(500)
    cy.get('#\\:rb\\:').type('{selectall}{del}')
    cy.get('#\\:rb\\:').type('30510000')
    cy.wait(500)
    cy.get('#\\:rd\\:').type('{selectall}{del}')
    cy.get('#\\:rd\\:').type('12')
    cy.wait(500)
    cy.get('#\\:rc\\:').type('{selectall}{del}')
    cy.get('#\\:rc\\:').type('AV BRASIL')
    cy.wait(500)
    cy.get('#\\:re\\:').type('{selectall}{del}')
    cy.get('#\\:re\\:').type('CASA')
    cy.wait(500)
    cy.get('#\\:rf\\:').type('{selectall}{del}')
    cy.get('#\\:rf\\:').type('GAMELEIRA')
    cy.wait(500)
    cy.get('#\\:rg\\:').type('{selectall}{del}')
    cy.get('#\\:rg\\:').type('BELO HORIZONTE')
    cy.wait(500)
    cy.get('#\\:rh\\:').type('{selectall}{del}')
    cy.get('#\\:rh\\:').type('MG')
    cy.wait(500)
    cy.get('#\\:ri\\:').type('{selectall}{del}')
    cy.get('#\\:ri\\:').type('teste@teste.com.br')
    cy.get('#\\:rj\\:').type('{selectall}{del}')
    cy.get('#\\:rj\\:').type('21')
    cy.get('#\\:rk\\:').type('{selectall}{del}')
    cy.get('#\\:rk\\:').type('999999999')

}

export function Preench_Cadastro_Parceria_FP(){
    cy.wait(1000)
    cy.get('.MuiGrid-grid-xs-5 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Parceria').type('{downarrow}{enter}')
    cy.wait(1000)
    cy.get('#\\:r8\\:').type('{selectall}{del}')
    cy.wait(1000)
    cy.get('#\\:r8\\:').type('TESTE AUTO CYPRESS QA LTDA')
    cy.get('#\\:r9\\:').type('dasa')
    cy.get('#\\:ra\\:').type('Observações de QA para teste')
    cy.wait(500)
    cy.get('#\\:rb\\:').type('{selectall}{del}')
    cy.get('#\\:rb\\:').type('30510000')
    cy.wait(500)
    cy.get('#\\:rd\\:').type('{selectall}{del}')
    cy.get('#\\:rd\\:').type('12')
    cy.wait(500)
    cy.get('#\\:rc\\:').type('{selectall}{del}')
    cy.get('#\\:rc\\:').type('AV BRASIL')
    cy.wait(500)
    cy.get('#\\:re\\:').type('{selectall}{del}')
    cy.get('#\\:re\\:').type('CASA')
    cy.wait(500)
    cy.get('#\\:rf\\:').type('{selectall}{del}')
    cy.get('#\\:rf\\:').type('GAMELEIRA')
    cy.wait(500)
    cy.get('#\\:rg\\:').type('{selectall}{del}')
    cy.get('#\\:rg\\:').type('BELO HORIZONTE')
    cy.wait(500)
    cy.get('#\\:rh\\:').type('{selectall}{del}')
    cy.get('#\\:rh\\:').type('MG')
    cy.wait(500)
    cy.get('#\\:ri\\:').type('{selectall}{del}')
    cy.get('#\\:ri\\:').type('teste@teste.com.br')
    cy.get('#\\:rj\\:').type('{selectall}{del}')
    cy.get('#\\:rj\\:').type('21')
    cy.get('#\\:rk\\:').type('{selectall}{del}')
    cy.get('#\\:rk\\:').type('999999999')

}


export function Nav_Consulta_tipo_FP(){
    cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
    cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
    cy.get('[tabindex="0"] > a').click().log('Selecionando Tipo de "Fonte Pagadora"')
    cy.get('.Mui-selected > a').click({ force: true }).type('{enter}').log('Clicando no campo Tipo de Fonte Pagadora')
    cy.get('.css-1kyf80j > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click()

    
}

export function Nav_Consulta_Status_FP(){
    cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
    cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
    cy.get('[tabindex="0"] > a').click().log('Selecionando Tipo de "Fonte Pagadora"')
    cy.get('.Mui-selected > a').click({ force: true }).type('{enter}').log('Clicando no campo Tipo de Fonte Pagadora')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click().log('Clicando no campo Tipo de Status')

}

export function Nav_Consulta_cnpjDescri_FP(){
    cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
    cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
    cy.get('[tabindex="0"] > a').click().log('Selecionando Tipo de "Fonte Pagadora"')
    cy.get('.Mui-selected > a').click({ force: true }).type('{enter}').log('Clicando no campo Tipo de Fonte Pagadora')

}


export function Nav_Consulta_FP(){
    cy.get('[href="/consultar-cadastro"]').click({ force: true }).log('Acessar Cadastro')
    cy.get('#ddlTipoCadastro').click().log('Clicando em Tipo de Consulta')
    cy.get('[tabindex="0"] > a').click().log('Selecionando Tipo de "Fonte Pagadora"')

}

export function gerador_pessoas(){
    cy.visit('https://www.invertexto.com/gerador-de-pessoas')
    cy.get('.btn').click()
    cy.get('.col-md-18 > :nth-child(1) > :nth-child(2) > .form-control')
}

