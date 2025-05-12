import { ItemPageLocators } from 'cypress/locators/ItemPageLocators';

export class ItemPage {

    selectQTY(qty: number): void {
        cy.get(ItemPageLocators.qtyButton, { timeout: 10000 }).should('exist').click();
        cy.get(ItemPageLocators.qtyUnitOption(qty)).contains(`${qty} unidades`).click();
    }

    addItemToCart(): void {
        cy.get(ItemPageLocators.addToCartButton).click();
    }

    getItemTitle(): string {
        return ItemPageLocators.itemTitleText;
    }

    getNumberOfUnits(): Cypress.Chainable<string> {
        return cy.get(ItemPageLocators.qtySelectedUnits, { timeout: 10000 }).should('contain', 'unidades').invoke('text').then((text) => text.trim());
    }
} 