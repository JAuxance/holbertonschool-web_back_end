import Currency from './3-currency';
/**
 * Represents a price as an amount paired with a {@link Currency}.
 */
class Pricing {
    /**
     * @param {number} amount - Numeric amount.
     * @param {Currency} currency - Currency the amount is expressed in.
     */
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    /** @returns {number} The numeric amount. */
    get amount() {
        return this._amount;
    }

    /** @returns {Currency} The associated currency. */
    get currency() {
        return this._currency;
    }

    /**
     * Returns the price formatted as "Amount Currency".
     * @returns {string} e.g. "100.00 USD"
     */
    displayFullPrice() {
        return `${this._amount.toFixed(2)} ${this._currency.code}`;
    }
    /**
     * Converts an amount using the provided conversion rate.
     * @param {number} amount - The amount to convert.
     * @param {number} conversionRate - The rate to apply.
     * @returns {number} The converted amount.
     */
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}
export default Pricing;