var text = document.querySelector("div");


var plusButton = document.getElementById("a");
var minusButton = document.getElementById("b");

plusButton.addEventListener('click', plusBtn);
minusButton.addEventListener('click', minusBtn);

var counter = 25;

function plusBtn() {
    if (counter > 6 && counter < 100) {
        counter = counter + 2;
        text.style.fontSize = counter + 'px';
        
    }
}

function minusBtn() {
    if (counter > 6 && counter < 100) {
        counter = counter - 2;
        text.style.fontSize = counter + 'px';
        
    }
}