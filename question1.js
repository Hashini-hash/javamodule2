
var numbers = [];


for (var i = 0; i < 5; i++) {
     var input = prompt("Enter number " + (i + 1) + ":");
     var number = parseFloat(input);


    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        console.log("Invalid input. Please enter a valid number.");

        i--;
    }
}


console.log("Numbers in reverse order:");

for (var j = numbers.length - 1; j >= 0; j--) {
    console.log(numbers[j]);
}
