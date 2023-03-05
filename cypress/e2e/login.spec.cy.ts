/// <reference types="cypress" />

import { LoginPage } from "../pageObjects/loginPage";

const login = new LoginPage();

let VALIDUSER : string;
let VALIDPASS : string;

let INVALIDUSER : string;
let INVALIDPASS : string;


describe('template spec', () => {
  beforeEach(() =>{
    login.visit();
    
    cy.fixture('user-data').then((data) =>{
      VALIDUSER = data.validUser.username;
      VALIDPASS = data.validUser.password;
    
      INVALIDUSER = data.invalidUser.username;
      INVALIDPASS = data.invalidUser.password;
    })
  })

  it('Displays Login Form Fields', () => {
    login.userNameField.should('be.visible');
    login.passwordField.should('be.visible');
    login.signInBtn.should('be.visible');

  })

  it('Displays error on invalid login attempt', () =>{
    login.fillUsername(INVALIDUSER);
    login.fillPassword(INVALIDPASS);

    login.clickSignInBtn();
    login.verifyLoginError();
  })
  
  it('Displays home page after succesful login', () =>{
    login.fillUsername(VALIDUSER);
    login.fillPassword(VALIDPASS);
    login.clickSignInBtn();
    login.verifyLoginSuccess("My Account");
  })
})