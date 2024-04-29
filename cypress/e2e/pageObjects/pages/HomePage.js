const URL = 'https://staging.christies.com'
const SEARCHTERM = 'picasso'

class homePage {
    
    static visitHomePage() {
        cy.visit(URL)
    }
    
    static clickOnSearchBar() {
        cy.get('#site-search').click()
    }

    static typeInSearchBar() {
        cy.get('#site-search').type(SEARCHTERM,'{enter}')
    }
    
    
}
export default homePage