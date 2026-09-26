import { Base } from "./Base";
class InvalidLogin extends Base{
    constructor(page){
        super(page)
        this.page = page;

        //Locators
        this.loginLink = page.locator('a[href="/login"]');
        this.loginEmail = page.locator('#Email');
        this.loginPassword = page.locator('#Password');
        this.loginButton = page.locator('input[value="Log in"]');
        this.invalidLoginText = page.locator('.validation-summary-errors');

    }

    async clickLoginLink(){
        await this.loginLink.click();
    }

    async fillLoginEmail(email){
        await this.loginEmail.fill(email);
    }

    async fillLoginPass(pass){
        await this.loginPassword.fill(pass);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async invalidLoginError(){
        await this.invalidLoginText.click();
    }

}

export {InvalidLogin}


