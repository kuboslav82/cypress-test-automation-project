export default class BasePage {
    static pause(ms) {
        cy.wait(ms)
    }

    static logInfo(message) {
        cy.log(message)
    }

    static setIphoneViewport()  {
        cy.viewport('iphone-x')
    }

    static setIpadViewport()  {
        cy.viewport('ipad-2')
    }
    
    static setDesktopMacViewport()  {
        cy.viewport('macbook-13')
    }

    static setLargeDesktop() {
        cy.viewport('1980, 1080')
    }
}