describe('Eylemmetotlari-doubleclick() Metodu', () => {
    it('double click() Metodunun Kullanimi', () => {
        cy.visit('https://www.letskodeit.com/practice');

        //checkboxes
        //tumunu sec

        cy.get('[type="checkbox"][name="cars"]').check().should('be.checked');
        cy.get('[type="checkbox"][name="cars"]').uncheck().should('not.be.checked');
        
        cy.get('[type="checkbox"][name="cars"]').first().check().should('be.checked');

        //Value ile check();secme islemi

        cy.get('[type="checkbox"][name="cars"]').check('benz').should('be.checked');

        //value ile uncheck() yapma;secimi kaldir
        cy.get('[type="checkbox"][name="cars"]').uncheck('benz');

        //Birden fazla secim yapma

        cy.get('[type="checkbox"][name="cars"]').check(['benz','bmw']);

        //birden fazla secim kaldirma
        cy.get('[type="checkbox"][name="cars"]').uncheck(['bmw','benz','honda']);

        //RADIO BUTTONS 

        cy.get('[type="radiobutton"][name="cars"]').check().should('be.checked');

        //value ile secim

        cy.get('[type="radiobutton"][name="cars"]').check('benz').should('be.checked');



    });
});