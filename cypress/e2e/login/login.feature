Feature: orangeHRM
  Scenario: visiting the orangeHRM website
    Given I visit the login page of orangeHRM
    And I enter the username as "Admin"
    And I enter the password as "admin123"
    And I click on the login button
    Then I should see the dashboard page
