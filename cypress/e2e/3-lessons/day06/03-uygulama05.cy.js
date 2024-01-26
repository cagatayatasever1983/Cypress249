describe('Eylem Komutlari', () => {
    it('Eylem Komutlari ile ilgili', () => {

        cy.visit('')
        cy.get().click();
        cy.get('#loginFrm').within(()=>{
            cy.get('#loginFirm_loginname').clear().type('techpro');
            cy.get('button').click();
        });
        cy.get('#customer_menu_top').trigger('mouseover');
        cy.get().invoke('show');
        cy.contains('Manage ').click();
        cy.get('').click();
        cy.get('#AddressFirm').select('Malaysia');
        cy.get('.alert').should('exist').and('have.text','').and('contain','');
        



        
    });
});