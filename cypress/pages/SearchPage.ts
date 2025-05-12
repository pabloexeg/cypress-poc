import { SearchPageLocators } from 'cypress/locators/SearchPageLocators';

export class SearchPage {

    clickOnNextPage(): void {
        cy.get(SearchPageLocators.nextPageArrowButton, { timeout: 10000 })
            .should('exist')
            .click();
    }

    getItemTitle(itemNumber: number): Cypress.Chainable<string> {
        return cy.get(SearchPageLocators.itemTitleText)
            .eq(itemNumber)
            .invoke('text')
            .then((text) => text.trim());
    }

    selectProductFromList(itemNum: number, searchOptionOne: string, searchOptionSecondAlt: string): void {
        cy.get(SearchPageLocators.productResultList, { timeout: 10000 }).then(($items) => {
            const itemsArray = Cypress.$($items);

            const freeShipItems = itemsArray.filter((_, li) =>
                li.innerText.toLowerCase().includes(searchOptionOne.toLowerCase())
            );

            if (freeShipItems.length > 2) {
                cy.wrap(freeShipItems[itemNum])
                    .scrollIntoView()
                    .should('exist')
                    .click();
                return;
            }

            const samePriceItems = itemsArray.filter((_, li) =>
                li.innerText.toLowerCase().includes(searchOptionSecondAlt.toLowerCase())
            );

            if (samePriceItems.length > 2) {
                cy.wrap(samePriceItems[itemNum])
                    .scrollIntoView()
                    .should('exist')
                    .click();
            } else {
                throw new Error(`No Products found with criteria Search ${searchOptionOne} or ${searchOptionSecondAlt}`);
            }
        });
    }

    getResultTextLocator(): string {
        return SearchPageLocators.resultLabelText;
    }
}