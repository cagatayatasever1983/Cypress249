describe('Metot Zinciri', () => {
    it('Metot Zinciri kullanimi', () => {

        //1-Go to the website
        cy.visit('https://automationteststore.com')

        //2-Click contactus which at the bottom of the page

        
        cy.get('.info_links_footer').contains('Contact Us').click();
        cy.get('#ContactUsFrm').within(()=>{
            cy.get('#ContactUsFrm_first_name').type('Cagatay');
            cy.get('#ContactUsFrm_email').type('cagatayatasever1983@gmail.com');
            cy.get('#ContactUsFrm_enquiry').type('I have to leave as soon as possible');
            cy.get('[type="submit"]').click();

        })

        cy.get('.mb40').find('p').should('exist').and('be.visible').and('have.text','Your enquiry has been successfully sent to the store owner!');
       
        
        
    });
});