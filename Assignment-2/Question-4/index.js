let base = 2;
let exponent = 3;
let result = power(base, exponent);

function power(base, exponent) {
    if (exponent === 0) {
        return 1; 
    }
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base; 
    }
    return result;
}console.log(result); 
