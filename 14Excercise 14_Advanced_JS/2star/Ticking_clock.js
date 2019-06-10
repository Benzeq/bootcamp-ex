setInterval(clock, 1000);

function clock() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    document.getElementsByTagName("p")[0].innerHTML = time;
}