/*Fibonacci Series - A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series - 1, 1, 2, 3, 5, 8
*/

// Recursion
function fibonacci(n) {
    if (n < 1) {
        return 0;
    }
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n -2);
}

// Method 2 - Loop

function fibonacci(number) {
    var previous_first = 0, previous_second = 1, next = 1;

    for (var i = 2; i <= number; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }

    return next;
}