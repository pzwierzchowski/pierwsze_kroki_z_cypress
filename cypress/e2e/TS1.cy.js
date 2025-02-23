import HomePage from '../page-objects/homePage'

describe('my first scenario', () => {
  const homePage = new HomePage();

  it('should check all links on my page', function(){
    homePage.visitPage()

    cy.get('a').each(link => {
      if (link.prop('href'))
      cy.request({
        url: link.prop('href'),
        failOnStatusCode: false
        })
      cy.log(link.prop('href'))
  })
})}
)
