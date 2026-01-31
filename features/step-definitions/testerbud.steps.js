const { Given, When, Then  } = require('@cucumber/cucumber');
const { expect } = require('chai');
const TesterBud = require('../../pages/testerbud.page');

Given('I navigate to the page using url {string}',{timeout: 2 * 6000}, async function (urlName) {
    this.testerbudPage = new TesterBud(this.page);
    await this.testerbudPage.gotoWebsite(urlName);
  
});

When('I select country of residence {string}',{timeout: 2 * 6000}, async function (countryOfResidince) {
  await this.testerbudPage.selectCountryOfResidince(countryOfResidince);
});

Then('The value in country of residence dropdown is {string}',{timeout: 2 * 6000}, async function (countryOfResidince) {
  await this.testerbudPage.valueInCountryOfResidence(countryOfResidince);
});

When('I select phone country code {string}',{timeout: 2 * 6000}, async function (phonecountryvalue) {
  await this.testerbudPage.selectphonecountrycode(phonecountryvalue);
});

Then('The value in title dropdown is {string}',{timeout: 2 * 6000}, async function (title) {
  await this.testerbudPage.verifyTitledropdownValue(title);
});

// verifyTitledropdownValue

// selectphonecountrycode

When('I select title {string}',{timeout: 2 * 6000}, async function (title) {
  await this.testerbudPage.selectTitle(title);
});

When('I select radio email',{timeout: 2 * 6000}, async function () {
  await this.testerbudPage.selectradioemail();
});

Then('radio email is selected',{timeout: 2 * 6000}, async function () {
  await this.testerbudPage.checkradioemailselected();
});

// checkradioemailselected

// selectradioemail

When('I enter first name {string}',{timeout: 2 * 6000}, async function (firstname) {
  await this.testerbudPage.enterfirstname(firstname);
});

Then('The value in first name field is {string}',{timeout: 2 * 6000}, async function (firstname) {
  await this.testerbudPage.verifyValueinfirstname(firstname);
});

Then('The value in last name field is {string}',{timeout: 2 * 6000}, async function (lastname) {
  await this.testerbudPage.verifylastnamevalue(lastname);
});

Then('The value in DOB field is {string}',{timeout: 2 * 6000}, async function (dob) {
  await this.testerbudPage.checkValueOfdateofbirth(dob);
});

Then('The value in DOJ field is {string}',{timeout: 2 * 6000}, async function (doj) {
  await this.testerbudPage.checkValueOfdateofjoining(doj);
});

Then('The value in email field is {string}',{timeout: 2 * 6000}, async function (email) {
  await this.testerbudPage.checkValueOfemail(email);
});

Then('The value in phone country code field is {string}',{timeout: 2 * 6000}, async function (phonecountrycode) {
  await this.testerbudPage.checkValueOfphonecountrycode(phonecountrycode);
});

Then('The value in phone number field is {string}',{timeout: 2 * 6000}, async function (phonenumber) {
  await this.testerbudPage.checkValueInphonenumber(phonenumber);
});

// checkValueInphonenumber

// checkValueOfphonecountrycode


// checkValueOfemail


// checkValueOfdateofjoining

// checkValueOfdateofbirth

// verifylastnamevalue

// verifyValueinfirstname

When('I enter last name {string}',{timeout: 2 * 6000}, async function (lastname) {
  await this.testerbudPage.enterlastname(lastname);
});

When('I enter email {string}',{timeout: 2 * 6000}, async function (email) {
  await this.testerbudPage.enteremail(email);
});

When('I enter phone number {string}',{timeout: 2 * 6000}, async function (enterphonenumberdata) {
  await this.testerbudPage.enterphonenumber(enterphonenumberdata);
});

// enterphonenumber

When('I enter dob in format YYYY-MM-DD {string}',{timeout: 2 * 6000}, async function (dob) {
  await this.testerbudPage.enterdateofbirth(dob);
});

When('I enter doj in format dd slash mm slash yyyy {string}',{timeout: 2 * 6000}, async function (doj) {
  await this.testerbudPage.enterdateofjoining(doj);
});
