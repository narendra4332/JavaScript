// Fibonacci sequence.

function Fibonacci(num) {
    let fibSeries = [0, 1];
    for (i = 2; i < num; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
}
console.log(Fibonacci(10));