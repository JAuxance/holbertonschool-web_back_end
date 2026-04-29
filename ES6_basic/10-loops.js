/**
 * Prepends a string to every element of an array, in place,
 * using a `for...of` loop with `Array.prototype.entries()` destructuring.
 * @param {string[]} array - The array to mutate.
 * @param {string} appendString - The prefix to add to each element.
 * @returns {string[]} The same array, with each element prefixed.
 */
export default function appendToEachArrayValue(array, appendString) {
    for (const [idx, value] of array.entries()) {
        array[idx] = appendString + value;
    }

    return array;
}