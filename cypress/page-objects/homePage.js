import Urls from "./urls";

const myAccountHeaderButton = '#menu-item-100'
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
const checkCartFromProductLevel = '.added_to_cart.wc-forward'

export const Product = {
    HoodieWithZipper: {
        Localtor: 'a[data-product_id="51"]',
        Name: 'Hoodie with Zipper'
    }, 
    Polo: {
        Locator: 'a[data-product_id="53"]',
        Name: 'Polo'
    },
    Sunglasses: {
        Locator: 'a[data-product_id="49"]',
        Name: 'Sunglasses'
    }
}

class HomePage {

    clickMyAccountHeaderButton() {
        cy.get(myAccountHeaderButton).click()
    }

    addProductToCart(){
        cy.get(dataBlockNameNew).within(()=>{
            cy.get(Product.HoodieWithZipper.Localtor).click()
        })
    }

    clickGoToCartFromProductButton(){
        cy.get(dataBlockNameNew).within(()=>{
            cy.get(checkCartFromProductLevel).click()
        })
    }

    visitPage(appVersion) {
        const urls = new Urls
        urls.visitHomePage()
        cy.get('.site-info').contains(appVersion)
    }
}

export default HomePage;