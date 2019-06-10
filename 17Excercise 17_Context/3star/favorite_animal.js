var spiderMan = {
    favourite_animal: "spider"
}

function printFavouriteAnimal() {
    console.log(this.favourite_animal);
    return this.favourite_animal;
}

// object context
let obj = this.printFavouriteAnimal.bind(spiderMan)();

// global scope

let global =  spiderMan;

let globalScope = this.printFavouriteAnimal.bind(global)();

// function on the fly

printFavouriteAnimal.bind({favourite_animal: "spider"})();




