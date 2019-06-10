let dog = {
    name: "sparky"
};
let black_dog = {
    name: "blacky"
}
const x16 = dog;
x16 = black_dog;
x16;
// first case x16 is const, and cannot be changed to black_dog
let dog = {
    name: "sparky"
};
let black_dog = {
    name: "blacky"
}
const x16 = dog;
dog.name = "blacky";
x16;

/* second case x16 overlaped first property (sparky),
and changed to blacky.
now x16 console.log blacky, without changing the const,
so no problem here. */