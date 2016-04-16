console.log(greetNamed("John"));
console.log(greetUnnamed("John"));

//function declaration  -- the interpreter can evaluate the function declaration as it is being parsed
function greetNamed(name: string) : string {
  if (name) {
    return "Hi! " + name;
  }
}

//function expression  -- is part of an assignment and will not be evaluated until the assignment has been completed
var greetUnnamed = function(name: string): string {
  if (name) {
    return "Hi! " + name;
  }
}

//when this code is compiled into JS, first log statment will work because JS knows about the declaration function
//and can parse it before program is esecuted
//However, the second alert statement will throw an exception, which indicates that greetUnnamed is not a function.
//The exception is thrown because the greetUnnamed assignment must be completed before the function can be evaluated.


var greetUnnamed : (name : string) => string;
greetUnnamed = function (name : string) : string {
  if(name){
    return "Hi! " + name;
  }
}

//Functions with optional parameters
//Unlike JavaScript, the TypeScript compiler will throw an error if we attempt to invoke a function without
//providing the exact number and type of parameters that its signature declares.

//to use optional arguments we use '?'
function add(foo : number, bar : number, foobar? : number) : number {
  var result =  foo + bar;
  if(foobar !== undefined){
    result += foobar;
  }
  return result;
}
