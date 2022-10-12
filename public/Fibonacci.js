var counter = 0;
var nextTerm = 0;
var sequency = 3;
var fibonacci = [0,1];
do {
    nextTerm = fibonacci[0 + counter] + fibonacci[1 + counter];
    fibonacci.push(nextTerm);
    counter++;
} while (counter < sequency);
fibonacci.length = sequency;
console.log(fibonacci.join(" "));

document.write("A sequência Fibonacci é: " + fibonacci.join(" "));
