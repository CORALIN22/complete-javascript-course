// 'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const Jonas = new Person('Jonas', 1991);
// const Cora = new Person('Coralin ', 1994);
// console.log(Cora);

// //1. New {} Empty Object is created
// //2. functions is called, this  = {}
// //3. Linked to a prototyped
// //4.function automatically return {}
// console.log(Person.prototype);
// //Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Jonas.calcAge();
// Jonas.calcAge();
// console.log(Jonas.__proto__);
// console.log(Jonas.__proto__ === Person.prototype);

// console.log(Jonas.hasOwnProperty('firstName'));
// //object.prototype (top of prototype chain)
// console.log(Jonas.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 5, 3, 6, 7, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// const result = arr.reduce((a, b) => {
//   return a + b;
// }, 0);

// console.log(result);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

class Plants {
  constructor(name, kind, color) {
    this._name = name;
    this._kind = kind;
    this._color = color;
  }

  get name() {
    return this._name;
  }

  get kind() {
    return this._kind;
  }

  get color() {
    return this._color;
  }
}

let plants = [
  new Plants('Rose', 'flower', 'red'),
  new Plants('Cactos', 'flower', 'Green'),
  new Plants('Tomato', 'Vegetable', 'red'),
];
console.log(
  Plants.rose.forEach(srt => {
    return `Hey ${srt}`;
  })
);
