describe('XPATH', () => {
    it('XPATH ile locate alma', () => {

        cy.visit("https://www.kitapyurdu.com");

        cy.xpath('//input');

        cy.xpath('//*[@id="search"]');

        cy.xpath('//input[@id="search"]');
        cy.xpath('//a[text()="Giris Yap"]');

        cy.xpath('//*[@id="search-input" and @name ="search_keyword"]');
        

        
    });
});