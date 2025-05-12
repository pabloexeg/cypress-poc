import { LoginPageLocators } from 'cypress/locators/LoginPageLocators';

export class LoginPage {

  getLoginTitleLocator(): string {
    return LoginPageLocators.labelLoginPage;
  }

  getCreateAccountButtonText(): Cypress.Chainable<string> {
    return cy.get(LoginPageLocators.createAccountButtonText).invoke('text').then((text) => text.trim());;
  }
}