/**
 * Represents an airport. Customizes `Object.prototype.toString` output via
 * `Symbol.toStringTag` so that an instance prints as `[object <code>]`.
 */
class Airport {
    /**
     * @param {string} name - Airport name.
     * @param {string} code - IATA code (used as the `toStringTag`).
     */
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    /** @returns {string} The airport name. */
    get name() {
        return this._name;
    }

    /** @returns {string} The IATA code. */
    get code() {
        return this._code;
    }

    /** @returns {string} The IATA code, used by `Object.prototype.toString`. */
    get [Symbol.toStringTag]() {
        return this._code;
    }
}
export default Airport;
