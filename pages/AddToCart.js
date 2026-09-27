import {expect} from '@playwright/test';
import { Login } from "./Login";
class AddToCart extends Login{
    constructor(page){
        super(page)
        this.page = page;

// Locators
        this.checkCategories = page.locator('div[class="title"]').first();
        this.jewelrycategorie = page.locator('a[href="/jewelry"]').nth(2);
        this.selectprdctCG = page.locator('a[href="/black-white-diamond-heart"]').first();
        this.addcartCG = page.locator('#add-to-cart-button-14').first();

        this.selectcartCG = page.locator('a[href="/cart"][class="ico-cart"]').first();
        this.productName = page.getByText('Black & White Diamond Heart');
        this.productQuantity = page.locator('input.qty-input').first();

    }

// Verify Categories in the home page
    async verifyCategories(){
        await this.checkCategories.textContent();
    }

// Go to  jewelry Categorie
    async gotoJewelryCategorie(){
        await this.jewelrycategorie.click();
    }

// Select a product and add to cart
    async selectProductCG(){
        await this.selectprdctCG.click();
    }

    async addToShoppingCartCG(){
        await this.addcartCG.click();
    }

// Verify the product in the shopping cart
    async verifyShoppingCartCG(){
        await this.selectcartCG.click();
    }

    async verifyProduct(pName, pquantity){
        await expect(this.productName).toHaveText(pName);
        await expect(this.productQuantity).toHaveValue(pquantity);
    }

}

export {AddToCart}

