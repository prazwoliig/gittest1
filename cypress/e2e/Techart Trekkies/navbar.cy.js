describe('testing of navbar', () =>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
       })
        cy.visit('http://staging.techarttrekkies.com/')
    })

    it('Check Home response', () => {
        cy.get(':nth-child(2) > .nav-link').click()
        .should('have.attr', 'href')
        .then((href) => {
          cy.request(href)
            .its('status')
            .should('eq', 200)
        })
      })
      it('Check About response', () => {
        cy.get(':nth-child(3) > .nav-link').click()
        .should('have.attr', 'href')
        .then((href) => {
          cy.request(href)
            .its('status')
            .should('eq', 200)
        })
      })

      it('Check Services response', () => {
        cy.get(':nth-child(4) > .nav-link').click()
        .should('have.attr', 'href')
        .then((href) => {
          cy.request(href)
            .its('status')
            .should('eq', 200)
        })
      })

      it('Check Expertise response', () => {
        cy.get(':nth-child(5) > .nav-link').click()
        .should('have.attr', 'href')
        .then((href) => {
          cy.request(href)
            .its('status')
            .should('eq', 200)
        })
      })

      it('Check Blog response', () => {
        cy.get(':nth-child(6) > .nav-link').click()
        .should('have.attr', 'href')
        .then((href) => {
          cy.request(href)
            .its('status')
            .should('eq', 200)
        })
      })

      it('Check Contact response', () => {
        cy.get(':nth-child(7) > .nav-link').click()
        .should('have.attr', 'href')
        .then((href) => {
          cy.request(href)
            .its('status')
            .should('eq', 200)
        })
      })

})