import {expect} from '@playwright/test';
import { Login } from "./Login";
class Search extends Login{
    constructor(page){
        super(page)
        this.page = page;

// Locators
        this.fillhPrdct = page.locator('#small-searchterms').first();
        this.searchPrdct = page.locator('input[class="button-1 search-box-button"]');
        this.verifySearchPrdct = page.locator('h2[class="product-title"]');

    }

// Search a product
    async fillProductName(name){
        await this.fillhPrdct.fill(name);
    }

    async searchProduct(){
        await this.searchPrdct.click();
    }

// Verify whether the search results are accurate
    async verifySearchProduct(pName){
        await expect(this.verifySearchPrdct).toHaveText(pName);
    }

}

export {Search}

