//Immediately invoked functions
//An immediately invoked function expression (IIFE) is a design pattern that produces a lexical scope using function scoping.
//IIFE can be used to avoid variable hoisting from within blocks or to prevent us from polluting the global scope
class Counter {
  private _i : number;
  constructor() {
    this._i = 0;
  }
  get() : number {
    return this._i;
  }
  set(val : number) : void {
    this._i = val;
  }
  increment() : void {
    this._i++;
  }
}
//this code turns into this JS code:
var Counter = (function () {
    function Counter() {
        this._i = 0;
    }
    Counter.prototype.get = function () {
        return this._i;
    };
    Counter.prototype.set = function (val) {
        this._i = val;
    };
    Counter.prototype.increment = function () {
        this._i++;
    };
    return Counter;
}());
