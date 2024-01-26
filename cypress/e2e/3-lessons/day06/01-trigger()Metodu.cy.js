describe('Eylem Metotlari -trigger() komutlari', () => {
    it('trigger() Metodunun Kullanimi', () => {

        cy.visit('https://www.webdriveruniversity.com/');
        cy.get('#mousehover').trigger('mouseover');
        cy.get('[href="#top"]').click({force:true});


        
    });

    it("trigger() Metodunun Kullanimi-Amazon Sitesi",()=>{

        cy.visit('https://www.amazon.com/');
        cy.get('#nav-link').trigger('mouseover');
        cy.get('#icp-nav-flayout').trigger('mouseover');
        
    })
});