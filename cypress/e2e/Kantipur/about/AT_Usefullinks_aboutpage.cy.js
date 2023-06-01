describe('Kantipur About page footer Useful links test',()=>{
    beforeEach(()=>{
        cy.viewport(1280, 720)
        cy.request('https://kantipur.techarttrekkies.com/')
        .its('status')
        .should('eq',200)
        .visit('https://kantipur.techarttrekkies.com/')
        cy.get('.float-end > span').click()
        cy.contains('About').click()
    })
    
    it('Tests footer Useful link 1',()=>{      
       cy.get('.link-animated a')
       .eq(0)
       .should('be.exist')
       .should('have.attr','href','https://moless.gov.np/np')
    })
    it('Tests footer Useful link 2',()=>{      
       cy.get('.link-animated a')
       .eq(1)
       .should('be.exist')
       .should('have.attr','href','https://dofe.gov.np/')
    })
    it('Tests footer Useful link 3',()=>{      
       cy.get('.link-animated a')
       .eq(2)
       .should('be.exist')
       .should('have.attr','href','https://feb.gov.np/')
    })
    it('Tests footer Useful link 4',()=>{      
       cy.get('.link-animated a')
       .eq(3)
       .should('be.exist')
       .should('have.attr','href','http://www.nafea.org.np/')
    })

})