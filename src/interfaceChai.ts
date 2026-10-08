interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavour: "masala",
  price: 30
};

interface Shop {
  readonly id: number
  name: string
}

const s: Shop = {
  id: 1,
  name: "chaicode caffe"
}
// s.id = 2

interface DiscountCalculator {
  (price: number): number
}

const apply50: DiscountCalculator = (p) => p*0.5;

interface TeaMachine {
  start(): void
  end(): void
}

const machine: TeaMachine = {
  start() {
    console.log("start");
    
  },
  end() {
    console.log("stop");
    
  }
}

interface ChaiRatings {
  [flavour: string]: number
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
}

interface User {
  name: string
}

interface User {
  age: number
}

const u: User = {
  name: "sadik",
  age: 21
}

interface A {
  a: string
}
interface B {
  b: string
}

interface c extends A, B {}