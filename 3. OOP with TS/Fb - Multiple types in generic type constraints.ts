//Multiple types in generic type constraints
//Let's imagine that we need a generic class to be constrained, so it only allows types that implement the following two interfaces:
interface IMyInterface {
  doSomething();
};
interface IMySecondInterface {
  doSomethingElse();
};
//We cannot specify multiple types when declaring a generic type constraint.
//However, we can work around this issue by transforming IMyInterface, IMySecondInterface in super-interfaces:
interface IChildInterface extends IMyInterface, IMySecondInterface {

}
class Example<T extends IChildInterface> {
  private genericProperty : T;
  useT() {
    this.genericProperty.doSomething();
    this.genericProperty.doSomethingElse();
  }
}

//The new operator in generic types
//To create a new object within generic code, we need to indicate that the generic type T has a constructor function.
//This means that instead of using type:T, we should use type: { new(): T;} as follows:
function factoryNotWorking<T>(): T {
    return new T(); // compile error could not find symbol T
}

function factory<T>(): T {
  var type: { new(): T ;};
  return new type();
}

var myClass: MyClass = factory<MyClass>();
