describe('Contact form testing', () => {
    beforeEach(() => {
        cy.visit('https://www.srlogistics.com.np')
    })

    it('tests writability in form field', () => {
        cy.get('#inputName').type('Prajesh Shakya').should('have.value', 'Prajesh Shakya')
        cy.get('#inputEmail').type('pj.shakya10@gmail.com').should('have.value', 'pj.shakya10@gmail.com')
        cy.get('#inputPhone').type('9812345678')
        cy.get('#inputSubject').type('Query')
        cy.get('#inputDetails').type('What do you do?')
    })

    it('Tests error message', () => {
        cy.get('#contactSubmit').click()

        cy.get('#general_message').should('be.visible')
            .should('have.text', 'Please provide either Email address or Contact Number.')

        cy.get('#inputName_message').should('be.visible')
            .contains('The Full Name field cannot be empty.')

        cy.get('#inputDetails_message').should('be.visible')
            .contains('The Details field cannot be empty.')
    })

    it('Tests form submission without fullname', () => {

        cy.get('#inputEmail').type('pj.shakya10@gmail.com').should('have.value', 'pj.shakya10@gmail.com')
        cy.get('#inputPhone').type('9812345678')
        cy.get('#inputSubject').type('Query')
        cy.get('#inputDetails').type('What do you do?')
        cy.get('#contactSubmit').click()
        cy.get('#inputName_message')
            .contains('The Full Name field cannot be empty.')
    })

    it('Tests fullname cannot be a single alphabet error message', () => {
        cy.get('#inputName').type('a')
        cy.get('#inputName_message').should('be.visible')
            .contains('The Full Name cannot be a single alphabet.')
    })

    it('Tests form submission without contact and email', () => {
        cy.get('#inputName').type('Prajesh')
        cy.get('#inputSubject').type('Query')
        cy.get('#inputDetails').type('What do you do?')
        cy.get('#contactSubmit').click()

        cy.get('#general_message')
            .should('be.visible')
            .contains('Please provide either Email address or Contact Number.')

        cy.get('#inputName_message')
            .should('not.visible')

        cy.get('#inputDetails_message')
            .should('not.visible')

    })

    it('Tests form submission without Details', () => {
        cy.get('#inputName').type('Prajesh Shakya')
        cy.get('#inputEmail').type('pj.shakya10@gmail.com').should('have.value', 'pj.shakya10@gmail.com')
        cy.get('#inputPhone').type('9812345678')
        cy.get('#inputSubject').type('Query')
        cy.get('#contactSubmit').click()
        cy.get('#inputDetails_message')
            .contains('The Details field cannot be empty.')
    })
})