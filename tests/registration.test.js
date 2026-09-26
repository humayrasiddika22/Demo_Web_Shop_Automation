import {test, expect} from '@playwright/test';
import {Registration} from "../pages/Registration";

test("Register a user", async ({page})=>{

    const pages = new Registration(page);

// Registration page opening
    await pages.pageOpen();
    await pages.clickRegisterLink();

// Registration info fillup
    await pages.selectGender();
    await pages.fillFirstName('SQA');
    await pages.fillLastName('Tester');
    await pages.registerEmail('sqatesters@gmail.com'); // Registration with this email has already been completed
    await pages.registerPassword('humayraSQA19');
    await pages.registerConfirmPassword('humayraSQA19');

// Register
    await pages.clickRegisterButton();

// Registration confirm page
    await pages.checkConfirmText();
    await pages.clickContinueButton();
    //await page.pause();

// Page closed
    await pages.pageClose();
    
});
//npx playwright test registration.test.js --headed

