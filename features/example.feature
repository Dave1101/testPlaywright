Feature: Login

@Login1Successfulscenario1
  Scenario: Successfulscenario
    Given I navigate to the login page using url 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    When I login with valid credentials username 'admin' and password 'admin123'
    Then I should see the dashboard