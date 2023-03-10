Feature: SK Demo WebdriverIO - Login

  @Login
  Scenario: Verify Login using a valid Username & Password
    Given I am on the login page
    When I login with performance_glitch_user and secret_sauce
    Then I should see the Dashboard page displayed

  @Negative
  Scenario Outline: Verify Login using invalid Accounts
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an error message saying <message>

    Examples:
      | username        | password         | message                                                                   |
      | invalid_user    | invalid_password | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce     | Epic sadface: Sorry, this user has been locked out.                       |
