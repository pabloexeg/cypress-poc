import { HomePage } from 'cypress/pages/HomePage';
import { SearchPage } from 'cypress/pages/SearchPage';
import { ItemPage } from 'cypress/pages/ItemPage';
import { LoginPage } from 'cypress/pages/LoginPage';

let testVar: { productName: string, qty: number, itemNumberFromResultList: number, criteriaSearchOne: string, criteriaSearchSecondAlt: string, loginTitle: string };
const homePage = new HomePage;
const searchPage = new SearchPage;
const itemPage = new ItemPage;
const loginPage = new LoginPage;

describe('Add item to Cart without Account logged', () => {

    before(() => {
        cy.fixture('dataTest').then((data) => {
            testVar = data;
        });

        //Add this code because test n° 3 throws error related layoutmap
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.toLowerCase().includes('layoutmap')) {
                return false;
            }
        });
    });

    it('Search a Product', () => {
        const url = Cypress.env('baseUrl');
        cy.visit(url);
        homePage.enterProductOnSearchInput(testVar.productName);
        homePage.clickOnSearchButton();

        //Assert Text is Expected on Screen
        cy.origin('https://listado.mercadolibre.com.ar', { args: { expected: testVar.productName, locator: searchPage.getResultTextLocator() } }, ({ expected, locator }) => {
            cy.get(locator)
                .invoke('text')
                .then((text) => {
                    const actualText = text.toLowerCase().trim();
                    expect(actualText).to.eq(expected);
                });
        });
    });

    it('Select second product of second page', () => {
        const urlSearch = Cypress.env('baseUrlSearch');
        const path = `/${testVar.productName}#D[A:${testVar.productName}]`;
        cy.visit(`${urlSearch}${path}`);

        searchPage.clickOnNextPage();
        searchPage.getItemTitle(testVar.itemNumberFromResultList).then((expectedTitle) => {
            searchPage.selectProductFromList(testVar.itemNumberFromResultList, testVar.criteriaSearchOne, testVar.criteriaSearchSecondAlt);
            cy.origin('https://www.mercadolibre.com.ar', { args: { expectedTitle, locator: itemPage.getItemTitle() } }, ({ expectedTitle, locator }) => {
                cy.get(locator).invoke('text').then((actualTitle) => {
                    expect(actualTitle.trim()).to.eq(expectedTitle.trim());

                });
            });
        });
    });

    it('Change QTY in Product Selected', () => {
        //Hardcode URL because I didn't find another way to use previous link
        cy.visit('https://www.mercadolibre.com.ar/espejo-amube-mediterraneo-colgar-blanco-56-x-72-cm/p/MLA23949498?pdp_filters=item_id:MLA1970501690#wid=MLA1970501690&sid=search&is_advertising=true&searchVariation=MLA23949498&backend_model=search-backend&position=2&search_layout=grid&type=pad&tracking_id=c097e5d3-c541-4cf3-8a6d-603c2011a37e&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=ZjljNmVmMGEtNTdlMS00NDhhLWJjZDItY2UyNzE5NmI5MmRj');

        //Tried multiple explicit waits but Implicit wait here helped to find element
        cy.wait(2000);
        itemPage.selectQTY(testVar.qty);
        itemPage.getNumberOfUnits().then((qty) => {
            expect(qty).to.equal('2 unidades');
        });
    });

    it('Add Product to Cart redirects to Login Page', () => {
        itemPage.addItemToCart();

        cy.origin('https://www.mercadolibre.com', { args: { expectedTitle: testVar.loginTitle, locator: loginPage.getLoginTitleLocator() } }, ({ expectedTitle, locator }) => {
            cy.get(locator, { timeout: 10000 }).invoke('text').then((loginTitleText) => {
                expect(loginTitleText.trim()).to.eq(expectedTitle.trim());
            });
        });
    });
});