const { test, expect, page } = require("@playwright/test");
// run tests in headful mode so you can see the browser
test.use({ headless: false, slowMo: 1000, devtools: true });

test("my first test", async ({ page }) => {
  // go to Netflix.com
  await page.goto("https://www.netflix.com");

  // assert page title appears
  await expect(page.locator(".our-story-card-title").first()).toContainText(
    "Unlimited movies"
  );
});

async function goToNetflix(page) {
  return await page.goto("https://www.netflix.com");
}

async function goToSignIn(page) {
  return await page.goto("https://www.netflix.com/login");
}

test("Navigate to Login Page", async ({ page }) => {
  // Make sure page loads
    await goToNetflix(page);
    await page.waitForSelector('.authLinks.redButton');
    
  // Make sure Sign In button is visible
    const locator = page.locator('.authLinks.redButton');
    await expect(locator).toContainText('Sign In');
  
  // Navigate to sign in page
    await page.locator('.authLinks.redButton').click();
    await expect(page).toHaveURL("https://www.netflix.com/login");
})

// test.describe("Sign In", () => {
//   test.beforeEach(async ({ page }) => {
//     await goToSignIn(page);
//     await page.waitForSelector('.nfTextField');
//   })  

  test("Fill in and Submit Login Info", async ({ page }) => {
    await goToSignIn(page);
    await page.waitForSelector('.nfTextField');
    
    const email = page.locator("id=id_userLoginId");
    const password = page.locator("id=id_password");
  
    await page.fill('input[name="userLoginId"]', 'invalid@email.com');
    await page.fill('input[name="password"]', 'INVALID_PASSWORD');
    
    await expect(email).toHaveValue('invalid@email.com');
    await expect(password).toHaveValue('INVALID_PASSWORD');
  
    await page.waitForSelector('.login-button.btn-submit');
    await expect(page.locator('.login-button.btn-submit')).toHaveText('Sign In');
    
    await page.dispatchEvent('button[data-uia="login-submit-button"]', 'click');
    await page.waitForSelector('div.ui-message-error');
    const error = page.locator('.ui-message-contents');
    console.log(await error.textContent());
    await expect(error).not.toBeEmpty();
    
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
  });