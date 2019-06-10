var div1 = $("<div/>");
$("body").append(div1);
div1.text("some text");

var div2 = $("<div/>");
$("body").append(div2);
div2.text("some other text");



$(document).ready(function () {
$("div").hover(function (eventObj) {
   $(eventObj.target).toggleClass('some-container');
    });
});