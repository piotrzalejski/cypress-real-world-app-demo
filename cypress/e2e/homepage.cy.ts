import { HomePage } from "../pageObjects/homePage"

const home = new HomePage();

describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.login('validUser');
    cy.url().should('equal', "http://localhost:3000/")
  })

  it('Verify Sidenav Items displayed', () => {
    home.verifyFullName("Edgar J");
    home.verifyUsername("@Katharina_Bernier");
    home.verifyAccountBalance('$1,681.37');
    home.verifySideNav();
  })
})