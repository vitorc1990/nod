
        let numbers = prompt("Informe a quantidade de números: ");
        let numero;
        let soma = 0;
        let i = 0;

        while (i < numbers) {
            numero = parseInt(prompt("Informe um número: "));
            soma = soma + numero;
            i++;
        }

        document.write(`A soma dos ${numbers} números é ${soma}`);


