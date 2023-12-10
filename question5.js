'use strict';

var enteredNumbers = [];


while (true) {
    var input = prompt("Enter a number (enter the same number to stop):");
    var number = parseFloat(input);


    if (!isNaN(number)) {

        if (enteredNumbers.includes(number)) {
            console.log("The number " + number + " has already been entered. Stopping operation.");
            break;
        } else {
            enteredNumbers.push(number);
        }
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}


enteredNumbers.sort(function(a, b) {
    return a - b;
});


console.log("Entered numbers in ascending order:");
for (var i = 0; i < enteredNumbers.length; i++) {
    console.log(enteredNumbers[i]);
}
