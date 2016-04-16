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
