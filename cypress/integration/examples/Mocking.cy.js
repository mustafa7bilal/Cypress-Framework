/// <reference types="cypress" />
describe('Mock Single Object API', function() {
    it('Mocking Single Product', function() {
        cy.visit('https://restful-api.dev/');

        cy.intercept({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/7'
        }, {
            statusCode: 200,
            body: {
                "id": "7",
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        }).as('GetMacbook');

        cy.window().then(win => {
            win.fetch('https://api.restful-api.dev/objects/7');
        });

        cy.wait('@GetMacbook');
    });
});
