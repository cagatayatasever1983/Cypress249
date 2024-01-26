describe('Alert ', () => {
    it('Alert mesajini dogrulamak', () => {
        cy.visit('');
        cy.get('').click();

        cy.on('window:alert',(mesaj)=>{
            expect(mesaj).to.equal('I am a JS Alert')
        });

        
    });

    it('Alert Mesajinda iptal butonuna basmak',()=>{

        cy.visit('');
        cy.get('').click();
        cy.on('window:confirm',()=>{
            return false

            //false degeri iptal butonuna otomatik olarak basar
            //return true degeri tamam butonuna otomatik olarak basar 
        });

    })

    it('Alert Prompt alanina metin girmek',()=>{

        cy.visit('');
        cy.get('').click();
        cy.window().then((AlertPenceresi)=>{
            cy.stub(AlertPenceresi,'prompt').returns('Cypress')
            cy.get('').click();
        })
        //bu code ile Alert penceresindeki prompt alaninabirseeyler yazma

    })
});