describe('techart', () =>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
       })
        cy.viewport(1028, 768)
        cy.visit('http://staging.techarttrekkies.com/')
    })

    // it("Contact", () => {
    //     cy.get(':nth-child(7) > .nav-link').click()
    //     cy.get('.row > :nth-child(1) > .form-control').type('Prazwol Malla').should('have.value', 'Prazwol Malla')
    //     cy.get(':nth-child(2) > .form-control').type('tech.prazwol@groupiig.com').should('have.value', 'tech.prazwol@groupiig.com')
    //     cy.get(':nth-child(3) > .form-control').type('techart').should('have.value', 'techart')
    //     cy.get('#comment').type('kapan').should('have.value', 'kapan')
    //     // cy.get()
    // })
    it('Test error message', () => {
        cy.get(':nth-child(7) > .nav-link').click()
        cy.get('#contact-forms > .btn').click()
            .should('have.text', 'Send Now!')
        cy.get('#name').should('be.visible')
           .contains('Name field cannot be empty')
        cy.get('#email').should('be.visible')
            .contains('Email field cannot be empty')
        
        cy.get('#subject').should('be.visible')
            .contains('Subject field cannot be empty')
        cy.get('#message').should('be.visible')
            .contains('Message field cannot be empty')

// Name field cannot be empty

// Email field cannot be empty

// Subject field cannot be empty

// Message field cannot be empty

         })
})
  


    // it("Nav Bar", () =>{
    //     cy.get('.main-nav-container')
    // })

    // it("Techart Logo", ()=>{
    //     cy.get('.nav-logo').click()
    // })

    // it("Home", () => {
    //     cy.get(':nth-child(2) > .nav-link')
    //         .should('have.text', 'Home')
    //         .should('have.')
    // })

