require('cypress-iframe')

describe('my first scenario', () => {

  it('should click iframe button on main page - option 1', function(){
    cy.visit('https://simpletestsite.fabrykatestow.pl')
    cy.get('#iframe-header').click()
    
    const firstButton = '#simpleButton1'
    const resultMsg = '#whichButtonIsClickedMessage'
    const iFrame = 'iframe'
    const iframeTest = () => {
      return cy.get(iFrame)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
      }
    iframeTest().find(firstButton).click()
    iframeTest().find(resultMsg).should('have.text', 'Button 1 was clicked!')
  })

  it('should click iframe button on main page - option 2', function(){
    cy.visit('https://simpletestsite.fabrykatestow.pl')
    cy.get('#iframe-header').click()
    
    const iframeButton2 = '#simpleButton2'
    const message = '#whichButtonIsClickedMessage'
    cy.iframe().find(iframeButton2).should('be.visible').click()
    cy.iframe().find(message).should('have.text', 'Button 2 was clicked!')
  })
})
