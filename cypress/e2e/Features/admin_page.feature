
Feature: Admin page

  Scenario Outline: Add user
    Given I login in Orange page
    When I click on "<module>" module
    And I click on "<button>" button
    And I fill the form
    And I click on 'Submit' button
    Then I should "<action>" the user successfully
    Examples:
      | button   | action | module |
      | Add user | add    | Admin  |

  Scenario Outline: Edit user
    Given I login in Orange page
    When I click on "<button>" module
    And I click on "<button>" button
    And I click on 'Submit' button
    Then I should "<Action>" the user successfully
    Examples:
      |button|Action|
      |Edit|edit|

  Scenario Outline: Delete user
    Given I login in Orange page
    When I click on "<module>" module
    And I click on "<button>" button
    Then I should "<action>" the user successfully
    Examples:
      | button   | action | module |
      | Delete | delete    | Admin  |