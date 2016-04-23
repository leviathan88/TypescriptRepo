class Person {
  public name : string;
  public surname : string;
  public email : string;
  constructor(name : string, surname : string, email : string){
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
