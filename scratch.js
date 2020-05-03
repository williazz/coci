class Stack {
  constructor() {
    this._dog = 'shiba';
  }

  get dog() {
    return this._dog;
  }
}

const my = new Stack();

console.log(my.dog);
my.dog = 'cat';
console.log(my.dog);
