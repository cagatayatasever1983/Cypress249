describe('Eylem Metotlari-scrollTo() Metodu', () => {
    it('scrollTo() Metodunun Kullanimi', () => {

        cy.visit('https://www.webdriveruniversity.com/');
        //koordinat ile scroll yapma

        cy.scrollTo(0,2000);

        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top')
        
    });
});