
describe('TesteAvansate', () =>{
    // it('Test news page', () =>{
    //     cy.visit('https://www.digi24.ro/stiri/actualitate/social/scandalul-puiului-vopsit-seful-ansvsa-le-transmite-romanilor-orice-aliment-pe-care-punem-mana-are-salmonella-2738235');
    //     cy.get('#onetrust-accept-btn-handler').click();
    //     cy.url().should('include', 'vopsit');
    // });

    // it('Test delay', () =>{
    //         cy.visit('https://www.google.com');
    //         cy.get('#L2AGLb > .QS5gu').click();
    //         cy.get('#APjFqb').click();
    //         cy.wait(1000); // 10 secunde 1000 = 1 sec
    //         cy.get('#APjFqb').type('Waits 10 seconds');
    // });

    // it('Selector ALT type logo', () => {
    //     cy.visit('https://www.google.com');
    //     cy.get('#L2AGLb > .QS5gu').click();
    //     cy.get('#APjFqb').click();
    //     cy.get('[alt="Google"]').should('be.visible');//Selector atribut alt + assertion cu visible
    // });

    // it('ScreenshotPage', () =>{
    //     cy.visit('https://www.google.com');
    //     cy.get('#L2AGLb > .QS5gu').click();
    //     cy.screenshot(); //Makes the screenshot
    // });

    // it('Verify value from input', () =>{
    //     cy.visit('https://www.google.com');
    //     cy.get('#L2AGLb > .QS5gu').click();
    //     const googleSearch = cy.get('#APjFqb'); //constanta
    //     googleSearch.type('123');
    //     googleSearch.should('have.value', '123'); //Assertul
    // });

    it('Input value check', () =>{
        cy.visit('https://www.libris.ro');
        cy.get('.consent-mode-modal-btn-accept-ct > a').click();
        cy.wait(15000);
        cy.get('.modal-content > .close').click();
        cy.get('#autoCompleteButton').should('have.class','onSearchClick'); //anyclass on the button? 
        
    })


})