describe('solutions we offer', () =>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
       })
        cy.visit('http://staging.techarttrekkies.com/')
    })

    it("solution click", ()=>{
        cy.get('.service-item-container').click()

    })

    it("Get In Touch", ()=>{
        cy.get('.service-item-container').click()
        cy.get('.header-container > .btn-main').click()
    })

})
