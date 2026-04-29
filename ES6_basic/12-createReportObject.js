/**
 * Builds a report object that copies the provided employees list and
 * exposes a method to count its departments. Uses the spread operator
 * and an ES6 shorthand method definition.
 * @param {Object<string, Array>} employeesList - Departments mapped to employees.
 * @returns {{allEmployees: Object, getNumberOfDepartments: (list: Object) => number}}
 */
export default function createReportObject(employeesList) {
    return {
        allEmployees: {
            ...employeesList,
        },
        getNumberOfDepartments(employeesList) {
            return Object.keys(employeesList).length;
        },
    };
}
