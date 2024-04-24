export default class searchPage {
    
    static visitSearchPage() {
        cy.visit("https://staging.christies.com/en/search?entry=picasso&page=1&sortby=relevance&tab=available_lots")
    }
    
}