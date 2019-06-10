var stop = document.getElementById("stopButton");

var num = document.getElementById("number").innerText;

var numInt = parseInt(num);

var increaseNum = setInterval(function() {
    numInt++;
    document.getElementById("number").innerText = numInt;
}, 1000);

stop.addEventListener('click', stopFunc);

function stopFunc() {
    clearInterval(increaseNum);
}
