import testData from '../../fixtures/example.json'
describe('Top Bar testing', () => {
  beforeEach(() => {
    cy.request(testData.aut)
      .its('status')
      .should('eq', 200).visit(testData.aut)
  })

  it('Tests tel1 link href', () => {
    cy.get('.topbar-container a').eq(0)
      .should('have.attr', 'href', 'tel:01-4416347')
  })

  it('Tests tel2 link href', () => {
    cy.get('.topbar-container a').eq(1)
      .should('have.attr', 'href', 'tel:01-4416348')
  })

  it('Tests mail link href', () => {
    cy.get('.topbar-container a').eq(2)
      .should('have.attr', 'href', 'mailto:cs@groupiig.com')
  })

  it('Tests facebook link href', () => {
    cy.get('.topbar-container a').eq(3)
      .should('be.visible')
      .should('have.attr', 'href', 'https://www.facebook.com/IIGNEPAL/')
  })

  it('Tests viber link href', () => {
    cy.get('.topbar-container a').eq(4)
      .should('be.visible')
      .should('have.attr', 'href', 'viber://chat?number=9779801908931')
  })

  it('Tests whatsapp link href', () => {
    cy.get('.topbar-container a')
      .eq(5)
      .should('be.visible')
      .should('have.attr', 'href', 'https://api.whatsapp.com/message/PNQXS423AL7UB1?src=qr')
      // .then((link) => {
      //   cy.window().then(win => win.location.href = link.prop('href'))
      // })
  })


  //method 2
  // it('automates Topbar testing', () => {
  //   cy.get('.topbar-container a').each($links => {
  //     const href = $links.prop('href')
  //     if (href.includes('api')) {
  //       cy.window().then(win => win.location.href = href)
  //         .should('eq', 'https://api.whatsapp.com/message/PNQXS423AL7UB1?src=qr')
  //     } else if (href.includes('viber')) {
  //       //cy.window().then(win => win.location.href = href)
  //       //.should('eq', '')
  //     } else if (href.includes('tel')) {
  //       //
  //     } else if (href.includes('mailto')) {
  //       //
  //     } else {
  //       cy.request(href)
  //         .its('status')
  //         .should('eq', 200)
  //     }
  //   })
  // })
})