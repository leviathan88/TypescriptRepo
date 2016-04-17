//Asynchronous programming in TypeScript
//The function passed to another as an argument is known as a callback
//The functions that accept functions as parameters (callbacks) or return functions as an argument are known as higher-order functions.
//Callbacks are usually anonymous functions.

//An arrow function expression has a shorter syntax compared to function expressions and lexically binds the value of the this operator.
class Person {
    name : string;
  constructor(name : string) {
    this.name = name;
  }
  greet() {
   alert(`Hi! My name is ${this.name}`);
  }
  greetDelay(time : number) {
   setTimeout(() => {
     alert(`Hi! My name is ${this.name}`);
   }, time);
  }
}
//By using an arrow function, we can ensure that the this operator still points to the Person instance and not to the setTimeout callback

//Generators
//a new kind of function which may be paused in the middle of execution—one or many times—and resumed later,
//allowing other code to run during these paused periods
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5;
}

var bar = new foo();
bar.next(); // Object {value: 1, done: false}
bar.next(); // Object {value: 2, done: false}
bar.next(); // Object {value: 3, done: false}
bar.next(); // Object {value: 4, done: false}
bar.next(); // Object {value: 5, done: true}
bar.next(); // Object { done: true }
