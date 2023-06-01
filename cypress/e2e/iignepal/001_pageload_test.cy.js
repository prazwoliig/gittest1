import testData from '../../fixtures/example.json'
describe('Page load status code testing',()=>{
    it('check status code of homepage', () => {
        cy.request(testData.aut).as('Home')
      
        cy.get('@Home').then((response) => {
          // Check the status code
          expect(response.status).to.eq(200)
        })
    })

   
})