describe('testing of navbar', () =>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
       })
        cy.visit('http://staging.techarttrekkies.com/')
    })

    it('Check Checkbox', () => {
        cy.get(':nth-child(1) > .control__indicator').click()
        cy.get('.justify-content-center > .btn-main').click()
        cy.get('[type="checkbox"]').check()
        })


 })

