/// <reference types="cypress" />



let data;

before(() => {
    cy.fixture('example').then((tdata) => {
        data = tdata;

    });

});
describe('Cenário de Login Caminho Feliz!', () => {
    it('Estou na pagina de login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.log('Pagina de login aberta com sucesso!')
        cy.get('[data-test="username"]').type(data.username)
        cy.log('Usuário incluido com sucesso!')
        cy.get('[data-test="password"]').type(data.password)
        cy.log('Senha incluida com sucesso!')
        cy.get('[data-test="login-button"]').click()
        cy.log('Botão de logar clicado com sucesso!')
        cy.get('.title').should('contain', 'Products')

    });

});

describe('Cenário de Login usuário inválido!', () => {
    it('Conferindo usuário Inválido', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.log('Pagina de login aberta com sucesso!')
        cy.get('[data-test="username"]').type('usuario invalido')
        cy.log('Usuário incluido com sucesso!')
        cy.get('[data-test="password"]').type(data.password)
        cy.log('Senha incluida com sucesso!')
        cy.get('[data-test="login-button"]').click()
        cy.log('Botão de logar clicado com sucesso!')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')

    });

});

describe('Cenário de Login senha inválida!', () => {
    it('Conferindo senha inválida', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.log('Pagina de login aberta com sucesso!')
        cy.get('[data-test="username"]').type(data.username)
        cy.log('Usuário incluido com sucesso!')
        cy.get('[data-test="password"]').type('senha invalida')
        cy.log('Senha incluida com sucesso!')
        cy.get('[data-test="login-button"]').click()
        cy.log('Botão de logar clicado com sucesso!')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')

    });

});

describe('Automação de Coleta de Cnpj', () => {
    it('Acesso e teste de coleta de cnpj', () => {
        
        cy.visit('https://www.invertexto.com/gerador-de-cnpj')
        cy.get('#gerar').click()
        cy.get('#cnpj').invoke('val').then((cnpjCopiado) => {
            cy.visit('https://www.invertexto.com/gerador-de-cpf')
            cy.get('#gerar').click()
            cy.get('#cpf').invoke('val').then((cpfCopiado) => {
                cy.log(cpfCopiado)
                cy.visit('https://www.saucedemo.com/')
                cy.log('Pagina de login aberta com sucesso!')
                cy.get('[data-test="username"]').type(cpfCopiado)
                cy.get('[data-test="username"]').type(' / ')
                cy.get('[data-test="username"]').type(cnpjCopiado)
                     

        });
            
       });
       
        
    });
    it('Acesso e teste de coleta de cpf', () => {
        
        cy.visit('https://www.invertexto.com/gerador-de-cpf')
        cy.get('#gerar').click()
        cy.get('#cpf').invoke('val').then((cpfCopiado) => {
            cy.log(cpfCopiado)
            cy.visit('https://www.saucedemo.com/')
            cy.log('Pagina de login aberta com sucesso!')
            cy.get('[data-test="username"]').type(cpfCopiado)
            

        });
       
        
    });
});


describe('Automação de Coleta de CPF', () => {
    it('Acesso e teste de coleta de cpf', () => {
        
        cy.visit('https://www.invertexto.com/gerador-de-cpf')
        cy.get('#gerar').click()
        cy.get('#cpf').invoke('val').then((cpfCopiado) => {
            cy.log(cpfCopiado)
            cy.visit('https://www.saucedemo.com/')
            cy.log('Pagina de login aberta com sucesso!')
            cy.get('[data-test="username"]').type(cpfCopiado)
            

        });
       
        
    });
});
