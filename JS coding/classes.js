class Test {
  constructor(names, age) {
    this.names = names;
  }
  run() {
    console.log(`${this.names} running........!`);
  }
  static hello() {
    console.log(`Hello ${this.names},How are you doing...!`);
  }
}

let obj = new Test("giri");

class Greet extends Test {
  constructor(x) {
    super(x);
    this.x;
  }
  moringGreet() {
    console.log(`Good Morning ${this.names}! `);
  }
  afternoonGreet() {
    console.log(`Good Afternoon ${this.names}! `);
  }
  static parentStatic() {
    super.hello();
  }
  // run(){
  //   console.log('This method is overridden.......!')
  // }
}

let greet = new Greet("Vivek");

console.log(Greet.parentStatic());
console.log(greet.moringGreet());
console.log(greet.run());

console.log("------------------------------------------------------");

class Experi {
  constructor() {
    this._value = 0;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    if (newValue > 0) {
      this._value = newValue;
    } else {
      console.log("Value can't be negative...");
    }
  }
}

let exp = new Experi();
console.log(exp.value);
exp.value = 7;
console.log(exp.value);
exp.value = -7;

console.log(greet instanceof Test);