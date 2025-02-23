class Urls {
    visitHomePage() {
        const url = '/'
        cy.visit(url)
    }

    visitMyAccountPage() {
        const url = '/?page_id=9'
        cy.visit(url)
    }
}
export default Urls;