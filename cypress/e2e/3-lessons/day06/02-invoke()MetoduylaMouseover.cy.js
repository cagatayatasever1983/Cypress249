describe('Mouseover Islemi', () => {
    it('invoke() Metodu ile Mouseover', () => {

        cy.visit('https://www.letskodeit.com');


        cy.get('#mouseover').scrollIntoView();

        cy.get('[class="mouse-hover-content"]]').invoke('show');

        
    });
    it("invoke() Metoduyla Mouseover-ebay sitesi",()=>{
        cy.visit('https://www.ebay.com');
        cy.get('#gh-eb-My-o').invoke('show');
        cy.contains('Messages').click();
        
    })

});