//Asynchronous functions – async and await
//An asynchronous function is a function that is expected to be invoked in a synchronous operation.
//Developers can use the await keyword to wait for the function results without blocking the normal execution of the program.
var p: Promise<number> = /* ... */;

async function fn(): Promise<number> {
  var i = await p;
  return 1 + i;
}
//The preceding code snippet declares a promise named p. This promise is the piece of code that will wait to be executed.
//While waiting, the program execution will not be blocked because we will wait from an asynchronous function named fn
