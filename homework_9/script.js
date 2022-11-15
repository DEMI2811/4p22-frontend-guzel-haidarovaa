'use strict';

function makeFubonacciFunction() {
    let a = 0;
    let next = 1;

    return function() {
        next = a + next;
        let current = a = next - a;
        console.log(current);
    }
}

const fibonacci = makeFubonacciFunction();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
