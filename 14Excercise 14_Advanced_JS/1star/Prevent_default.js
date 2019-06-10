var input = document.getElementsByName("check")[0];
input.addEventListener('click', noClick);

function noClick(e) {
    e.preventDefault();
    var pTag = document.createElement("p");
    var text = document.createTextNode("Sorry this checkbox cannot be checked");
    pTag.appendChild(text)
    var parent = document.getElementsByTagName("div")[0];
    parent.appendChild(pTag);
}




