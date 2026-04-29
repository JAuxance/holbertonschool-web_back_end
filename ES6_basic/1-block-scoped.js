/**
 * Demonstrates block-scoping: the inner `let` declarations shadow the outer
 * ones only inside the `if` block, so the outer values are returned unchanged.
 * @param {boolean} trueOrFalse - Toggles entry into the inner block.
 * @returns {[boolean, boolean]} The outer `[task, task2]` pair, always `[false, true]`.
 */
export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;

    if (trueOrFalse) {
        let task = true;
        let task2 = false;
    }

    return [task, task2];
}
