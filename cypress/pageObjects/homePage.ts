export class HomePage{
    
    public get loggedInFullName(){
        return cy.get('[data-test="sidenav-user-full-name"]');
    }

    public get loggedInUsername(){
        return cy.get('[data-test="sidenav-username"]');
    }

    public get home(){
        return cy.get('[data-test="sidenav-home"]');
    }

    public get myAccount(){
        return cy.get('[data-test="sidenav-user-settings"]');
    }

    public get bankAccounts(){
        return cy.get('[data-test="sidenav-bankaccounts"]');
    }

    public get notifications(){
        return cy.get('[data-test="sidenav-notifications"]');
    }

    public get logout(){
        return cy.get('[data-test="sidenav-signout"]');
    }

    public get accountBalance(){
        return cy.get('[data-test="sidenav-user-balance"]');
    }

    public verifyFullName(name: string){
        this.loggedInFullName.should('contain.text', name);
    }

    public verifyUsername(username: string){
        this.loggedInUsername.should('contain.text', username);
    }

    public verifyAccountBalance(balance: string){
        this.accountBalance.should('contain.text', balance);
    }

    public verifySideNav(){
        this.home.should('be.visible');
        this.myAccount.should('be.visible');
        this.bankAccounts.should('be.visible');
        this.notifications.should('be.visible');
        this.logout.should('be.visible');
    }
}
