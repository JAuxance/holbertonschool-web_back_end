/**
 * Returns the current calendar year.
 * @returns {number} A four-digit year (e.g. 2026).
 */
function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}

/**
 * Builds a budget object whose keys are computed at runtime
 * from the current year, using ES6 computed property names.
 * @param {*} income - Income value.
 * @param {*} gdp - GDP value.
 * @param {*} capita - Per-capita value.
 * @returns {Object} An object with keys `income-YYYY`, `gdp-YYYY`, `capita-YYYY`.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {
        [`income-${getCurrentYear()}`]: income,
        [`gdp-${getCurrentYear()}`]: gdp,
        [`capita-${getCurrentYear()}`]: capita,
    };

    return budget;
}