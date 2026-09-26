import {test, expect} from '@playwright/test';
import {InvalidLogin} from "../pages/InvalidLogin";

test("An appropriate error message should be displayed and the user should not be allowed to log in.", async ({page})=>{

    const pages = new InvalidLogin(page);

// Login page opening
    await pages.pageOpen();
    await pages.clickLoginLinkIV();

// Login info fillup
    await pages.fillLoginEmailIV('humayra@gmail.com');
    await pages.fillLoginPassIV('humayraSQA19');

// Log in
    await pages.clickLoginButtonIV();

// Login invalid message
    await pages.invalidLoginError();
    //await page.pause();

// Page closed
    await pages.pageClose();
    
});
//npx playwright test invalidLogin.test.js --headed

