import {test, expect} from '@playwright/test';
import {InvalidLogin} from "../pages/InvalidLogin";

test("1. An appropriate error message should be displayed and the user should not be allowed to log in.", async ({page})=>{

    const pages = new InvalidLogin(page);

// Login page opening
    await pages.pageOpen();
    await pages.clickLoginLink();

// Login info fillup
    await pages.fillLoginEmail('humayra@gmail.com');
    await pages.fillLoginPass('humayraSQA19');

// Log in
    await pages.clickLoginButton();

// Login invalid message
    await pages.invalidLoginError();
    //await page.pause();

// Page closed
    await pages.pageClose();
    
});
//npx playwright test invalidLogin.test.js --headed

