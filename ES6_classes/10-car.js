/**
 * Represents a car defined by its brand, motor and color.
 */
class Car {
    /**
     * @param {string} brand - Car brand.
     * @param {string} motor - Motor type.
     * @param {string} color - Car color.
     */
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    /** @returns {string} The car brand. */
    get brand() {
        return this._brand;
    }

    /** @returns {string} The motor type. */
    get motor() {
        return this._motor;
    }

    /** @returns {string} The car color. */
    get color() {
        return this._color;
    }

    /**
     * Returns a new instance of `Car` with the same properties as this one.
     * @returns {Car} A clone of the current instance.
     */
    coloneCar() {
        return new Car(this._brand, this._motor, this._color);
    }
}

export default Car;