const { chromium } = require("playwright");
// const { test } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false,
    devtools: true,
  });

  const page = await browser.newPage();
  await page.goto('http://www.netflix.com');
  await page.click('text=Sign In');
  await page.fill('input[name="userLoginId"]', 'invalid@email.com');
  await page.fill('input[name="password"]', 'INVALID_PASSWORD');
  // await page.click('button[data-uia="login-submit-button"]');
  await page.dispatchEvent('button[data-uia="login-submit-button"]', 'click');
  
  await page.waitForSelector('div.ui-message-error');
  const error = page.locator('.ui-message-contents');
  console.log(await error.textContent());
  
  await page.screenshot({ path: 'screenshot.png', fullPage: true});

  await browser.close();
})();