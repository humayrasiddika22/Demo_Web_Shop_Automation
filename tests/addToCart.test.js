import {test, expect} from '@playwright/test';
import {AddToCart} from "../pages/AddToCart";

test("Add product to shopping cart from category page and verify cart items.", async ({page})=>{

    const pages = new AddToCart(page);

// Login user account
    await pages.pageOpen();
    await pages.clickLoginLink();
    await pages.fillLoginEmail('sqatesters@gmail.com');
    await pages.fillLoginPass('humayraSQA19');
    await pages.clickLoginButton();

// Verify Categories in the home page
    await pages.verifyCategories();

// Go to product page
    await pages.gotoJewelryCategorie();

// Select a product and add to cart
    await pages.selectProductCG();
    await pages.addToShoppingCartCG();

// Verify the product in the shopping cart
    await pages.verifyShoppingCartCG();
    await pages.verifyProduct('Black & White Diamond Heart', '1');
    await page.pause();

// Page closed
    //await pages.pageClose();
    
});
//npx playwright test addToCart.test.js --headed

