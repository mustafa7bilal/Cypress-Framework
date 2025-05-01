describe('JWT session', () => {
    it('JWT session', () => {
      cy.loginApi().then(() => {
        cy.visit('https://rahulshettyacademy.com/client', {
          onBeforeLoad: (win) => {
            win.localStorage.setItem('token', Cypress.env('token'))
            cy.get(':nth-child(1) > .card > .card-body > .w-10').click();
            cy.get(':nth-child(4) > .btn').click();
            cy.get('.subtotal > ul > :nth-child(3) > .btn').click();
            cy.get('.form-group > .input').click().type('Ind');
            cy.get('.ta-results > :nth-child(3)').each(($el) => {
                if ($el.text().trim() === 'India') {
                  cy.wrap($el).click();
                  cy.get('.btnn').click();
                  cy.wait(10000)
                  cy.get('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > button:nth-child(1)').should('be.visible').click();
                }
              });
            
          
    }




})
      })
    })
  })
