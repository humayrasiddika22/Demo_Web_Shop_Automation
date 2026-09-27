import {test, expect} from '@playwright/test';
import {Search} from "../pages/Search";

test("Product should return accurate and matching result of search content.", async ({page})=>{

    const pages = new Search(page);

// Login user account
    await pages.pageOpen();
    await pages.clickLoginLink();
    await pages.fillLoginEmail('sqatesters@gmail.com');
    await pages.fillLoginPass('humayraSQA19');
    await pages.clickLoginButton();

// Search a product
    await pages.fillProductName("Blue and green Sneaker");
    await pages.searchProduct();
    await pages.verifySearchProduct('Blue and green Sneaker');

    //await page.pause();

// Page closed
    await pages.pageClose();
    
});
//npx playwright test search.test.js --headed

