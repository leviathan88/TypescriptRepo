class Teacher extends Person {
  public subjects : string[];
  constructor(name : string, surname : string, email : Email, subjects : string[]){
    super(name, surname, email);
    this.subjects = subjects;
  }
  greet() {
    super.greet();
    alert("I teach " + this.subjects);
  }
  teach() {
    alert("Welcome to Maths class!");
  }
}
//We will use the super keyword to explicitly reference the parent class constructor inside the child class constructor.
//We can also use the super keyword when we want to extend an existing method, such as greet.
//This OOP language feature that allows a subclass or child class to provide a specific implementation of a method that is already provided
//by its parent classes is known as method overriding.

class SchoolPrincipal extends Teacher {
  manageTeachers() {
    alert("We need to help students to get better results!");
  }
}
//If we create an instance of the SchoolPrincipal class, we will be able to access all the properties and methods from its parent classes
//(SchoolPrincipal, Teacher, and Person):
//It is not recommended to have too many levels in the inheritance tree.
//A class situated too deeply in the inheritance tree will be relatively complex to develop, test, and maintain.
//Unfortunately, we don't have a specific rule that we can follow when we are unsure whether we should increase
//the depth of inheritance tree (DIT).

//We should try to keep the DIT between 0 and 4 because a value greater than 4 would compromise encapsulation and increase complexity.
