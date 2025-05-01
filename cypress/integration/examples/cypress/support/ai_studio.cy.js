describe('Ai Studio', () => {
  
    it('Ai Studio', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('https://rahulshettyacademy.com/client');
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
    //   below code belongs to login page
      cy.get('#userEmail').click();
      cy.get('#userEmail').clear('r');
      cy.get('#userEmail').type('rahulshetty@gmai.com');
      cy.get('#userEmail').clear('rahulshetty@gmai.com');
      cy.get('#userEmail').type('rahulshetty@gmail.com');
      cy.get('#userPassword').clear('I');
      cy.get('#userPassword').type('Iamking@000');
      cy.get('#login').click();
      /* ==== End Cypress Studio ==== */
    });
  
  });
  