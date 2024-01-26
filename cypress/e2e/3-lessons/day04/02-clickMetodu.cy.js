describe('Eylem Komutlari-click metodu', () => {
    it('click() metodunun kullanimi', () => {
        //Elementin merkezine tiklama
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('#opentab').click();


        //Elementin farkli konumlarina tiklama
        // cy.get('#opentab').click('topLeft');
        // cy.get('#opentab').click('topRight');
        // cy.get('#opentab').click('top');
        // cy.get('#opentab').click('left');
        // cy.get('#opentab').click('bottomLeft');
        // cy.get('#opentab').click('bottom');

        cy.get('[type="checkbox"][name="cars"]').click({multiple:true});
        cy.get('#mousehover').click({scrollBehavior:'bottom'});
        


    });
});