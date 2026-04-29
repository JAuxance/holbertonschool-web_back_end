import Building from "./5-building";

/**
 * High-rise building. Concrete subclass of {@link Building}.
 * @extends Building
 */
class SkyHighBuilding extends Building {
    /**
     * @param {number} sqft - Floor area in square feet.
     * @param {number} floors - Number of floors.
     */
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors;
    }

    /** @returns {number} The number of floors. */
    get floors() {
        return this._floors;
    }

    /**
     * @override
     * @returns {string} Evacuation message mentioning the floor count.
     */
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}

export default SkyHighBuilding;
