export default class Header {
    static clickOnSignInButton() {
        cy.get('chr-button > chr-button--primary > chr-button--sm > chr-button--light').click()
    }

    static clickOnChritiesLogo() {
        cy.get('.chr-header__link-site').click()
    }

    static headerSearchTerm(text) {
        cy.get('#site-search').type(`${text} {enter}`)
    }

    static clickOnAuctionsTab() {
        cy.get('.chr-header__link-site').click()
    }

    
}