
function calculateMDC (a, b) {

    var rest;

        do {

            rest = a % b;

            a = b;    

            b = rest;

        } while (rest != 0);

        return a;

    }

var x = parseInt(prompt("Insira o primeiro valor:"));
var y = parseInt(prompt("Insira o segundo valor:"));
var result = calculateMDC(x, y);

console.log(result);
document.write(result);
