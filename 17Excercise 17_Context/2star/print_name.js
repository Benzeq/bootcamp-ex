let person = {
    name: "Dave",

    nameFunc: function () {
        console.log(this.name);
        
    },

    secondFunc: function () {
        let a = this.nameFunc.bind(person)

        setTimeout(a, 1000);
    }
      
};
person.nameFunc();  
person.secondFunc();
