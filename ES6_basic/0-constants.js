/**
 * Demonstrates the use of `const` for an immutable binding.
 * @returns {string} A sentence stating a preference for `const`.
 */
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}

/**
 * Returns the trailing fragment used by {@link taskNext}.
 * @returns {string} The string " is okay".
 */
export function getLast() {
    const last = ' is okay';
    return last;
}

/**
 * Demonstrates the use of `let` for a reassignable binding.
 * @returns {string} The combined sentence "But sometimes let is okay".
 */
export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}
