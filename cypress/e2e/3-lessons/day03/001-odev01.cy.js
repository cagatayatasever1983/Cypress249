describe('Odev-01', () => {
    it('CSS Selector kullanimi', () => {
        //Enter the webstie

        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

        //Do assertion with the open page and your expected paga
        cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contactus.html');

        //Do assertion whether  url includes contactus
        cy.url().should('include','contactus');

        cy.title().should('contain','Contact Us');
        const title = cy.title();
        console.log(title);

        //cy.get()==> Enter the locator into get()function

        cy.get('input[name="first_name"]').type("Cagatay").should("have.value","Cagatay");

        cy.get('input[name="last_name"]').type("Atasever").should("have.value","Atasever");

        cy.get('input[placeholder="Email Address"]').type('cagatayatasever1983@gmail.com').should("have.value",'cagatayatasever1983@gmail.com')
        cy.get('textarea[placeholder="Comments"]').type('atasever');
        cy.get('[type="submit"]').click();
        cy.get("h1").should('have.text','Thank You for your Message!');
    });
});