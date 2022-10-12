
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

            let numbers = [1,5,2,99,81,100,144,121,91,85,74,10];
        
        console.log(numbers);
        console.log(quickSort(numbers));
        document.write(quickSort(numbers));
