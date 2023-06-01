describe('Page load status code testing', () => {
  it('Check status code of homepage', () => {
    cy.request('www.srlogistics.com.np').as('Home')
    cy.get('@Home').then((response) => {
      // Check the status code
      expect(response.status).to.eq(200)
    })
  })
})