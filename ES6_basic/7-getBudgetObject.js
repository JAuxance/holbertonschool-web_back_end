/**
 * Builds a budget object using ES6 shorthand property names.
 * @param {*} income - Income value.
 * @param {*} gdp - GDP value.
 * @param {*} capita - Per-capita value.
 * @returns {{income: *, gdp: *, capita: *}} The budget object.
 */
export default function getBudgetObject(income, gdp, capita) {
    const budget = {
        income,
        gdp,
        capita,
    };

    return budget;
}
