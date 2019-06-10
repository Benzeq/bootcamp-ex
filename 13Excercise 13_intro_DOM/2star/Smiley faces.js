var containImg = document.getElementsByTagName("div")[0];

var userEvent = document.getElementById("submit");

userEvent.addEventListener('click', userInput);

var inputBar = document.getElementById("num");

function userInput() {

    var inputValue = inputBar.value;
    containImg.innerHTML = "";
    for (var i = 0; i < inputValue; i++) {
        var smily = document.createElement("img");
        smily.setAttribute('src', "http://im.rediff.com/getahead/2015/nov/25smile.jpg");
        smily.style.height = "150px";
        smily.style.width = "150px";
        containImg.appendChild(smily);
    };
}