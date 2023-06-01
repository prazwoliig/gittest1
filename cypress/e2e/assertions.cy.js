
describe('Assertions demo', () => {
    it('Implicit assertions', () => {
      cy.visit('https://example.cypress.io/')
      cy.contains('get').click()
      cy.get('#query-btn', {timeout: 6000})
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        .should('be.enabled')
      
      cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn')

        cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')

      //should and 
      //cy.url().should('include','app.allimpexo.com')
     // cy.url().should('eq', 'https://app.allimpexo.com/')
    //  cy.url().should('contain', 'allimpexo')

     //cy.url().should('include','app.allimpexo.com')
     //.should('eq', 'https://app.allimpexo.com/')
     //.should('contain', 'allimpexo')
     //cy.get("input [placeholder='Username']").type("Admin")
     //cy.get("input [placeholder='Username']").should('have.value','Admin')



    })
  }) 