export const ItemPageLocators = {
    itemTitleText: 'h1.ui-pdp-title',
    qtyButton: 'button[id=quantity-selector]',
    qtyUnitOption: (qty: number): string => `[data-testid="quantity-selector-item-${qty}"]`,
    qtySelectedUnits: '.ui-pdp-buybox__quantity__selected',
    addToCartButton: 'button.andes-button.andes-spinner__icon-base.ui-pdp-action--secondary.andes-button--quiet'
};