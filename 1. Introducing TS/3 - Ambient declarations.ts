//AMBIENT DECLARATIONS
//Ambient declaration allows you to create a variable in your TypeScript code that will not be translated
//into JavaScript at compilation time. This feature was designed to facilitate integration with the existing JavaScript code,
//the DOM (Document Object Model), and BOM (Browser Object Model)
customConsole.log("A log entry!");  // error
//If you try to call the member log of an object named customConsole,
//TypeScript will let us know that the customConsole object has not been declared:
//However, sometimes we want to invoke an object that has not been defined, for example, the 'console' or 'window' objects.
console.log("Log Entry!");
var host = window.location.hostname;
//When we access DOM or BOM objects, we don't get an error because these objects have already been declared in a special TypeScript file
//known as declaration files. You can use the declare operator to create an ambient declaration.
//We then use the declare operator to add the customConsole object to the scope:
interface ICustomConsole {
    log(arg : string) : void;
}
declare var customConsole : ICustomConsole;

//example of the switch statement
enum AlertLevel{
  info,
  warning,
  error
}
function getAlertSubscribers(level : AlertLevel){
  var emails = new Array<string>();
  switch(level){
    case AlertLevel.info:
       emails.push("cst@domain.com");
       break;
    case AlertLevel.warning:
       emails.push("development@domain.com");
       emails.push("sysadmin@domain.com");
       break;
    case AlertLevel.error:
      emails.push("development@domain.com");
      emails.push("sysadmin@domain.com");
      emails.push("management@domain.com");
      break;
    default:
      throw new Error("Invalid argument!");
  }
  return emails;
}

//for loop
var obj : any = { a:1, b:2, c:3 };    
for (var key in obj) {
  console.log(key + " = " + obj[key]);
}
