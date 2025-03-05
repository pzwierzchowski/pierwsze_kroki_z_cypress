
describe('my first scenario', () => {

  it('should fill the form', function(){
    cy.visit('https://simpletestsite.fabrykatestow.pl')
    cy.get('#form-header').click()
    
    const firstNameField = '#fname'
    const lastNameField = '#lname'
   
    const firstName = 'Paweł'
    const lastName = 'Zwierzchowski'
 
    cy.get(firstNameField).type(firstName)
    cy.get(lastNameField).type(lastName)

  })
})
