describe('Uygulama 02', () => {
    it('Temel finksiyonlarin kullanimi-amazon ornegi', () => {
        cy.visit('https://www.amazon.nl/');

        // Check for the popup and accept if it exists
        cy.checkAndAcceptPopup();

        // Check which search field is available and use it
        cy.get('body').then(body => {
            if (body.find('#twotabsearchtextbox').length > 0) {
                cy.get('#twotabsearchtextbox').type('iphone');
            } else if (body.find('#nav-bb-search').length > 0) {
                cy.get('#nav-bb-search').type('iphone');
            }
        });

        // Click the search button and check for the popup again
        cy.get('.nav-bb-button').click();
        cy.checkAndAcceptPopup();

        // Add any other navigation or click events here and follow them with cy.checkAndAcceptPopup();

        cy.get('.a-color-state').should('contain','iphone');
    });
});
