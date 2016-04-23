//TypeScript added optional static type annotations to JavaScript in order to transform it into a strongly typed programming language.
//The language element that allows us to declare the type of a variable is known as optional static type notation
var counter;               // unknown (any) type
var counter = 0;           // number (inferred) This process in which types are automatically detected is known as Type inference
var counter : number;      // number
var counter : number = 0;  // number

//The basic types are the Boolean, number, string, array, void types, and all user defined Enum types.
//All types in TypeScript are subtypes of a single top type called the Any type

//two ways to declare arrays
var list:Array<number> = [1, 2, 3];
var list:number[] = [1, 2, 3];

//creating Enums
enum Color {Red, Green, Blue};
var c: Color = Color.Green;

//using any with arrays
var list:any[] = [1, true, "free"];
list[1] = 100;

//We CANNOT use undefined and null in TS
//In JavaScript, undefined is a property in the global scope that is assigned as a value to variables that have been declared
//but have not yet been initialized.
//The value null is a literal (not a property of the global object). It can be assigned to a variable as a representation of no value.
var TestVar;           // variable is declared but not initialized
alert(TestVar);        // shows undefined
alert(typeof TestVar); // shows undefined

var TestVar = null;    // variable is declared and value null is assigned as value
alert(TestVar);        // shows null
alert(typeof TestVar); // shows object
