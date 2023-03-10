export class LoginPage{

    public visit(){
        cy.visit('/signin');
    }

    public get loginPageHeader(){
        return cy.get('h1').contains('Sign in');
    }

    public get userNameField(){
        return cy.get('#username');
    }

    public get passwordField(){
        return cy.get('#password');
    }

    public get signInBtn(){
        return cy.get('[data-test="signin-submit"]');
    }

    public fillUsername(username : string){
        this.userNameField.type(username);
    }

    public fillPassword(password : string){
        this.passwordField.type(password);
    }

    public clickSignInBtn(){
        this.signInBtn.click();
    }

    public verifyLoginSuccess(menuItem : string){
        cy.get('[data-test="sidenav"]').should('contain.text',menuItem);
    }

    public verifyLoginError(error: string){
        cy.get('[data-test="signin-error"]').should('contain.text',error);
    }
}