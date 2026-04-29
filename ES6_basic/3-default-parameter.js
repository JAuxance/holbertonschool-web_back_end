/**
 * Sums an initial number with two expansion counts, using ES6 default parameters.
 * @param {number} initialNumber - Starting value.
 * @param {number} [expansion1989=89] - Expansion count from 1989.
 * @param {number} [expansion2019=19] - Expansion count from 2019.
 * @returns {number} The sum of the three values.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
