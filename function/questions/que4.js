// factorial

function factorial(num) {
    for (i = 1; i <= num; i++) {
        fact = num * i
    }
    return fact
}
console.log(factorial(5));