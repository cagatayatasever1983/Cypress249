describe('Eylem Metotlari-scrollTo() Metodu', () => {
    it('selectFile() Metodunun Kullanimi', () => {
        cy.visit('https://www.webdriveruniversity.com/');

        //Dosya Sec butonu ile ekleme yapma
        cy.get('#myFile').selectFile('package.json');

        //Surukle birak ile dosya yuklme

        cy.get('#myFile').selectFile('package.json',{action:"drag-drop"});
        
    });
});