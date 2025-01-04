import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

var username = 'Admin'
var password = 'admin123'

Given(/^I navigate to Orange page$/, function () {
    cy.visit('/')
});

When(/^I add user and password$/, function () {
    cy.get('[name=username]').type(username);
    cy.get('[name=password]').type(password);
});

When(/^I click on 'Submit' button$/, function () {
    cy.get('[type=submit]').should('be.enabled');
    cy.get('[type=submit]').click();
});

Then(/^I should log in successfully$/, function () {
    cy.get('[class=orangehrm-upgrade-link]').should('be.visible');
});

When(/^I add a wrong user and password$/, function () {
    cy.get('[name=username]').type('admin2');
    cy.get('[name=password]').type('admin123');
});

Then(/^I should log in unsuccessfully$/, function () {
    cy.contains('Invalid credentials').should('be.visible');
});