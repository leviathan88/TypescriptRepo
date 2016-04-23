//Mixins
//Sometimes, we will find scenarios in which it would be a good idea to declare a class that inherits from two or more classes simultaneously
//(known as multiple inheritance).
class Animal {
  eat() {
    // ...
  }
}

//now lets crete two classes that inherit Animal
class Mammal extends Animal {
  breathe() {
    // ...
  }
}

class WingedAnimal extends Animal {
  fly(){
    // ...
  }
}


//what if we wanted to create Bat class that inherits from both Mamal and WingedAnimal
//we would have a diamond problem if we were able to use multiple inheritance

//The diamond problem takes place when we try to invoke one of the Bat class's parent's methods,
//and it is unclear or ambiguous which of the parent's implementations of that method should be invoked.
//If we add a method named move to both the Mammal and the WingedAnimal class and try to invoke it from an instance of Bat,
//we will get an ambiguous call error.

//Mixins are alternatives to multiple inheritance, but this feature has some limitations.
//first limitation the class that is to be implemented from cannot extend any other class,
//so we will remove extend Animal, and we get this:
class Mammal {
  breathe() : string {
    return "I'm alive!";
  }
}

class WingedAnimal {
  fly() : string{
    return "I can fly!";
  }
}
class Bat implements Mammal, WingedAnimal {
  breathe : () => string;
  fly : () => string;
}
//The Bat class has some important additions. We have used the reserved keyword implements (as opposed to extends) to indicate that
//Bat will implement the functionality declared in both the Mammal and WingedAnimal classes.
//We have also added the signature of each of the methods that the Bat class will implement.

//We need to copy the following function somewhere in our code to be able to apply mixins:
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (name !== 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}

//This function will iterate each property of the parent classes (contained in an array named baseCtors)
//and copy the implementation to a child class (derivedCtor).
//We only need to declare this function once in our application. Once we have done it, we can use it as follows:
applyMixins(Bat, [Mammal, WingedAnimal]);

//The child class (Bat) will then contain the implementation of each property and method of the two parent classes (WingedAnimal and Mammal):
var bat = new Bat();
bat.breathe(); // I'm alive!
bat.fly();     // I can fly!
