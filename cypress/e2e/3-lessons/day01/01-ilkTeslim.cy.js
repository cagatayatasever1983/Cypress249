describe('İlk Testim', () => {
    it('true, true ile eşit mi!', () => {
        expect(true).to.equal(true)
        
        
    })



    it('true, true ile eşit mi!', () => {
        expect(true).to.be.true;
        
    })
    it('Creates a New Google Account', () => {
        // Visit Google sign-up page
        cy.visit('https://accounts.google.com/signup');
    
        // Fill in the details for the new account
        cy.get('input[name="firstName"]').type('YourFirstName');
        cy.get('input[name="lastName"]').type('YourLastName');
        cy.get('input[name="Username"]').type('YourUsername');
        cy.get('input[name="Passwd"]').type('YourPassword');
        cy.get('input[name="ConfirmPasswd"]').type('YourPassword');
    
        // Click on the next step, terms agreement, etc.
        // cy.get('#collectNameNext').click();
        
        // Continue with additional required steps (phone verification, etc.)
        // This might be challenging to automate as it often involves captcha or phone verification
    
        // Assert account creation (this will depend on the resulting page or message)
      });
    
})
