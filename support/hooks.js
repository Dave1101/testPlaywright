const { Before, After, Status, setDefaultTimeout  } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(60 * 1000); // 60 seconds

Before(async function () {
  // Launch browser with video recording enabled
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext({
    recordVideo: { dir: 'reports/videos/', size: { width: 1280, height: 720 } }
  });
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    // Capture screenshot
    const screenshot = await this.page.screenshot({ path: `reports/screenshots/${Date.now()}.png`, fullPage: true });
    await this.attach(screenshot, 'image/png');

    // Save video
    const videoPath = await this.page.video().path();
    const fs = require('fs');
    const videoBuffer = fs.readFileSync(videoPath);
    await this.attach(videoBuffer, 'video/webm');
  }

  //await this.page.close();
  await this.context.close();
  await this.browser.close();
});