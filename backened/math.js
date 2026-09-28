function sum(a, b) {
    return a + b;
}
module.exports = sum;

function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
module.exports = { sum, multiply, divide };

export { sum, multiply, divide };