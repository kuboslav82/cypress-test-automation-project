Feature: homePage

Scenario Outline: Header is displayed

Given I am on the Christies Home page
When I click on the search field
And I enter text into the search field
Then Search page is displayed


