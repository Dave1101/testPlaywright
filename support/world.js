const { setWorldConstructor, World } = require('@cucumber/cucumber');

class CustomWorld extends World {
  constructor(options) {
    super(options);
    this.page = null;
    this.browser = null;
    this.context = null;
    
  }
}

setWorldConstructor(CustomWorld);