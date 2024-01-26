describe('CSS selector', () => {
    it('CSS selector ile konum Belirleme', () => {
        cy.visit('https://www.kitapyurdu.com');
        cy.get('#search-input');

        cy.get('.logo-icon');

        cy.get('input');

        cy.get('[name="search_keyword"]');
        cy.get('[class="top-menu fr"]');
        cy.get('input[name="search_keyword"]');
        cy.get('div[name="search_keyword"]');
        cy.get('div[name="search_keyword"][type="text"]');
        
    });
});