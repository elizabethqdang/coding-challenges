const { chromium } = require("playwright");
const { test } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('http://www.netflix.com');
  await page.click('text=Sign In');
  await page.fill('input[name="userLoginId"]', 'USERNAME');
  await page.fill('input[name="password"]', 'PASSWORD');
  await page.click('text=Sign In');

  await browser.close();
})();