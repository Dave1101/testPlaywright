const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

// Paths
const jsonReportPath = path.join(__dirname, 'reports', 'cucumber_report.json');
const htmlReportPath = path.join(__dirname, 'reports', 'cucumber_report.html');

// Validate JSON report exists
if (!fs.existsSync(jsonReportPath)) {
    console.error(`no JSON report not found at: ${jsonReportPath}`);
    process.exit(1);
}

// Reporter options
const options = {
    theme: 'bootstrap', // Themes: bootstrap, hierarchy, foundation, simple
    jsonFile: jsonReportPath,
    output: htmlReportPath,
    reportSuiteAsScenarios: true,
    launchReport: false, // Automatically open report in browser
    metadata: {
        "App Version": "1.0.1",
        "Test Environment": "STAGING",
        "Browser": "Chromium",
        "Platform": process.platform,
        "Executed": "Local"
    }
};

// Generate report
try {
    reporter.generate(options);
    console.log(`yes HTML report generated at: ${htmlReportPath}`);
} catch (err) {
    console.error("no Failed to generate report:", err);
    process.exit(1);
}