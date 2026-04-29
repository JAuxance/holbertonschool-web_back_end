/**
 * Concatenates two arrays and appends a trailing string using the spread operator.
 * @param {Array} array1 - First array.
 * @param {Array} array2 - Second array.
 * @param {*} string - Final element appended to the result.
 * @returns {Array} A new array: `[...array1, ...array2, string]`.
 */
export default function concatArrays(array1, array2, string) {
    return [...array1, ...array2, string];
}
