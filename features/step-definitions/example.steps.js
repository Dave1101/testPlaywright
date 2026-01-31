const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../../pages/login.page');

Given('I navigate to the login page using url {string}',{timeout: 2 * 6000}, async function (urlName) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto(urlName);
});

When('I login with valid credentials username {string} and password {string}',{timeout: 2 * 6000}, async function (username,password) {
  await this.loginPage.login(username, password);
});

Then('I should see the dashboard',{timeout: 2 * 6000}, async function () {  
  const visible = await this.loginPage.isDashboardVisible();
  await this.loginPage.waitForFewSeconds(2500);
  expect(visible).to.be.true;
  //expect(visible).to.exist;
});