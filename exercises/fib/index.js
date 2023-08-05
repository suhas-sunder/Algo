// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// First solution - iterative w/ linear runtime
// function fib(n) {
//     const result = [0, 1];

//     for(let i = 2; i <= n; i++) {
//         result.push(result[i - 1] + result[i - 2])
//     }

//     return result[n];
// }

// Generic memoized function
function memoize(fn) {
    const cachedCalls = {}
    return function(...args) {
        // If previously cached, return cached value
        if(cachedCalls[args]) {
            return cachedCalls[args];
        }

        const result = fn.apply(this, args);
        cachedCalls[args] = result;
        
        return result;
    };
}

// Recursive solution - Exponential runtime (Not ideal!)
function fib(n) {
    return n < 2 ? n : memoizedFib(n - 1) + memoizedFib(n - 2);
}

const memoizedFib = memoize(fib);

module.exports = memoizedFib;
