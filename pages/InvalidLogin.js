import { Base } from "./Base";
class InvalidLogin extends Base{
    constructor(page){
        super(page)
        this.page = page;

// Locators
        this.loginLinkIV = page.locator('a[href="/login"]');
        this.loginEmailIV = page.locator('#Email');
        this.loginPasswordIV = page.locator('#Password');
        this.loginButtonIV = page.locator('input[value="Log in"]');
        this.invalidLoginText = page.locator('.validation-summary-errors');

    }

// Login page
    async clickLoginLink(){
        await this.loginLinkIV.click();
    }

// Login info fillup
    async fillLoginEmail(email){
        await this.loginEmailIV.fill(email);
    }

    async fillLoginPass(pass){
        await this.loginPasswordIV.fill(pass);
    }

// Log in
    async clickLoginButton(){
        await this.loginButtonIV.click();
    }

// Login invalid message
    async invalidLoginError(){
        await this.invalidLoginText.textContent();
    }

}

export {InvalidLogin}


