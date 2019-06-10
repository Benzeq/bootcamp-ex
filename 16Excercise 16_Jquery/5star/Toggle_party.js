$("body").append("<button/>");
$('button')[0].innerText = "click to change";
$("button").on('click', function () {
    $("div").toggleClass("blue-bg");
});