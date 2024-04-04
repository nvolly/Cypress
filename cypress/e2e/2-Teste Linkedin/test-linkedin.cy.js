describe('TesteLinkedin', () =>{
    //Teste linkedin
    it('TestLogare', () =>{
        cy.visit("https://linkedin.com");

        cy.get('.nav__button-secondary').click();
        cy.get('[action-type="ACCEPT"]').click();
        cy.get('#username').type('dragomirvalentin1994@yahoo.com');
        cy.get('#password').type('Mamaligutza01');
        
        cy.get('.btn__primary--large').click();
        cy.get('#ember16').should('exist');

    })
})