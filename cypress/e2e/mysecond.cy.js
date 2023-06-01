// describe('mysecond', () =>{
//     beforeEach(()=>{
//         cy.viewport(1028, 768)
//         cy.request('https://www.iignepal.com')
//             .its('status')
//             .should('eq', 200).visit ('https://iignepal.com/')
//     })

//         it("About", () => {
//             cy.get('.navbar-nav > [href="#abt"]').click()
//             cy.get('.btn-outline-main')
//                 .should('contain', 'A')
                
//         }) 

//         // it("Contact", () => {

//         //         cy.get('.navbar-nav > [href="#con"]')
//         //         cy.get(':nth-child(7) > .btn-main')   
//         //         cy.get('.btn-main.btn')
//         //             //.should('contain', 'Button')
//         //             .should('have.text', 'SEND READ MORESend Message')
//         // }) 

//         it("Contact", () => {
//             cy.get('.btn')
//             cy.get('.btn-main.btn')
//             .eq('')
//                 .should('have.text','Send Message')               
//     }) 

//     it('should display the footer section', () => {
//         cy.get('footer').should('be.visible')
//       })

//       it('should contain a copyright notice', () => {
//         cy.get('.footer-bottom > :nth-child(1)').contains('Copyright © 2023 Your Website').should('be.visible');
//       })
//     })

    describe('mysecond', () =>{
        beforeEach(()=>{
            Cypress.on('uncaught:exception', (err, runnable) => {
                     return false;
                })
            cy.viewport(1028, 768)
            cy.request('https://www.techarttrekkies.com/')
                .its('status')
                .should('eq', 200).visit ('https://www.techarttrekkies.com/')
        })


        it("Home", () => {
            cy.contains('Home')
                .should('have.class', 'nav-link active')
        }) 

        
        it("Home", () => {
            cy.get(':nth-child(2) > .nav-link')
                .should('have.text', 'Home')
        })

        it("Nav Bar", () => {
            cy.get('.main-nav-container')
        })  

         it("Home", () => {
                 cy.get(':nth-child(2) > .nav-link').click()
                //  cy.get(':nth-child(2) > .nav-link')
                //  .should('contain', 'A')
                 cy.get('.nav-link.active')
                     .should('contain', 'a')
                    .should('have.text', 'Home')
        
        })  


    })