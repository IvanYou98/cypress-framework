import loginPage from "../pages/LoginPage";
import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";


Given("I visit the login page of orangeHRM", () => {
    loginPage.visit();
})

When("I enter the username as {string}", (username: string) => {
    loginPage.enterUsername(username);
})


When("I enter the password as {string}",  (password: string) => {
    loginPage.enterPassword(password);
});

When("I click on the login button", () => {
    loginPage.clickLoginButton();
});

Then("I should see the dashboard page", () => {
    cy.url().should('include', '/dashboard');
})
