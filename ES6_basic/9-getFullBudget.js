import getBudgetObject from './7-getBudgetObject.js';

/**
 * Extends a budget object with formatting methods, using the spread operator
 * and ES6 shorthand method definitions.
 * @param {number} income - Income value used to format dollars/euros.
 * @param {*} gdp - GDP value forwarded to the underlying budget object.
 * @param {*} capita - Per-capita value forwarded to the underlying budget object.
 * @returns {Object} The budget object plus `getIncomeInDollars` and `getIncomeInEuros`.
 */
export default function getFullBudgetObject(income, gdp, capita) {
    const budget = getBudgetObject(income, gdp, capita);
    const fullBudget = {
        ...budget,
        getIncomeInDollars(income) {
            return `$${income}`;
        },
        getIncomeInEuros(income) {
            return `${income} euros`;
        },
    };

    return fullBudget;
}
