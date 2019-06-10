var userInput = prompt("try to guess! enter a number from 0-10:");
var compNum = Math.floor(Math.random() * 11);

console.log (compNum);

if (userInput == compNum) {
console.log ("GREAT SUCCESS!");
} 
else {
    console.log ("FAIL");
}

