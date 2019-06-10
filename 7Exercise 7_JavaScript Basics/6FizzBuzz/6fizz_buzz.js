for (var i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 5 === 0) {
        if (i % 3 === 0) {
            console.log("FizzBuzz");
        } else {
            console.log("buzz");
        }
    } else if (i % 3 === 0) {
        console.log("fizz");
    }
}
