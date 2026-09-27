import { Base } from "./Base";
class Login extends Base{
    constructor(page){
        super(page)
        this.page = page;

// Locators
        this.loginLink = page.locator('a[href="/login"]');
        this.loginEmail = page.locator('#Email');
        this.loginPassword = page.locator('#Password');
        this.loginButton = page.locator('input[value="Log in"]');

        this.vlogin = page.locator('a[href="/logout"]');

    }

// Login page
    async clickLoginLink(){
        await this.loginLink.click();
    }

// Login info fillup
    async fillLoginEmail(email){
        await this.loginEmail.fill(email);
    }

    async fillLoginPass(pass){
        await this.loginPassword.fill(pass);
    }

// Log in
    async clickLoginButton(){
        await this.loginButton.click();
    }

// Verify login account
    async verifyLogin(){
        await this.vlogin.textContent();
    }

}

export {Login}
