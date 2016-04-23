//VAR, LET, AND CONST
//Variables declared with var are scoped to the nearest function block (or global, if outside a function block).
//Variables declared with let are scoped to the nearest enclosing block (or global if outside any block),
//which can be smaller than a function block.
//The const keyword creates a constant that can be global or local to the block in which it is declared.
//This means that constants are block scoped.

//UNION TYPES
//Union types are used to declare a variable that is able to store a value of two or more types.
var path: string[]|string;
path = '/temp/log.xml';
path = ['/temp/log.xml', '/temp/errors.xml'];
//both work

//Type Guards
//We can examine the type of an expression at runtime by using the typeof or instanceof operators.
var x: any = { /* ... */ };
if(typeof x === 'string') {
  console.log(x.splice(3, 1)); // Error, 'splice' does not exist on 'string'
}
// x is still any
x.foo(); // OK
//If the type of x results to be string, we will try to invoke the method splice, which is supposed to a member of the x variable.
//The TypeScript language service is able to understand the usage of typeof in a conditional statement.
//TypeScript will automatically assume that x must be a string and let us know that the splice method does not exist on the type string.
//This feature is known as type guards.

//TYPE ALIASES
type PrimitiveArray = Array<string|number|boolean>;
type MyNumber = number;
type NgScope = ng.IScope;
type Callback = () => void;
//Type aliases are exactly the same as their original types; they are simply alternative names.
//Type aliases can help us to make our code more readable but it can also lead to some problems.
