// ENCAPSULATION with CLASS
// https://sebhastian.com/encapsulation-javascript/

// My understanding: 
// the PROPERTIES of a class (including variables) are PRIVATE
// they can only be accessed or changed 
// using the FUNCTIONS in the class
// ( via GETTERS or SETTERS )

// The main benefit of encapsulation is that it helps you to create objects without having their internals modified in unintended ways.

// When you use encapsulation, you can be sure that the object will be modified in a predictable way. This makes your code more robust against errors.

// Generally, objects you created in JavaScript are not encapsulated as you can access and change their properties.

// Encapsulation can be implemented in a JavaScript CLASS or FUNCTION.

class Person {
  #name = "Nathan";

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }
}

// The name variable above is declared using the hashtag # symbol in front of it.

// The hashtag is a symbol for private modifier in JavaScript classes, allowing you to create private properties and methods.

// When you try to access the private field directly, a syntax error will be thrown by JavaScript

// To access the private property, you need to use the provided getName() method. To change it, you need to use the provided setName() method.

// And that’s how you can implement encapsulation in JavaScript




function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}