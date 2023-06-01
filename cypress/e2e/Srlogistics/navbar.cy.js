describe('Navbar testing', () => {
  beforeEach(() => {
    cy.request('https://www.srlogistics.com.np')
      .its('status')
      .should('eq', 200).visit('https://www.srlogistics.com.np')
  })
  //method 1 
  it('Check href value and status code of each navbar item', () => {
    cy.get('.navbar-brand')
      .should('have.attr', 'href')
      .then((href) => {
        cy.request(href)
          .its('status')
          .should('eq', 200)
      })

    cy.get('nav') // select the navbar element
      .contains('About') // select the link to the page you want to check
      .should('have.attr', 'href', '#abt') // check that the link has an href attribute with correct url
      .and('have.attr', 'href') // fetch link for testing status code
      .then((href) => {
        cy.request(href) // make an HTTP request to the page's URL
          .its('status') // get the response status code
          .should('eq', 200) // assert that the status code is 200
      })

    cy.get('nav') // select the navbar element
      .contains('Services') // select the link to the page you want to check
      .should('have.attr', 'href', '#ser') // check that the link has an href attribute with correct url
      .and('have.attr', 'href') // fetch link for testing status code
      .then((href) => {
        cy.request(href) // make an HTTP request to the page's URL
          .its('status') // get the response status code
          .should('eq', 200) // assert that the status code is 200
      })

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

  // method 2
  it('Automates testing navlink at once without feeding one by one manually', () => {
    cy.get('nav a').each(link => {
      cy.request(link.prop('href'))
        .its('status')
        .should('eq', 200)
    })
  })



})