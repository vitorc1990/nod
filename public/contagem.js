let number = prompt("informe o valor de N");
contador = 0;
i = 0;

while (i < number) {
    contador = contador + 1
    i++
}

console.log(`A quantidade de valores inteiros existentes entre 1 e ${number} é ${contador}`)
document.write(`A quantidade de valores inteiros existentes entre 1 e ${number} é ${contador}`);