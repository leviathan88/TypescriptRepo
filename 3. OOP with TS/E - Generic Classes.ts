class GenericRepository<T> {
  private _url : string;
  constructor(url : string){
    this._url = url;
  }
  public getAsync() {
    return Q.Promise((resolve : (entities : T[]) => void, reject) => {
      $.ajax({
        url: this._url,
        type: "GET",
        dataType: "json",
        success: (data) => {
          var list = <T[]>data.items;
          resolve(list);
        },
        error: (e) => {
          reject(e);
        }
      });
    });
  }
}

//so now we can use it with any class
var userRepository = new GenericRepository<User>("./demos/shared/users.json");
userRepository.getAsync()
  .then((users : User[]) => {
    console.log('userRepository => ', users);
  });

var talkRepository = new GenericRepository<Talk>("./demos/shared/talks.json");
talkRepository.getAsync()
  .then((talks : Talk[]) => {
    console.log('talkRepository => ', talks);
  });
