const { expect } = require('chai');

class TesterBud {
  constructor(page) {
    this.page = page;
    this.countryOfResidinceLocator = "xpath=//label[text()='Country of Residence']//following-sibling::select";
    this.title = "xpath=//label[text()='Title']//following-sibling::select";
    this.firstname = "xpath=//label[text()='First Name']//following-sibling::input";
    this.lastname = "xpath=//label[text()='Last Name']//following-sibling::input";
    this.dateofbirth = "xpath=//input[@placeholder='YYYY-MM-DD']";
    this.doj = "xpath=//input[@placeholder='dd/mm/yyyy']";
    this.email = "xpath=//input[@type='email']";
    this.phonecountrycode = "xpath=//label[text()='Phone Number']//following-sibling::div//select";
    this.phonenumber = "xpath=//input[@type='tel']";
    this.radioemail = "xpath=//input[@type='radio' and @value='email']";
  
  }

  async gotoWebsite(url) {
    await this.page.goto(url);
  }

  async selectCountryOfResidince(countryOfResidince) {
    const scrolltocountry = this.page.locator(this.countryOfResidinceLocator);
    await scrolltocountry.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    const selectOption = this.page.locator(this.countryOfResidinceLocator);
    await selectOption.selectOption(countryOfResidince);
    //await this.page.selectOption(countryOfResidince);
  }

  async valueInCountryOfResidence(countryOfResidince)
  {
    const scrolltocountry = this.page.locator(this.countryOfResidinceLocator);
    await scrolltocountry.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    const selectOption = await this.page.locator(this.countryOfResidinceLocator).inputValue();
    expect(selectOption).to.equal(countryOfResidince);


  }



  async selectphonecountrycode(phonecountrycodevalue) {
    const scrolltophonecountrycode = this.page.locator(this.phonecountrycode);
    await scrolltophonecountrycode.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    const selectphionecountrycode = this.page.locator(this.phonecountrycode);
    await selectphionecountrycode.selectOption(phonecountrycodevalue);
    //await this.page.selectOption(countryOfResidince);
  }


  async checkValueOfphonecountrycode(phonecountrycodevalue) {
    const scrolltophonecountrycode = this.page.locator(this.phonecountrycode);
    await scrolltophonecountrycode.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    const selectphionecountrycode = await this.page.locator(this.phonecountrycode).inputValue();
    expect(selectphionecountrycode).to.equal(phonecountrycodevalue);
    //await selectphionecountrycode.selectOption(phonecountrycodevalue);
    //await this.page.selectOption(countryOfResidince);
  }

  async selectTitle(title) {
    const scrolltotitle = this.page.locator(this.title);
    await scrolltotitle.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    const selectOption = this.page.locator(this.title);
    await selectOption.selectOption(title);
    //await this.page.selectOption(countryOfResidince);
  }

  async verifyTitledropdownValue(title) {
    const scrolltotitle = this.page.locator(this.title);
    await scrolltotitle.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    const selectOption = await this.page.locator(this.title).inputValue();
    expect(selectOption).to.equal(title);
    //await this.page.selectOption(countryOfResidince);
  }

  async selectradioemail() {
    const scrolltoradioemail = this.page.locator(this.radioemail);
    await scrolltoradioemail.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    const emailradio = this.page.locator(this.radioemail);
    await emailradio.click();
    await this.page.waitForTimeout(5000);
    //await this.page.selectOption(countryOfResidince);
  }

  async checkradioemailselected() {
    await this.page.waitForTimeout(2000);
    const isSelected = await this.page.locator(this.radioemail).isChecked();
     expect(isSelected).to.be.true;
    //await this.page.selectOption(countryOfResidince);
  }

   async enterfirstname(firstname) {
    const scrolltofirstneme = this.page.locator(this.firstname);
    await scrolltofirstneme.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enterfirstnameData = this.page.locator(this.firstname);
    await enterfirstnameData.fill(firstname);
    //await this.page.selectOption(countryOfResidince);
  }

  async verifyValueinfirstname(firstname) {
    const scrolltofirstneme = this.page.locator(this.firstname);
    await scrolltofirstneme.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enterfirstnameData = await this.page.locator(this.firstname).inputValue();
    expect(enterfirstnameData).to.equal(firstname);
  }

  async enterphonenumber(phonenumber) {
    const scrolltophonenumber = this.page.locator(this.phonenumber);
    await scrolltophonenumber.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enterphonenumberData = this.page.locator(this.phonenumber);
    await enterphonenumberData.fill(phonenumber);
    //await this.page.selectOption(countryOfResidince);
  }

  async checkValueInphonenumber(phonenumber) {
    const scrolltophonenumber = this.page.locator(this.phonenumber);
    await scrolltophonenumber.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enterphonenumberData = await this.page.locator(this.phonenumber).inputValue();
    expect(enterphonenumberData).to.equal(phonenumber);
    //await enterphonenumberData.fill(phonenumber);
    //await this.page.selectOption(countryOfResidince);
  }

  async enteremail(email) {
    const scrolltoemail = this.page.locator(this.email);
    await scrolltoemail.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enteremailData = this.page.locator(this.email);
    await enteremailData.fill(email);
    //await this.page.selectOption(countryOfResidince);
  }

  async checkValueOfemail(email) {
    const scrolltoemail = this.page.locator(this.email);
    await scrolltoemail.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enteremailData = await this.page.locator(this.email).inputValue();
    expect(enteremailData).to.equal(email);
    //await this.page.selectOption(countryOfResidince);
  }

  async enterdateofbirth(dob) {
    const scrolltodob = this.page.locator(this.dateofbirth);
    await scrolltodob.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enterdobData = this.page.locator(this.dateofbirth);
    await enterdobData.fill(dob);
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('Tab');
    await this.page.waitForTimeout(2000);
    //await this.page.selectOption(countryOfResidince);
  }

  async checkValueOfdateofbirth(dob) {
    const scrolltodob = this.page.locator(this.dateofbirth);
    await scrolltodob.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enterdobData = await this.page.locator(this.dateofbirth).inputValue();
    expect(enterdobData).to.equal(dob);
  }

  async enterdateofjoining(doj) {
    const scrolltodoj = this.page.locator(this.doj);
    await scrolltodoj.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enterdojData = this.page.locator(this.doj);
    await enterdojData.fill(doj);
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('Tab');
    await this.page.waitForTimeout(2000);
    //await this.page.selectOption(countryOfResidince);
  }

  async checkValueOfdateofjoining(doj) {
    const scrolltodoj = this.page.locator(this.doj);
    await scrolltodoj.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enterdojData = await this.page.locator(this.doj).inputValue();
    expect (enterdojData).to.equal(doj);
    //await this.page.selectOption(countryOfResidince);
  }

  async enterlastname(lastname) {
    const scrolltolastname = this.page.locator(this.lastname);
    await scrolltolastname.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enterlastnameData = this.page.locator(this.lastname);
    await enterlastnameData.fill(lastname);
    //await this.page.selectOption(countryOfResidince);
  }

  async verifylastnamevalue(lastname) {
    const scrolltolastname = this.page.locator(this.lastname);
    await scrolltolastname.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    const enterlastnameData =await this.page.locator(this.lastname).inputValue();
    expect(enterlastnameData).to.equal(lastname);
    
    // enterlastnameData.fill(lastname);
    //await this.page.selectOption(countryOfResidince);
  }


}

module.exports = TesterBud;