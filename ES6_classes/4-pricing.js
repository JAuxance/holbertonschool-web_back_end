import Currency from './3-currency';
class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }

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
     * Converts the price to another currency using the provided conversion rate.
     * @param {number} conversionRate - The rate to convert the price.
     * @returns {number} The converted price.
     */
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}
export default Pricing;