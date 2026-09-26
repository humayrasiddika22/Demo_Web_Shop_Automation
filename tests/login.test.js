import {test, expect} from '@playwright/test';
import {Login} from "../pages/Login";

test("Login user account", async ({page})=>{

    const pages = new Login(page);

// Login page opening
    await pages.pageOpen();
    await pages.clickLoginLink();

// Login info fillup
    await pages.fillLoginEmail('sqatesters@gmail.com');
    await pages.fillLoginPass('humayraSQA19');

// Log in
    await pages.clickLoginButton();

// Verify login account
    await pages.verifyLogin();
    //await page.pause();

// Page closed
    await pages.pageClose();
    
});
//npx playwright test login.test.js --headed

