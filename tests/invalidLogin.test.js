import {test, expect} from '@playwright/test';
import {InvalidLogin} from "../pages/InvalidLogin";
import {testData} from "../test-data/testData.js";

for (let i = 0; i < testData.length; i++) {

test(`An appropriate error message should be displayed and the user should not be allowed to log in. ${i+1}` , async ({page})=>{

    const pages = new InvalidLogin(page);

// Login page opening
    await pages.pageOpen();
    await pages.clickLoginLinkIV();

// Login info fillup
    await pages.fillLoginEmailIV(testData[i].email);
    await pages.fillLoginPassIV(testData[i].pass);

// Log in
    await pages.clickLoginButtonIV();

// Login invalid message
    await pages.invalidLoginError();
    //await page.pause();

// Page closed
    await pages.pageClose();
    
});
}


//npx playwright test invalidLogin.test.js --headed

