const { Given,When,And,Then } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = require('../../pageObjects/pages/HomePage');
const searchPage = require('../../pageObjects/pages/SearchPage');


const Homepage = new Homepage()

Given("I am on the Christies Home page", () => {
    homePage.visit()
})

When("I click on the search field", () => {
    homePage.clickOnSearchBar()
    
})

And("I enter text into the search field", () => {
    homePage.typeInSearchBar('picasso')

})

Then("Search page is displayed", () => {
    const searchpage = new searchPage()
    searchPage.visitSearchPage().should('be.visible')
})

