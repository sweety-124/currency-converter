describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Getting the amount field 
      cy.get('#amount-id').click().type(234)
      cy.get('#currencyfrom').click()
      cy.contains('CAD').click();
      cy.get('#currencyto').click()
      cy.contains('BRL').click();
      cy.get('#convertNow').click()
      cy.wait(2000)
      cy.get('a[href*="/history"]').click()
      // The new page should contain an h1 with "About page"
    //   cy.get('h1').contains('About Page')
    })
  })