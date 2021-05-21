/* 
1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius 
*/

function convertFahrToCelsius(val) {
    if (typeof val === "string" || typeof val === "number") {
        var num = parseInt(val);
    // 1F = 1.8c + 32 (e.g 0deg C = 32deg F)
        var answer = ((num - 32) / 1.8);
        var answerDec = answer.toFixed(4);
            return `'${answerDec}'`
    };

    if (Array.isArray(val)) {
        return `[${val}] is not a valid number but a/an Array.` 
    };
    if (typeof val === "object") {
        var value = JSON.stringify(val);
        return `${value} is not a valid number but a/an object`
    };

}

    console.log(convertFahrToCelsius("5"));
    console.log(convertFahrToCelsius(5));
    console.log(convertFahrToCelsius("55"));
    console.log(convertFahrToCelsius([5,2,6,8]));
    console.log(convertFahrToCelsius({obj:1 , name: "John"}));


    /*
    2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers
    from 1 to n and replaces factors of 2, 3, and 5 with "yu", "gi" and "oh", logs the rsulting array
    to the console then return the resulting array.
    */

    function checkYuGiOh(n) {
        if(typeof n === "number") {
            var answer = able(n);
            return answer;
        }

        if (typeof n === "string") {
            var num = parseInt(n);
            if(isNaN(num)){
                //var content = JSON.strignify(num);
                return `invalid parameter: "${n}"`
            }
            else if (isNaN(num)) {
                var answer = able(num);
                return answer;
            }    
        }

        if(typeof n === "boolean" || typeof n === "object" || typeof n === "undefined" ||
        Array.isArray(n) || typeof n === "function") {
            var content = JSON.stringify(n);
            return `invalid parameter: "${content}"`
        }
    };

    //end of function checkyugioh
    //start of function able

    function able(num) {
        var arr = [];
        for(var i=1; i<= num; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            arr.push("yu-gi-oh");
        }
        else if(i % 2 === 0 && i % 3 === 0){
            arr.push("yu-gi");
        }
        else if(i % 2 === 0 && i % 5 === 0) {
            arr.push("yu-oh");
        }
        else if(i % 3 === 0 && i % 5 === 0){
            arr.push("gi-oh");
        }
        else if(i % 2 === 0){
            arr.push("yu");
        }
        else if(i % 3 === 0){
            arr.push("gi");
        }
        else if(i % 5 === 0){
            arr.push("oh");
        }
        else {arr.push(i)}
        }
        return arr;
    }
    
    console.log(checkYuGiOh(29));
    console.log(checkYuGiOh(50));
    console.log(checkYuGiOh("29"));
    console.log(convertFahrToCelsius("John"));
    console.log(convertFahrToCelsius([1,2,3,4]));
    console.log(checkYuGiOh({name: "John", age: 20}));
    console.log(checkYuGiOh("fizzbuzz is meh"));
