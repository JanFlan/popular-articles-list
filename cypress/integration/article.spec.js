/* global cy, Cypress */

describe('Article Page', () => {
    it('loads articles', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('NY Times Most Popular Articles');
        cy.get('li').should('have.length', 20); // assuming 20 articles are fetched
    });
});
