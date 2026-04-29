/**
 * Represents a Holberton class. Implements `Symbol.toPrimitive` so that
 * coercion to a number returns the size and coercion to a string (or default)
 * returns the location.
 */
class HolbertonClass {
    /**
     * @param {number} size - Number of students.
     * @param {string} location - Class location.
     */
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    /** @returns {number} The class size. */
    get size() {
        return this._size;
    }

    /** @returns {string} The class location. */
    get location() {
        return this._location;
    }

    /**
     * Custom primitive coercion.
     * @param {"number"|"string"|"default"} hint - Coercion hint from the runtime.
     * @returns {number|string} `size` for `"number"`, `location` otherwise.
     */
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') return this._size;
        if (hint === 'string') return this._location;
        return this._location;
    }
}
export default HolbertonClass;
