describe('footersection' ,() =>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
       })
        cy.visit('http://staging.techarttrekkies.com/')
    })

    it('test for the footer section' , () =>{
        cy.get('footer')
    })

    it('test for techart logo in the footer section' , () =>{
        cy.get('.footer-img')
         })

    it('test for Head Office text in the footer section' , () =>{
        cy.get(':nth-child(2) > h6').should('be.visible')
    })

    it('test for Home page in the footer section' , () =>{
        cy.get(':nth-child(1) > .redirect1').click()
    })

    it('test for Request a call back section' , () =>{
        cy.get('#footer-name').type('Prazwol Malla').should('have.value', 'Prazwol Malla')
        cy.get('#phone-email').type('9841973801').should('have.value', '9841973801')
        cy.get('#footer-submit').click()
            
    })

    it('test for first load Request a call back section' , () =>{
        cy.get('#footer-name')
            .should('not.have.attr', 'style')
        cy.get('#phone-email')
            .should('not.have.attr', 'style')
        cy.get('#footer-submit').click()
            
    })


    it('test for without data Request a call back section' , () =>{
        cy.get('#footer-submit').click()
        cy.get('#footer-name')
            .should('have.attr', 'style')
        cy.get('#phone-email')
            .should('have.attr', 'style')
        
    })

    it('test facebook footer link' , () =>{
        cy.get('[href="https://www.facebook.com/Techart-Trekkies-2196411940600591/"]').click()  
    })

    it('test Instagram footer link' , () =>{
        cy.get('[href="https://www.instagram.com/techart.trekkies/"]').click()
    })

    it('test techart link' , () =>{
        cy.get('[href="index.php"]').click()
    })
    it('test techart link' , () =>{
        cy.get('[href="https://www.iafcertsearch.org/certified-entity/995f78f7-b5c9-543d-a166-6916d4668bb3"]').click()
    })
  
    it('test Home' , () =>{
        cy.get(':nth-child(1) > .redirect1').click()  
    })

    it('test About Techart' , () =>{
        cy.get(':nth-child(2) > .redirect1').click()  
    })

    it('test Expertise' , () =>{
        cy.get(':nth-child(3) > .redirect1').click()  
    })

    it('test Contact' , () =>{
        cy.get(':nth-child(3) > .redirect1').click()  
    })


    })