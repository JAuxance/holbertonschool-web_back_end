class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    get brand() {
        return this._brand;
    }

    get motor() {
        return this._motor;
    }

    get color() {
        return this._color;
    }
    /**
     * This method returns a new instance of the Car class with the same properties as the current instance.
     * @returns {Car} A new Car instance with the same brand, motor, and color as the current instance.
     */
    coloneCar() {
        return new Car(this._brand, this._motor, this._color);
    }
}

export default Car;