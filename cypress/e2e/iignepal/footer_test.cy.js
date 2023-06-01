import testData from '../../fixtures/example.json'
describe('Footer section testing', () => {
    beforeEach(() => {
        cy.request(testData.aut)
            .its('status')
            .should('eq', 200).visit(testData.aut)
        cy.get('footer').scrollIntoView()
    })
    it('Tests Quick links in footer', () => {
        cy.get('.footer-col')
            .eq(1)
            .find('a')
            .each((links) => {
                cy.request(links.prop('href'))
            })
    })
    it('Tests Services in footer', () => {
        cy.get('.footer-col')
            .eq(2)
            .find('a')
            .each((links) => {
                cy.request(links.prop('href'))
            })
    })
    it('Tests Contact details in footer', () => {
        let count = 1
        cy.get('.footer-col')
            .eq(3)
            .find('a')
            .each(($links) => {
                const href = $links.prop('href')
                if (!href.includes('tel') && !href.includes('mailto')) {
                    cy.request(href)
                }


            })
    })

})