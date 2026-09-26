import {test, expect} from '@playwright/test';
import {InvalidLogin} from "../pages/InvalidLogin";

test("1. An appropriate error message should be displayed and the user should not be allowed to log in.", async ({page})=>{

    const pages = new InvalidLogin(page);

    await pages.pageOpen();
    await pages.clickLoginLink();
    await pages.fillLoginEmail('humayra@gmail.com');
    await pages.fillLoginPass('humayraSQA19');
    await pages.clickLoginButton();
    await pages.invalidLoginError();
    await pages.pageClose();

    //await page.pause();
    
});
//npx playwright test invalidLogin.test.js --headed

