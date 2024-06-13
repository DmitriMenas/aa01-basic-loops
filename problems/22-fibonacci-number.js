/*
Write a function fib that accepts a number n as an argument. The function should
return the "n-th" number of the Fibonacci sequence. The first two numbers of the
Fibonacci sequence are 1; to generate subsequent numbers of the Fibonacci
sequence, we take the sum of the previous two numbers of the sequence.
*/

function fib(n){
    let arr = [1, 1];
    let sum = 0
    for(let i = 2; i <= n; i++){
        if(arr.length === 2){
        sum = arr[i - 2] + 0;
        arr.push(sum)
        } else if (arr.length > 0){
            sum = arr[i - 2] + arr[i-1];
            arr.push(sum)
        }
    }
    return arr[arr.length - 1]
}

console.log(fib(1));    // 1
console.log(fib(2));    // 1
console.log(fib(3));    // 2
console.log(fib(4));    // 3
console.log(fib(5));    // 5
console.log(fib(6));    // 8
console.log(fib(10));   // 55
console.log(fib(11));   // 89
console.log(fib(12));   // 144

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fib;
