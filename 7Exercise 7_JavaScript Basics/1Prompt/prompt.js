
var firstInput = prompt("Enter your first number:");
var secondInput = prompt("Enter your second number:");
var smallNum, bigNum;

 if (firstInput > secondInput) {
   smallNum = secondInput;
   bigNum = firstInput;
} else {
  smallNum = firstInput ;
  bigNum = secondInput;
}
if (smallNum == 0) {
  console.log("1");
} else {
  console.log(bigNum / smallNum);
}





var userInput = prompt("Enter your input:");
var result = parseInt(userInput);

if (isNaN(result)) {
console.log(userInput + "!!!");
} else {
    console.log (result + 5);
}





var firstStr = prompt("Enter first input:");
var secondStr = prompt("Enter second input:");

if (firstStr.toLowerCase() === secondStr.toLowerCase()) {
    console.log(true);
} else{
    console.log(false);
}
