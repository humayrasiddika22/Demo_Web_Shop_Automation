import {expect} from '@playwright/test';
import { Search } from "./Search";
class Checkout extends Search{
    constructor(page){
        super(page)
        this.page = page;

// Locators
        this.selectprdct = page.locator('h2[class="product-title"]');
        this.quantity = page.locator('#addtocart_28_EnteredQuantity').first();
        this.addcart = page.locator('#add-to-cart-button-28').first();

        this.selectcart = page.locator('span[class="cart-label"]').first();
        this.agreeCheck = page.locator('input[name="termsofservice"]').first();
        this.checkOutButton = page.locator('#checkout').first();

        this.billingAddressContinue = page.locator('input[onclick="Billing.save()"]').first();
        this.shippingAddressContinue = page.locator('input[onclick="Shipping.save()"]').first();
        this.shippingMethodSelect = page.locator('#shippingoption_1').first();
        this.shippingMethodContinue = page.locator('input[onclick="ShippingMethod.save()"]').first();

        this.paymentMethodSelect = page.locator('#paymentmethod_0').first();
        this.paymentMethodContinue = page.locator('input[onclick="PaymentMethod.save()"]').first();
        this.paymentInfoContinue = page.locator('input[onclick="PaymentInfo.save()"]').first();

        this.orderConfirmContinue = page.locator('input[onclick="ConfirmOrder.save()"]').first();

        this.orderDetails = page.locator('a[href*="/orderdetails/"]');
        this.verifyOrderDetails = page.locator('a[class="button-2 print-order-button"]');

    }

// Add searched product to cart
    async addProductToCart(number){
        await this.selectprdct.click();
        await this.quantity.fill(number);
        await this.addcart.click();
    }

// Checkout product from cart
    async checkOutProduct(){
        await this.selectcart.click();
        await this.agreeCheck.click();
        await this.checkOutButton.click();
    }

// Address information and shipping methode
    async checkOutProductDelivery(){
        await this.billingAddressContinue.click();
        await this.shippingAddressContinue.click();
        await this.shippingMethodSelect.click();
        await this.shippingMethodContinue.click();
    }

// Order payment
    async checkOutProductPayment(){
        await this.paymentMethodSelect.click();
        await this.paymentMethodContinue.click();
        await this.paymentInfoContinue.click();
    }

// Order comfirmation
    async orderConfirmCheck(){
        await this.orderConfirmContinue.click();
    }

// Verify order details
    async orderDetailsVerification(){
        await this.orderDetails.click();
        await this.verifyOrderDetails.textContent();
    }

}

export {Checkout}

