import testData from '../../fixtures/example.json'
describe('Image loading testing', () => {
    beforeEach(() => {
        cy.request(testData.aut)
            .its('status')
            .should('eq', 200).visit(testData.aut)
    })
    it('Tests image loads or not in particular webpage', () => {
        cy.get('img').each(($imgs) => {
            // Check if the image is hidden at current
            if (!$imgs.is(':hidden')) {
                // Check if the image is visible
                cy.wrap($imgs).should('be.visible')

                // Check if the image has a natural width greater than 0
                cy.wrap($imgs).then(($imgs) => {
                    expect($imgs[0].naturalWidth).to.be.greaterThan(0)
                })
            }
        })
    })
})