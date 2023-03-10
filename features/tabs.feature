Feature: SK Demo WebdriverIO - Tabs
    @Tab
    Scenario: Verify that Tab is displayed Correctly
        Given I am on demoqa web site
        When I click in the "New Tab" Button
        Then I should see the New Tab displayed with the text "Should Fail This is a sample page"

    @Window
    Scenario: Verify that new Window is displayed Correctly
        Given I am on demoqa web site
        When I click in the "New Window" Button
        Then I should see the New Window displayed with the text "This is a sample page"

    @Wait
    Scenario: Verify that new Window is displayed Correctly
        Given I am on demoqa Bar web site
        When I click in the start button of the progress bar 
        Then I should see the progress bar at 100%