import { Base } from "./Base";
class Registration extends Base{
    constructor(page){
        super(page)
        this.page = page;

        //Locators
        this.registerLink = page.locator('a[href="/register"]');
        this.gender = page.getByLabel('Female');
        this.fName = page.locator('#FirstName');
        this.lName = page.locator('#LastName');
        this.regEmail = page.locator('#Email');
        this.regPass = page.locator('#Password');
        this.regCnfPass = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');

        this.regiComplete = page.getByText('Your registration completed');
        this.regiContinue = page.locator('input[value="Continue"]');

    }

// Registration page
    async clickRegisterLink(){
        await this.registerLink.click();
    }

// Registration info fillup
    async selectGender(){
        await this.gender.click();
    }

    async fillFirstName(fn){
        await this.fName.fill(fn);
    }

    async fillLastName(ln){
        await this.lName.fill(ln);
    }

    async registerEmail(email){
        await this.regEmail.fill(email);
    }

    async registerPassword(pass){
        await this.regPass.fill(pass);
    }

    async registerConfirmPassword(pass){
        await this.regCnfPass.fill(pass);
    }

// Register
    async clickRegisterButton(){
        await this.registerButton.click();
    }

// Registration confirm page
    async checkConfirmText(){
        await this.regiComplete.textContent();
    }

    async clickContinueButton(){
        await this.regiContinue.click();
    }

}

export {Registration}

