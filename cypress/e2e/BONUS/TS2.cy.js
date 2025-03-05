import { faker } from '@faker-js/faker';

describe('my first scenario', () => {

  it('should fill the form with faker data', function(){
    cy.visit('https://simpletestsite.fabrykatestow.pl')
    cy.get('#form-header').click()
    
    const firstNameField = '#fname'
    const lastNameField = '#lname'
    
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    cy.get(firstNameField).type(firstName)
    cy.get(lastNameField).type(lastName)

  })
})
