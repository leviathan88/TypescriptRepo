//Functions
// named function
function greet(name? : string) : string {
  if(name){
    return "Hi! " + name;
  }
  else
  {
    return "Hi!";
  }
}

// anonymous function
var greet = function(name? : string) : string {
  if(name){
    return "Hi! " + name;
  }
  else
  {
    return "Hi!";
  }
}

//There is an alternative function syntax, which uses the arrow (=>) operator after the function’s return type
//and skips the usage of the function keyword.
var greet = (name : string) : string =>  {
    if(name){
      return "Hi! " + name;
    }
    else
    {
      return "Hi! my name is " + this.fullname;
    }
};

// We can now add the type annotations to the greet variable to match the anonymous function signature.
var greet : (name : string) => string = function(name : string) : string {
    if(name){
      return "Hi! " + name;
    }
    else
    {
      return "Hi!";
    }
};

//he usage of this kind of annotations is really common when we use a call back (functions used as an argument of another function).
function sume(a : number, b : number, callback : (result:number) => void){
  callback(a+b);
}
