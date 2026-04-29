/**
 * Builds a single-key object mapping a department name to its employees,
 * using an ES6 computed property name.
 * @param {string} departmentName - The key of the returned object.
 * @param {Array} employees - The list of employees for that department.
 * @returns {Object<string, Array>} An object of the form `{ [departmentName]: employees }`.
 */
export default function createEmployeesObject(departmentName, employees) {
    return {
        [departmentName]: employees
    };
}
