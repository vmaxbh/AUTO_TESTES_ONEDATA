/// <reference types="cypress" />
let data;


before(() => {
    cy.fixture('example').then((tdata) => {
        data = tdata;

    });

});

export function login_dev() {
    cy.visit(data.url_dev);
    cy.get('#username').type(data.username_OneData);
    cy.get('#password').type(data.password_OneData);
    cy.get('#kc-login').click();
}


describe('Teste Login', () => {
    it('Teste Login', () => {
        
        login_dev();
       
    });
});

