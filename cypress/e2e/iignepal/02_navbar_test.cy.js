import testData from '../../fixtures/example.json'
describe('Navbar testing', () => {
  beforeEach(() => {
    cy.request(testData.aut)
      .its('status')
      .should('eq', 200).visit(testData.aut)
  })

  //method 1
  it('Check href value and status code of logo', () => {
    //cy.findByText('About').should('exist')
    cy.get('.navbar-brand')
      .should('have.attr', 'href')
      .then((href) => {
        cy.request(href)
          .its('status')
          .should('eq', 200)
      })
  })

  it('Check href value and status code of About page', () => {
    cy.get('nav') // select the navbar element
      .contains('About') // select the link to the page you want to check
      .should('have.attr', 'href', '#abt') // check that the link has an href attribute with correct url
      .and('have.attr', 'href') // fetch link for testing status code
      .then((href) => {
        cy.request(href) // make an HTTP request to the page's URL
          .its('status') // get the response status code
          .should('eq', 200) // assert that the status code is 200
      })
  })

  it('Check href value and status code of Services page', () => {
    cy.get('nav') // select the navbar element
      .contains('Services') // select the link to the page you want to check
      .should('have.attr', 'href', '#ser') // check that the link has an href attribute with correct url
      .and('have.attr', 'href') // fetch link for testing status code
      .then((href) => {
        cy.request(href) // make an HTTP request to the page's URL
          .its('status') // get the response status code
          .should('eq', 200) // assert that the status code is 200
      })
  })

  it('Check href value and status code of Contact page', () => {
    cy.get('nav') // select the navbar element
      .contains('Contact') // select the link to the page you want to check
      .should('have.attr', 'href', '#con') // check that the link has an href attribute with correct url
      .and('have.attr', 'href') // fetch link for testing status code
      .then((href) => {
        cy.request(href) // make an HTTP request to the page's URL
          .its('status') // get the response status code
          .should('eq', 200) // assert that the status code is 200
      })
  })

  it('Check href value and status code of Career page', () => {
    cy.contains('Careers') // select the link to the page you want to check
      .should('have.attr', 'data-bs-target', '#career') // check that the link has an href attribute with correct url
  })


  //method 2
  // it('automates navbar testing', () =>{
  //   cy.get('nav a').each(link =>{
  //     if(link.prop('href'))
  //     cy.request(link.prop('href'))
  //     else
  //     cy.get(link).should('have.attr','data-bs-toggle','modal').should('be.visible')
  //   })
  // })   
})