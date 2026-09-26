import {test, expect} from '@playwright/test';
import {Registration} from "../pages/Registration";

test("1. Register a user", async ({page})=>{

    const pages = new Registration(page);

    await pages.pageOpen();
    await pages.clickRegisterLink();
    await pages.selectGender();
    await pages.fillFirstName('SQA');
    await pages.fillLastName('Tester');
    await pages.registerEmail('sqatesters@gmail.com');
    await pages.registerPassword('humayraSQA19');
    await pages.registerConfirmPassword('humayraSQA19');
    await pages.clickRegisterButton();

    await pages.checkConfirmText();
    await pages.clickContinueButton();
    
    await page.pause();
    //await pages.pageClose();
    
});
//npx playwright test registration.test.js --headed