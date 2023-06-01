describe('Kantipur Scroll to top button test', () => {
   beforeEach(() => {
      cy.viewport(1280, 720)
      cy.request('https://kantipur.techarttrekkies.com/')
         .its('status')
         .should('eq', 200)
         .visit('https://kantipur.techarttrekkies.com/')
      cy.get('.float-end > span').click()
   })


   it('Tests scroll to top button in homepage', () => {
      cy.get('.link-animated').scrollIntoView()
      cy.get('.btn-lg > .bi').click()
      cy.window().its('scrollY').should('equal', 0);
   })
   
   it('Tests scroll to top button in about page', () => {
      cy.contains('About').click()
      cy.get('.link-animated').scrollIntoView()
      cy.get('.btn-lg > .bi').click()
      cy.window().its('scrollY').should('equal', 0);
   })
   
   it('Tests scroll to top button in services page', () => {
      cy.contains('Services').click()
      cy.get('.link-animated').scrollIntoView()
      cy.get('.btn-lg > .bi').click()
      cy.window().its('scrollY').should('equal', 0);
   })
   
   it('Tests scroll to top button in client page', () => {
      cy.contains('Client').click()
      cy.get('.link-animated').scrollIntoView()
      cy.get('.btn-lg > .bi').click()
      cy.window().its('scrollY').should('equal', 0);
   })
   
   it('Tests scroll to top button in contact page', () => {
      cy.contains('Contact').click()
      cy.get('.link-animated').scrollIntoView()
      cy.get('.btn-lg > .bi').click()
      cy.window().its('scrollY').should('equal', 0);
   })
   
   it('Tests scroll to top button in gallery page', () => {
      cy.contains('Gallery').click()
      cy.get('.link-animated').scrollIntoView()
      cy.get('.btn-lg > .bi').click()
      cy.window().its('scrollY').should('equal', 0);
   })
   
   it('Tests scroll to top button in hot jobs page', () => {
      cy.contains('Hot Jobs').click()
      cy.get('.link-animated').scrollIntoView()
      cy.get('.btn-lg > .bi').click()
      cy.window().its('scrollY').should('equal', 0);
   })

})