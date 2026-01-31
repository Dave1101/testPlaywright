Feature: testerbud

@test
Scenario: testerbudTest
    Given I navigate to the page using url 'https://testerbud.com/practice-forms'
    When I select country of residence 'United Kingdom'
    Then The value in country of residence dropdown is 'United Kingdom'
    When I select title 'Mr.'
    Then The value in title dropdown is 'Mr.'
    When I enter first name 'Digvijay'
    Then The value in first name field is 'Digvijay'
    When I enter last name 'Thakur'
    Then The value in last name field is 'Thakur'
    When I enter dob in format YYYY-MM-DD '1996-01-11'
    Then The value in DOB field is '1996-01-11'
    When I enter doj in format dd slash mm slash yyyy '11/01/2021'
    Then The value in DOJ field is '11/01/2021'
    When I enter email 'ab@gmail.com'
    Then The value in email field is 'ab@gmail.com'
    When I select phone country code '+91'
    Then The value in phone country code field is '+91'
    When I enter phone number '8989898989'
    Then The value in phone number field is '8989898989'
    When I select radio email
    Then radio email is selected