
describe('Site-ul Google.com', () => {
    //Testul numarul 1
    it('functioneaza cu o cautare basic', () => {
        cy.visit('https://www.google.ro/');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('vlogdeit').type('{enter}');
        cy.get('#result-stats').should('exist');
    });
});

