/**
 * Counts how many arguments were passed, using the ES6 rest parameter.
 * @param {...*} args - Any number of arguments of any type.
 * @returns {number} The number of arguments received.
 */
export default function returnHowManyArguments(...args) {
    return args.length;
}
