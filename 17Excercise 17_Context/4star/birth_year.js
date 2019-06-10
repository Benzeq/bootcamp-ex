var wolverine = {
    birth_year: 1888,
    printBirthYear: function () {
        console.log(this.birth_year);
    }
}
birth_year = 1900;


// 1900 global - can use this || window
wolverine.printBirthYear.call(this);

// 1888 inside a block
wolverine.printBirthYear.call(wolverine);
