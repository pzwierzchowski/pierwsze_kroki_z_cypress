
describe('my first scenario', () => {

  it('should fill the form', function(){
    
    cy.intercept('GET', '/api/uzytkownicy', {
      statusCode: 200,
      body: [
        { id: 1, imie: 'Jan', nazwisko: 'Kowalski' },
        { id: 2, imie: 'Anna', nazwisko: 'Nowak' }
      ]
    }).as('getUzytkownicy');
    
    cy.visit('/uzytkownicy');
    cy.wait('@getUzytkownicy');
    
  })
})
