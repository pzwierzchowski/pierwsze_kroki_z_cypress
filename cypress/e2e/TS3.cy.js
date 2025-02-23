describe('TS2 - Check httpstat API', () => {
    
  it('should make requests to httpstat', function () {
      cy.request('http://httpstat.us/200')
      
      cy.request(
         {
          url: 'http://httpstat.us/404',
          failOnStatusCode : false
         })

      cy.request(
         {
          url: 'http://httpstat.us/500',
          failOnStatusCode : false
         }).then(
              (response) => {
                  const body = response.body
                  cy.log(body)
                  expect(response.status).to.eq(500)
              })  
      
      cy.request(
          {
           url: 'http://httpstat.us/418',
           failOnStatusCode : false
          }).then(
               (response) => {
                   const body = response.body
                   cy.log(body)
                   expect(response.status).to.eq(418)
               })
  })  
});