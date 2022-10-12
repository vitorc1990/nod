var tests = parseInt(prompt("Informe o número de testes desejado:"));
var prime = true;
for (i = 0; i < tests; i++) {
    var number = parseInt(prompt("numero:"));
    if (number <= 1) {
        prime = false;
    } else if (number > 1) {
        prime = true;
        for (counter = 2; counter < number; counter++) {
            if (number % counter == 0) {
                prime = false;
                break;
            } else if (number % counter != 0) {
                prime = true;
            }
        }
    }
    if (prime) {
        console.log(`${number} eh primo`);
        document.write(`${number} eh primo `);
    } else {
        console.log(`${number} nao eh primo`);
        document.write(`${number} nao eh primo `);
    }    
}