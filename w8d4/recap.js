// Javascript Classes

// Blueprint
//

// const bob = []
// const bob2 = new Array()

// new Date()
// new Promise((res, rej) => //...)

class Potato {
  constructor(name, nickname) {
    this.name = name;
    this.nickname = nickname || "Not cool enough for a nickname";
  }

  throwMe() {
    console.log("HAAAAAAA");

    console.log("SPLOUTCH");
  }

  greet() {
    console.log("Hi I am " + this.name);
  }
}

class SuperPotato extends Potato {
  constructor(name, nickname) {
    super(name, nickname);
    // this.nickname = "Super don't need nicknames";
  }

  throwMe() {
    console.log("HAAAAAAAA");

    console.log("SURPRISE");

    console.log("*FLIES AWAY*");
  }
}

// const somePotato = new Potato("Yukon Gold", "Bud the spud");
// const somePotato2 = new Potato("Russet", "Potator");

// console.log(somePotato);

// somePotato.throwMe();
// somePotato2.greet();

const superPotato = new SuperPotato("Spud Lightyear", "Dark Lord of Soil");

console.log(superPotato);

superPotato.throwMe();

const someFunction = function () {
  console.log("I AM AN OBJECT!", this);
};

someFunction();

// Hooks simpler to implement
// Hooks more modular
// custom hooks

usePotato;
