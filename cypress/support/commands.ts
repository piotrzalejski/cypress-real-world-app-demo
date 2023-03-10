// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
declare namespace Cypress {
interface Chainable<Subject = any> {

    /**
     * Specify which user to login as. 
     * >Users are found under fixtures/user-data.json
     * @param userType
     */
    login(userType: string): void
}
}

Cypress.Commands.add("login", (userType: string ) => { 
    cy.fixture('user-data').then((data) =>{
        cy.visit('/signin');
        cy.get('#username').type(data[userType].username);
        cy.get('#password').type(data[userType].password);
        cy.intercept('POST', '/login').as('loginUser');
        cy.get('[data-test="signin-submit"]').click();
        cy.wait('@loginUser').its('response.statusCode').should('equal',200);
    });
 })

