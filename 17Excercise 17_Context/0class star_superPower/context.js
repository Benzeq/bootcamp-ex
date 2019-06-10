var storm = {
    superPower: "Weather Control",
    direct: printSuperPower
};

function printSuperPower() {
    console.log("my superpower is " + this.superPower);
};
storm.direct();