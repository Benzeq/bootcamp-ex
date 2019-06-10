var inputTag = $('input');

var text = "";

inputTag.on('input', function () {
    for (var i = 0; i < inputTag.length; i++) {
       $(text) = inputTag[i].value;

       
    }
    });