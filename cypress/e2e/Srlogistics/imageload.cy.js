describe('Test loading of image in page', () => {
    beforeEach(() => {
        cy.visit('https://www.srlogistics.com.np')
    })

    it('Tests image load on homepage', () => {
        cy.get('img').each(($img) => {
            //Check if the image is hidden at current
            if (!$img.is(':hidden')) {
                // Check if the image is visible
                cy.wrap($img).should('be.visible')

                // Check if the image has a natural width greater than 0
                cy.wrap($img).then(($img) => {
                    expect($img[0].naturalWidth).to.be.greaterThan(0)
                })
            }
        })
    })
})