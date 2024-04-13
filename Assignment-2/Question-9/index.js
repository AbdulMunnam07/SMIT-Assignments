let N = 10;
let series = fibonacciSeries(N);

function fibonacciSeries(n) {
    let fibSeries = [];

    if (n >= 1) {
        fibSeries.push(0);
    }
    if (n >= 2) {
        fibSeries.push(1);
    }

    for (let i = 2; i < n; i++) {
        let nextFib = fibSeries[i - 1] + fibSeries[i - 2];
        fibSeries.push(nextFib);
    }

    return fibSeries;
}console.log("Fibonacci series for N =", N, ":", series);