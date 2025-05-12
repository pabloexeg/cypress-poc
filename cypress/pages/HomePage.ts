import { HomePageLocators } from 'cypress/locators/HomePageLocators';


export class HomePage {

    enterProductOnSearchInput(productName: string): void {
        cy.get(HomePageLocators.searchInput).type(productName);
    }

    clickOnSearchButton(): void {
        cy.get(HomePageLocators.searchButton).click();
    }

    clickOnCartButton(): void {
        cy.get(HomePageLocators.cartButton).click();
    }

}