// sum og digits 
function sumOfDigits(digit) {
    let result = digit.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b));
    return result
}
console.log(sumOfDigits(123))