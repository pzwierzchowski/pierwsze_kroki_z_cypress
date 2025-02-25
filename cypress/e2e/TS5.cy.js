import HomePage from '../page-objects/homePage'
import CartPage from '../page-objects/cartPage';
import OrderPage from '../page-objects/orderPage'


describe('my first scenario', () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const orderPage = new OrderPage();

  it('should add product to cart and order it', function(){
    homePage.visitPage('v. 2.1.7 2025')
    homePage.addProductToCart()
    homePage.clickGoToCartFromProductButton()
    cartPage.checkThatAddedProductIsInCart()
    cartPage.clickGoToPaymentsButton()
    orderPage.fillAllRequiredFields()
    orderPage.clickOrderFinishButton()
    orderPage.checkOrderFinished()
  })
})
