describe('Myfirsttest', () => {
      beforeEach(() => {
        cy.visit('https://www.souvenir.edu.np/')
        cy.viewport(1280, 720)
        cy.request('https://www.souvenir.edu.np/')
        .its('status')
        .should('eq',200)
        .visit('https://www.souvenir.edu.np/')
      })
    
      it("searchbar", () => {
        cy.get('.navbar-nav > .active').click()
        cy.get('.navbar-nav > .active').should('have.text', 'Home')
        })

        it("login", () => {
          cy.get('.navbar-nav > .active').click()
          cy.get('#navbarCollapse > .btn').should('have.text', 'Login')
          })
    })
    


    
 
