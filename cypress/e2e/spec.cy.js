


describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://kantipur.techarttrekkies.com/')
    cy.get('.float-end > span').click()
  })
    



 it("searchbar", () => {
  cy.get('.navbar-nav > .active')
  })

  // it("View file", () => {
  //   cy.get('.col-md-2 > .btn').click()
  //   cy.get('.col-md-2 > .btn').should('have.text','View File')
  //   })
  
    it("left arrow", () => {
      cy.get('#header-carousel > .carousel-control-prev > .carousel-control-prev-icon').should('be.visible')
                                                                                 
      })

      it("right arrow", () => {
        cy.get('#header-carousel > .carousel-control-next > .carousel-control-next-icon')
                                                                                         
        })

        it("hot jobs", () => {
          
          cy.get('[data-bs-target="#searchModal"]').click()
          
                                                                            
          })
  


  it("about", () => {
    cy.get('.navbar-nav > [href="https://kantipur.techarttrekkies.com/about"]')
  })

  it("Services", () => {
    cy.get('[href="https://kantipur.techarttrekkies.com/services"]')
  })

  it("Clients", () => {
    cy.get('[href="https://kantipur.techarttrekkies.com/clientsPage"]')
  })

  it("Contact", () => {
    cy.get('.active')
  })

  it("Gallery", () => {
    cy.get('[href="https://kantipur.techarttrekkies.com/galleryMain"]')
  })

  it('Tests footer link',()=>{
    cy.get('.link-animated a')
    .eq(0)
 })

 it('Tests footer link',()=>{
  cy.get('.link-animated a')
  .eq(1)
})


it('Tests footer link',()=>{
  cy.get('.link-animated a')
  .eq(2)
})


it('Tests footer link',()=>{
  cy.get('.link-animated a')
  .eq(3)
})

it('mouse',()=>{
  cy.get('.expertise-item')
  .eq(0)
  .trigger('mouseover')
  .find('flip-card-back')
  .click();

})


 

  
  it("Read More", () => {
    cy.get('.col > .btn').should('have.text', 'Read More').scrollIntoView().click()
    
  })
  
  

 })

     
                    
 

