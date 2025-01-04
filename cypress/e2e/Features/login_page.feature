
Feature: login

  Scenario: Login
    Given I navigate to Orange page
    When I add user and password
    And I click on 'Submit' button
    Then I should log in successfully

  Scenario: Login failure
    Given I navigate to Orange page
    When I add a wrong user and password
    And I click on 'Submit' button
    Then I should log in unsuccessfully