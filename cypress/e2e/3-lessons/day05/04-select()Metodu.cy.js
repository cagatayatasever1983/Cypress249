describe('Eylem Metotlari-select() Metodu ', () => {
    it('select() Metodunun Kullanimi', () => {
        cy.visit('https://www.letskodeit.com')

        //Metin ile secim yapma

        cy.get('#carselect').select('Benz');
        cy.wait(1000);

        //Value ile secim yapma
        cy.get('#carselect').select('honda');

        //Index ile secme

        cy.get('#carselect').select(0);

        //Secili olani bulma

        cy.get('#carselect option:selected').should('have.text','BMW');

        //Metin ile coklu secim yapma

        cy.get('#multiple-select-example').select(['Apple','Orange','Peach']);

        //Value ile coklu secim

        cy.get('#multiple-select-example').select(['apple','orange','peach']);

        //Index ile coklu secim
        cy.get('#multiple-select-example').select([1,2]);
        


        
    });
});