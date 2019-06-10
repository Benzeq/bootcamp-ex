for (i = 1; i <= 100; i++) {
      console.log (i);
}




var i = 1;
while (i <= 100) {
    console.log (i++);
}




var str1 = "ASUS";
var str2 = "";
var i;
for (i = 0; i < str1.length; i++) {
    str2 += str1.charAt(str1.length-1-i);
}
console.log (str2);
