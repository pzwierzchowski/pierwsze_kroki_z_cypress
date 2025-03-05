
describe('my first scenario', () => {

  it('should fill the form', function(){
    cy.visit('https://simpletestsite.fabrykatestow.pl')
    cy.get('#form-header').click()
    
    const firstNameField = '#fname'
    const lastNameField = '#lname'
   
    cy.fixture('formData.json').then((data) => {
      cy.get(firstNameField).type(data.firstName)
      cy.get(lastNameField).type(data.lastName)
    })
  })
})
