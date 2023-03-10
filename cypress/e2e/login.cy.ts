import { LoginPage } from "../pageObjects/loginPage";

const login = new LoginPage();

let validUser : string;
let validPass : string;

let invalidUser: string;
let invalidPass : string;


describe('Login Tests', () => {
  beforeEach(() =>{
    login.visit();
    
    cy.fixture('user-data').then((data) =>{
      validUser = data.validUser.username;
      validPass = data.validUser.password;
    
      invalidUser = data.invalidUser.username;
      invalidPass = data.invalidUser.password;
    })
  })

  it('Displays Login Form Fields', () => {
    login.userNameField.should('be.visible');
    login.passwordField.should('be.visible');
    login.signInBtn.should('be.visible');

  })

  it('Displays error on invalid login attempt', () =>{
    login.fillUsername(invalidUser);
    login.fillPassword(invalidPass);

    login.clickSignInBtn();
    login.verifyLoginError('Username or password is invalid');
  })
  
  it('Displays home page after succesful login', () =>{
    login.fillUsername(validUser);
    login.fillPassword(validPass);
    login.clickSignInBtn();
    login.verifyLoginSuccess("My Account");
  })
})