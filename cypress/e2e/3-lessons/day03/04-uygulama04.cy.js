describe('Uygulama-04', () => {
    it('Xpath Kullanimi', () => {
        
        cy.visit('https://www.kitapyurdu.com/');
        cy.url().should('include','kitapyurdu'); // Corrected the typo here
        cy.title().should('contain','Kitapyurdu');
        cy.xpath('//a[.="Üye Ol"]').click();
        cy.xpath('//input[@id="register-name"]').type('Cagatay').should('have.value','Cagatay');
        
    });
});
