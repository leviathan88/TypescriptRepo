//Classes
class Character {
  fullname : string;
  constructor(firstname : string, lastname : string) {
    this.fullname = firstname + " " + lastname;
  }
  greet(name? : string) {
    if(name)
    {
      return "Hi! " + name + "! my name is " + this.fullname;
    }
    else
    {
      return "Hi! my name is " + this.fullname;
    }
  }
}
//When we declare a class in TypeScript, all the methods and properties are public by default.

//Interfaces
//In TypeScript, we can use interfaces to enforce that a class follow the specification in a particular contract.
interface LoggerInterface{
  log(arg : any) : void;
}

class Logger implements LoggerInterface{
  log(arg){
    if(typeof console.log === "function"){
      console.log(arg);
    }
    else
    {
      alert(arg);
    }
  }
}

//Namespaces
namespace Geometry{
  interface VectorInterface {
        /* ... */
  }
  export interface Vector2dInterface {
        /* ... */
  }
  export interface Vector3dInterface {
        /* ... */
  }
  export class Vector2d implements VectorInterface, Vector2dInterface {
    /* ... */
  }
  export class Vector3d implements VectorInterface, Vector3dInterface {
    /* ... */
  }
}
