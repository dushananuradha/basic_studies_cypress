Feature: Practice functions of the Application

    As a user, I am able to use all the functions in Practice page

    Scenario:  As a user, I should be able to see the title of the Practice page
        Given I successfully browse to the application
        When I click on Practice button
        Then I should see the title of the page as "Automation Practice"

    Scenario: As a user, I should be able to select from static dropdown
        When I click on static dropdown option
        Then I should be able to select Selenium option
