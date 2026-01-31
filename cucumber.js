module.exports = {
  default: {
    require: [
      "features/step-definitions/*.js",
      "support/*.js"
    ],
    format: [
      "progress",
      "json:reports/json/cucumber-report.json",
      "html:reports/html/cucumber-report.html"
    ],
    publishQuiet: true
  }
};