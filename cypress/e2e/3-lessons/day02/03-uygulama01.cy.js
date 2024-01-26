describe('Uygulama-01', () => {
    it('temel fonksiyonlarin kullanimi', () => {

        cy.visit('https://www.kitapyurdu.com');
        cy.get('.register > a').click();
        cy.get('#register-name').type('Cagatay').should('have.value','Cagatay');

        
        
    });
});