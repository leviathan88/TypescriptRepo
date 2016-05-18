class Person {
  public name : string;
  public surname : string;
  public email : Email;
  constructor(name : string, surname : string, email : Email){
    this.email = email;
    this.name = name;
    this.surname = surname;
  }
  greet() {
    alert("Hi!");
  }
}

var me = new Person("elvis", "dedic", "some@se.com");
//Class attributes are used to describe the object's characteristics, while class methods are used to describe its behavior.

//A constructor is a special method used by the new keyword to create instances (also known as objects) of our class.
//We have declared a variable named me, which holds an instance of the Person class.
//The new keyword uses the Person class's constructor to return an object whose type is Person.
class Email {
  private email : string;
  constructor(email : string){
    if(this.validateEmail(email)) {
      this.email = email;
    }
    else {
      throw new Error("Invalid email!");
    }
  }
  private validateEmail(email : string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  get():string {
    return this.email;
  }
}
