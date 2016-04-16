//Functions with rest parameters
function add(...foo : number[]) : number {
  var result = 0;
  for(var i = 0; i < foo.length; i++){
    result += foo[i];
  }
  return result;
}

//Function overloading
function test(name: string) : string;    // overloaded signature
function test(age: number) : string;     // overloaded signature
function test(single: boolean) : string; // overloaded signature
function test(value: (string | number | boolean) : string { // implementation signature
  switch(typeof value){
    case "string":
      return `My name is ${value}.`;
    case "number":
      return `I'm ${value} years old.`;
    case "boolean":
      return value ? "I'm single." : "I'm not single.";
    default:
      console.log("Invalid Operation!");
  }
}

//Specialized overloading signatures
//We can use a specialized signature to create multiple methods with the same name and number of parameters but a different return type.
interface Document {
  createElement(tagName: "div"): HTMLDivElement; // specialized
  createElement(tagName: "span"): HTMLSpanElement;  // specialized
  createElement(tagName: "canvas"): HTMLCanvasElement; // specialized
  createElement(tagName: string): HTMLElement; // non-specialized
}
//When we declare a specialized signature in an object, it must be assignable to at least one non-specialized signature in the same object.
//When writing overloaded declarations, we must list the non-specialized signature last.
