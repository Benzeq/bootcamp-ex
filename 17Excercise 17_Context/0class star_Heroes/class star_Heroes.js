var wonderWoman = {
    name: "Diana Prince"
}
var batman = {
    name: "Bruce Wayne"
}
var superHeroes = [wonderWoman, batman];


function printName() {
    console.log("my name is " + this.name);
}


function printHeroes(heroes, printFunc) {
    for(var i =0; i < heroes.length; i++) { 
       var bindFunc = printFunc.bind(heroes[i]);
       bindFunc();
    }
};
printHeroes(superHeroes, printName);