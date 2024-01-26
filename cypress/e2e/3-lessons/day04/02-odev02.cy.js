describe('Odev02', () => {
    it('Eylem Komutlarinin kullanimi', () => {
        cy.visit('https://automationteststore.com/');
        cy.contains('Login or register').click();
        cy.get('#loginFrm').within(()=>{
            cy.get('#loginFrm_loginname').clear().type('techpro');
            cy.get('#loginFrm_password').clear().type('techpro!');
            cy.get('button').click();
        });

        cy.get('[data-original-title="Edit account details"]').click();
        cy.get('#AccountFrm_firstname').clear().type('Cagatay');
        cy.get('#AccountFrm_lastname').clear().type('Atasever');
        cy.get('#AccountFrm_email').clear().type('cagatayatasever1983@gmail.com');
        cy.get('[title="Continue"]').click();
        cy.get('.alert-success').should('contain','Success: Your account has been successfully updated.')


        
    });
});