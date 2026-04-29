/**
 * Abstract base class for buildings. Cannot be instantiated directly;
 * subclasses must override {@link Building#evacuationWarningMessage}.
 * @abstract
 */
class Building {
    /**
     * @param {number} sqft - Floor area in square feet.
     * @throws {Error} If instantiated directly instead of through a subclass.
     */
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error('Building is an abstract class and cannot be instantiated directly');
        }
        this._sqft = sqft;
    }

    /** @returns {number} The floor area in square feet. */
    get sqft() {
        return this._sqft;
    }

    /**
     * Hook to be overridden by subclasses to return a building-specific
     * evacuation message.
     * @abstract
     * @returns {string}
     * @throws {Error} When called on a subclass that did not override it.
     */
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}

export default Building;