var div1 = $("<div/>");

$("body").append(div1);

div1.text("some text");

var div2 = $("<div/>");


$("body").append(div2);

div2.text("some other text");

$(document).ready(function () {
    setTimeout(function () {
        $("div").addClass("some-container");
    }, 5000);
});