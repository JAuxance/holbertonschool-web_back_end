/**
 * Represents a Holberton course with type-checked attributes.
 */
class HolbertonCourse {
    /**
     * @param {string} name - Course name.
     * @param {number} length - Course length (in weeks).
     * @param {string[]} students - Names of enrolled students.
     */
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }

    /** @returns {string} The course name. */
    get name() {
        return this._name;
    }

    /**
     * @param {string} newName - Replacement name.
     * @throws {TypeError} If `newName` is not a string.
     */
    set name(newName) {
        if (typeof newName !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = newName;
    }

    /** @returns {number} The course length. */
    get length() {
        return this._length;
    }

    /**
     * @param {number} newLength - Replacement length.
     * @throws {TypeError} If `newLength` is not a number.
     */
    set length(newLength) {
        if (typeof newLength !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = newLength;
    }

    /** @returns {string[]} The enrolled students. */
    get students() {
        return this._students;
    }

    /**
     * @param {string[]} newStudents - Replacement student list.
     * @throws {TypeError} If `newStudents` is not an array of strings.
     */
    set students(newStudents) {
        if (!Array.isArray(newStudents) || !newStudents.every((s) => typeof s === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = newStudents;
    }
}

export default HolbertonCourse;
