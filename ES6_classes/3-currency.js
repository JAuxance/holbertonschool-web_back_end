/**
 * Represents a currency identified by its ISO code and display name.
 */
class Currency {
    /**
     * @param {string} code - ISO currency code (e.g. "EUR").
     * @param {string} name - Display name (e.g. "Euro").
     */
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    /** @returns {string} The ISO currency code. */
    get code() {
        return this._code;
    }

    /** @returns {string} The display name. */
    get name() {
        return this._name;
    }

    /**
     * Returns the currency formatted as "Name (CODE)".
     * @returns {string} e.g. "Euro (EUR)"
     */
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
export default Currency;
