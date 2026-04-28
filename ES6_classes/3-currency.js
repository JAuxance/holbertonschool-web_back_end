class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    get code() {
        return this._code;
    }

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
