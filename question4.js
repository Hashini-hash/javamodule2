'use strict';

var numbers = [];


while (true) {
    var input = prompt("Enter a number (enter 0 to stop):");
    var number = parseFloat(input);


    if (!isNaN(number)) {
        if (number === 0) {
            break; 
        } else {
            numbers.push(number);
        }
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}


numbers.sort(function(a, b) {
    return b - a;
});


console.log("Numbers in descending order:");
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
