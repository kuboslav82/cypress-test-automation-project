import {should} from "chai";
import {Given,When,And,Then} from 'cypress-cucumber-preprocessor'
import HomePage from '/../../pageObjects/HomePage'
import SearchPage from '/../../pageObjects/SearchPage'


const Homepage = new Homepage()

Given('I am on the Christies Home page', () => {
    HomePage.visit()
})

When('I click on the search field', () => {
    HomePage.clickOnSearchBar()
    
})

And('I enter text into the search field', () => {
    HomePage.typeInSearchBar('picasso')

})

Then('Search page is displayed', () => {
    
    const Searchpage = new Searchpage()
    SearchPage.visitSearchPage().should('be.visible')
})

