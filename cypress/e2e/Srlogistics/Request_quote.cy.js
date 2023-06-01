describe('Testing Request a Quote form', () => {
    beforeEach('Tests whether button exists or not', () => {
        cy.visit('https://www.srlogistics.com.np')
        cy.findByText('Request a Quote').should('be.exist').and('be.visible').click()
    })

    it('Tests error message visible or not before form submission', () => {
        cy.get('.quotation_error').should('not.exist')
    })

    it('Tests error message exist and visible in blank form submission', () => {
        cy.get('#quote_form > .btn-lg').click()

        cy.get('.quotation_error')
            .should('exist')
            .and('be.visible')

        cy.get('#quoteload-error')
            .should('exist')
            .and('be.visible')
            .should('have.text', 'Please enter the Loading Destination')

        cy.get('#quotePort-error')
            .should('exist')
            .and('be.visible')
            .should('have.text', 'Please enter the Discharge Destination')

        cy.get('#final_Destination-error')
            .should('exist')
            .and('be.visible')
            .should('have.text', 'Please enter the Final Destination')

        cy.get('#quoteType-error')
            .should('exist')
            .and('be.visible')
            .should('have.text', 'Please enter the Container Type')

        cy.get('#quoteNumCont-error')
            .should('exist')
            .and('be.visible')
            .should('have.text', 'Please enter the Number of Container')

        cy.get('#quoteName')
            .scrollIntoView()

        cy.get('#quoteName-error')
            .should('exist')
            .and('be.visible')
            .should('have.text', 'Please enter the Name')

        cy.get('#quoteCompany-error')
            .should('exist')
            .and('be.visible')
            .should('have.text', 'Please enter the Company Name')

        cy.get('#quoteEmail-error')
            .should('exist')
            .and('be.visible')
            .should('have.text', 'Please enter the Email Address')

        cy.get('#quoteContact-error')
            .should('exist')
            .and('be.visible')
            .should('have.text', 'Please enter the Contact Number')
    })
})