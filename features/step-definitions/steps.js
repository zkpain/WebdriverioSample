const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const DemoQaPage = require('../pageobjects/demoqa.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

Given(/^I am on demoqa web site$/, async () => {
    await browser.maximizeWindow();
    await browser.url('https://demoqa.com/browser-windows');
});

Given(/^I am on demoqa Bar web site$/, async () => {
    await browser.maximizeWindow();
    await browser.url('https://demoqa.com/progress-bar');
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

When(/^I click in the "(.*)" Button$/, async (buttonName) => {
    await DemoQaPage.clickOptionButton(buttonName);
});

When(/^I click in the start button of the progress bar$/, async () => {
    await DemoQaPage.clickStartButton();
});


Then(/^I should see an error message saying (.*)$/, async (message) => {
    await expect(SecurePage.errorMessage).toBeExisting();
    await expect(SecurePage.errorMessage).toHaveTextContaining(message);
});

Then(/^I should see the Dashboard page displayed$/, async () => {
    await expect(SecurePage.dashboardTitle).toBeExisting();
    await expect(SecurePage.dashboardTitle).toHaveTextContaining("Products");
});

Then(/^I should see the New Tab displayed with the text "(.*)"$/, async (expectedText) => {
    await browser.switchWindow('sample');
    await expect($('#sampleHeading')).toHaveTextContaining(expectedText);
    await browser.closeWindow();
    await browser.switchWindow('browser-windows');
});

Then(/^I should see the New Window displayed with the text "(.*)"$/, async (expectedText) => {
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await expect($('#sampleHeading')).toHaveTextContaining(expectedText);
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    await expect($('.main-header')).toHaveTextContaining("Browser Windows");
});

Then(/^I should see the progress bar at 100%$/, async () => {
    await DemoQaPage.waitUntilProgressBarIsComplete();
    await expect($('#progressBar')).toHaveTextContaining("100%");
});


