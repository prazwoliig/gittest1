describe('Kantipur expertise item flip test',()=>{
    beforeEach(()=>{
        cy.viewport(1280, 720)
        cy.request('https://kantipur.techarttrekkies.com/')
        .its('status')
        .should('eq',200)
        .visit('https://kantipur.techarttrekkies.com/')
        cy.get('.float-end > span').click()
    })
    
   
    it('Tests expertise item flip',()=>{      
      //cy.contains('Read More').scrollIntoView() 
      //cy.get('.expertise-item')
      //.eq(0).trigger('pointerover')
      cy.get('.flip-card-back').eq(0).should("be.hidden").invoke("show").trigger('mouseover',{force:true})
    })

})