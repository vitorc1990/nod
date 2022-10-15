
        function quickSort(Array){
        if(Array.length <= 1){
            return Array;
        }

        let pivot = Array[Array.length - 1];
        let leftArray = [];
        let rightArray = [];

        for(let i=0; i < Array.length-1;i++){
            Array[i] < pivot ? leftArray.push(Array[i]) :  rightArray.push(Array[i])
        }

            return [...quickSort(leftArray) ,pivot,...quickSort(rightArray)];

        }

        let numbers = [];
        var tests = parseInt(prompt("Quantos números você quer ordenar?"));
        var counter = 0;

        while(counter < tests) {
            var value = parseInt(prompt("Insira o número desejado: "));
            numbers.push(value);
            counter++;
        }

        document.write("A sequência original: " + numbers + "<br>");
        document.write("A sequência ordenada: " + quickSort(numbers));
