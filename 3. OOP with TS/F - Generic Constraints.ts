//Sometimes, we might need to restrict the use of a generic class.
//Take the generic repository from the previous section as an example.
//We have a new requirement: we need to add some changes to validate the entities loaded via AJAX, and we will return only the valid entities.

//we can achieve this by adding isValid() method to validate data
success: (data) => {
  var list : T[];
  var items = <T[]>data.items;
  for(var i = 0; i < items.length; i++){
    if(items[i].isValid()) { // error
      // ...
    }
  }
  resolve(list);
}
//The only problem with this approach is that, if we attempt to invoke an entity's isValid method inside the generic repository,
//we will get a compilation error.
//The error is thrown because we are allowed to use the generic repository with any type,
//but not all types have a method named isValid. Fortunately, this issue can easily be resolved by using a generic constraint.
//Constraints will restrict the types that we are allowed to use as the generic type parameter T. We are going to declare a constraint,
//so only types that implement an interface named ValidatableInterface can be used with the generic method.

interface ValidatableInterface {
  isValid() : boolean;
}

class User implements ValidatableInterface {
  public name : string;
  public password : string;
  public isValid() : boolean {
    // user validation...
    return true;
  }
}

//Now, let's declare a generic repository and add a type constraint so only types derived from
//ValidatableInterface will be accepted as the generic type parameter T:
class GenericRepositoryWithConstraint<T extends ValidatableInterface> {
  private _url : string;
  constructor(url : string){
    this._url = url;
  }
  public getAsync() {
    return Q.Promise((resolve : (talks : T[]) => void, reject) => {
      $.ajax({
        url: this._url,
        type: "GET",
        dataType: "json",
        success: (data) => {
          var items = <T[]>data.items;
          for(var i = 0; i < items.length; i++) {
            if(items[i].isValid()) {
              list.push(items[i]);
            }
          }
          resolve(list);
        },
        error: (e) => {
          reject(e);
        }
      });
    });
  }
}
