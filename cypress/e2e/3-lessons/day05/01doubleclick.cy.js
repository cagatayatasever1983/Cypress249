describe('Eylemmetotlari-doubleclick() Metodu', () => {
    it('double click() Metodunun Kullanimi', () => {
        cy.on('uncaught:exception',(err,runnable)=>{
            return false
        })
        cy.visit('https://demoqa.com/');
        cy.get('.card-body h5').contains('Elements').click();
        cy.get('.element-list').contains('span', 'Buttons').click();
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('have.text','You have done a double click');
        cy.get('#doubleClickMessage').should('be.visible').and('exist').and('have.text','You have done a double click')
        
    });
});