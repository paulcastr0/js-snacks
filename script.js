let num1 = prompt("The first number is : ", "0");
let num2 = prompt("The second number is : ", "0");

let number1 = parseInt(num1);
let number2 = parseInt(num2);

if(number1 > number2) {
    console.log(number1)
}
else if(number1 == number2) {
    console.log("The numbers are even. Try again!")
} else {
    console.log(number2)
}
