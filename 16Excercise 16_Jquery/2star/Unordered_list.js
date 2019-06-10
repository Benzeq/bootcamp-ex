var theList = $("<ul/>");
for (var i = 1; i < 6; i++) {
    var listItem = $("<li/>");
    listItem.addClass("item");
    listItem.text("item list " + i);
    theList.append(listItem);
}
$("body").append(theList);