const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage = require('./pageObjects/pages/HomePage'); // Corrected capitalization
const SearchPage = require('./pageObjects/pages/SearchPage'); // Corrected capitalization

const homePage = new HomePage(); // Corrected capitalization
const searchPage = new SearchPage(); // Corrected capitalization

Given("I am on the Christies Home page", () => {
    homePage.visit();
});

When("I click on the search field", () => {
    homePage.clickOnSearchBar();
});

And("I enter text into the search field", () => {
    homePage.typeInSearchBar('picasso');
});

Then("Search page is displayed", () => {
    searchPage.visitSearchPage().should('be.visible'); // Changed 'searchPage' to 'SearchPage'
});
