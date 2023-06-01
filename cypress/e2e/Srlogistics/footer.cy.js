describe('Testing Footer section', () => {
    beforeEach(() => {
        cy.request('https://www.srlogistics.com.np')
            .its('status')
            .should('eq', 200).visit('https://www.srlogistics.com.np')
        cy.get('footer').scrollIntoView()
    })
    it('Tests href link of footer', () => {
        cy.get('ul li a[class="weblink"]')
            .each(page => {
                cy.request(page.prop('href'))
                    .its('status')
                    .should('eq', 200)
            })
    })
})