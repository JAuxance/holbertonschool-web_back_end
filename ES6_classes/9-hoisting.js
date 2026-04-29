/**
 * A Holberton class identified by its starting year and location.
 */
export class HolbertonClass {
    /**
     * @param {number} year - Class year.
     * @param {string} location - Class location.
     */
    constructor(year, location) {
        this._year = year;
        this._location = location;
    }

    /** @returns {number} The class year. */
    get year() {
        return this._year;
    }

    /** @returns {string} The class location. */
    get location() {
        return this._location;
    }
}

/**
 * A Holberton student, attached to a {@link HolbertonClass}.
 */
export class StudentHolberton {
    /**
     * @param {string} firstName - Student's first name.
     * @param {string} lastName - Student's last name.
     * @param {HolbertonClass} holbertonClass - The class the student belongs to.
     */
    constructor(firstName, lastName, holbertonClass) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._holbertonClass = holbertonClass;
    }

    /** @returns {string} `"FirstName LastName"`. */
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    /** @returns {HolbertonClass} The student's class. */
    get holbertonClass() {
        return this._holbertonClass;
    }

    /** @returns {string} `"FirstName LastName - year - location"`. */
    get fullStudentDescription() {
        return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];
