describe('JWT session', () => {
    it('JWT session', () => {
      cy.loginApi().then(() => {
        cy.visit('https://rahulshettyacademy.com/client', {
          onBeforeLoad: (win) => {
            win.localStorage.setItem('token', Cypress.env('token'))
          }
        })
      })
    })
  })
  