import {test, expect} from '@playwright/test';
import {Checkout} from "../pages/Checkout";

test("[E2E] Complete order checkout flow from login to order confirmation.", async ({page})=>{

    const pages = new Checkout(page);

// Login user account
    await pages.pageOpen();
    await pages.clickLoginLink();
    await pages.fillLoginEmail('sqatesters@gmail.com');
    await pages.fillLoginPass('humayraSQA19');
    await pages.clickLoginButton();

// Search a product
    await pages.fillProductName("Blue and green Sneaker");
    await pages.searchProduct();

// Add searched product to cart
    await pages.addProductToCart('5');

// Checkout product from cart
    await pages.checkOutProduct();

// Address information and shipping methode
    await pages.checkOutProductDelivery();

// Order payment
    await pages.checkOutProductPayment();

// Order comfirmation
    await pages.orderConfirmCheck();

// Verify order details
    await pages.orderDetailsVerification();

    //await page.pause();

// Page closed
    await pages.pageClose();
    
});
//npx playwright test checkout.test.js --headed

