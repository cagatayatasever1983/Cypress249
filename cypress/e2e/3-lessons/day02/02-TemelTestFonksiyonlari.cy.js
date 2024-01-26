describe('Temel Test Fonksiyonlari', () => {
    it('visit(),get(),type(),should fonksiyonlarinin kullanimi', () => {
        cy.visit('URL');
        //visit() fonksiyonu bir URL i ziyaret etmek icin kullanilir

        cy.get("locator").click();
        cy.get("locator").type("metin").should("dogrulayici","dogrulanacak metin");

        
    });
});