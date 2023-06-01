import { it } from 'mocha'
import testData from '../../fixtures/example.json'
describe('About section testing', () => {
    beforeEach(() => {
        cy.request(testData.aut)
            .its('status')
            .should('eq', 200).visit(testData.aut)
        cy.get('#abt').scrollIntoView()
    })

    it('Tests title format', () => {
        cy.contains('About Us')
            .should('have.class', 'pre-square')
    })

    it('Tests read more button', () => {
        cy.contains('READ MORE')
            .should('have.class', 'btn btn-main')
            .should('be.enabled')
    })

    it('Tests read less button not to exist before clicking read more button', () => {
        cy.contains('READ LESS')
            .should('not.exist') 
    })

    it('Tests read less button to exist after clicking read more button', () => {
        cy.contains('READ MORE')
            .click()
        cy.contains('READ LESS')
            .should('exist')
            .should('have.class', 'btn btn-main')
            .should('be.enabled')
    })

    it('Tests extra content in about us section not be visible', () => {
        cy.get('.content p')
            .should('not.be.visible')
    })

    it('Tests expansion of about us section and be visible of extra paragraphs', () => {
        cy.contains('READ MORE')
            .click()
            .then(() => {
                cy.get('.content p')
                    .should('be.visible')
            })
    })

    it('Tests contact us button', () => {
        cy.get('#abt a').eq(1)
            .should('have.class', 'btn btn-outline-main')
            .should('not.be.enabled')
            .should('have.attr','href','#con')
    })



})