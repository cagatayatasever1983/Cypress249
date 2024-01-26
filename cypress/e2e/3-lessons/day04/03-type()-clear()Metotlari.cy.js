describe('Eylem metotlari-type() ve clear() metotlari', () => {
    it('type() ve clear() metotlarin kullanimi', () => {

        cy.visit('https://www.letskodeit.com/practice');

        //type() normal kullanimi
        cy.get('#enabled-example-input').type('Techproe');

        //option ile kullanimi
        //Force

        cy.get('#disabled-button').click();
        cy.get('#enabled-example-input').type('Techproe',{force:true});

        //Sequence

        cy.get('#enabled-example-input').type('asfd{backspace}')
        
    });

    it.only("Kitap yurdu arama motorunda sequence kullanim",()=>{
        cy.visit('https://www.kitapyurdu.com/');
        cy.get('#search-input').type('Pyhton{enter}')
    })
});