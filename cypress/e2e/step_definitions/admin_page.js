import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

var username = 'Admin'
var password = 'admin123'
var user = 'Luis5'
var user_password = "This.is.a0password"
var user_role = "Admin"
var employee = "Timothy Lewis Amiano"
var status = "Enabled"

Given(/^I login in Orange page$/, function () {
cy.login(username,password)
});

When(/^I click on "([^"]*)" module$/, function () {
    cy.contains('Admin').click()
});

When(/^I click on "([^"]*)" button$/, function (button) {
    if (button== "Add user") {
        cy.get("i[class*='bi-plus']").click()
    }
    else if (button == "Edit"){
        cy.xpath('.//div[div[label[text()="Username"]]]//input').type(user)
        cy.get('[type=submit]').click()
        cy.xpath('.//div[div[div[contains(text(),user)]]]//i[@class="oxd-icon bi-pencil-fill"]').click()
    }

    else if (button == "Delete"){
        cy.xpath('.//div[div[label[text()="Username"]]]//input').type(user)
        cy.get('[type=submit]').click()
        cy.xpath('.//div[div[div[contains(text(),user)]]]//i[@class="oxd-icon bi-trash"]').click()
        cy.xpath('.//div//i[@class="oxd-icon bi-trash oxd-button-icon"]').click()
    }
});

When(/^I fill the form$/, function () {
    cy.xpath("//div[div/label[contains(.,'User Role')] ] //div[@class[contains(.,'oxd-select-text-input')]]").click().xpath("//div[@role='listbox']").find('span').contains(user_role).click()
    cy.xpath("//div[div/label[contains(.,'Employee Name')] ]//input") .type('Timothy Lewis Amiano').xpath("//div[@role='listbox']").find('span').contains(employee).click()
    cy.xpath("//div[div/label[contains(.,'Status')] ] //div[@class[contains(.,'oxd-select-text-input')]]").click().xpath("//div[@role='listbox']").find('span').contains(status).click()
    cy.xpath('.//div[div[label[contains(.,"Username")]]]//div//input').type(user)
    cy.xpath('.//div[div[label[text()="Password"]]]//input').type(user_password)
    cy.xpath('.//div[div[label[contains(.,"Confirm Password")]]]//div//input').type(user_password)
});

Then(/^I should "([^"]*)" the user successfully$/, function () {
    cy.get('div[class="oxd-toast-start"]').should('be.visible')
});