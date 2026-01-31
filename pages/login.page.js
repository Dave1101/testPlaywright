class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "xpath=//input[@name='username']";
    this.passwordInput = "xpath=//input[@name='password']";
    this.loginButton = "xpath=//button[@type='submit']";
    this.dashboardSelector = "xpath=//h6[contains(@class,'testerdataDigvijay')]";
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async isDashboardVisible() {
    return this.page.isVisible(this.dashboardSelector);
  }

  async waitForFewSeconds(ms)
  {
    await this.page.waitForTimeout(ms);
  }


}

module.exports = LoginPage;