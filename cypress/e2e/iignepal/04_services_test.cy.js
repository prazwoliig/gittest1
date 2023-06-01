import testData from '../../fixtures/example.json'
describe('Footer section testing', () => {
    beforeEach(() => {
        cy.request(testData.aut)
            .its('status')
            .should('eq', 200).visit(testData.aut)
        cy.get('#ser').scrollIntoView()
    })
    
    // it('Tests title format', () => {
    //     cy.contains('Our Services')
    //         .should('have.class', 'pre-square')
    // })
    it('Tests card 1 in services', () => {
        cy.get('.fbox').eq(0)
        .should('be.visible')
        //.should('be.enabled')
    })
    it('Tests card 1 in services', () => {
        cy.get('.fbox').eq(7)
        .should('be.visible')
        // /.should('be.enabled')
    })
    
    

})