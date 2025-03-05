import HomePage from '../page-objects/homePage'

describe('my first scenario', () => {
  const homePage = new HomePage();

  it('should check tested app version', function(){
    homePage.visitPage('v. 2.1.7 2025')
  })
})
