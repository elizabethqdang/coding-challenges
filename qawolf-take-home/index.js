const { chromium } = require("playwright");
// const { test } = require("@playwright/test");

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

  await page.screenshot({ path: 'screenshot.png', fullPage: true});
  
  page.on('console.', msg => console.log(msg.text()));
  page.on('console', msg => {
    if (msg.type() === 'error')
      console.log(`Error text: "${msg.text()}"`);
  });

  // const [msg] = await Promise.all([
  //   page.waitForEvent('console')
  // ]);

  page.on('pageerror', exception => {
    console.log(`Uncaught exception: "${exception}"`);
  });
  

  await browser.close();
})();