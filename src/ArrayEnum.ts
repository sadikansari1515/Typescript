// type inference
const chai = "masala"



// type annotations
const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.0];

// Type Aliases
type Chai = {
  name: string,
  price: number
}

const menu: Chai[] = [
  {name: "Masala", price: 15},
  {name: "Adrak", price: 25},
]

const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push("Pune");

const table: number[][] = [
  [1,2,3],
  [4,5,6]
]

// tuple
let chaiTuple: [string, number];
chaiTuple = ["Masala", 10];
// chaiTuple = [20, "Masala"];

let userInfo: [string, number, boolean?];
userInfo = ["sadik", 100];
userInfo = ["shaan", 100, true]

const locations: readonly [number, number] = [29.90, 87.89];

const chaiItems: [name: string, price: number] = ["Masala", 25];

//enum
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE
}

const size = CupSize.LARGE;

enum status {
  PENDING,
  SERVED,
  CANCELLED
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger"
}

function makeChai (type: ChaiType) {
  console.log(`Making ${type}`);
  
}

makeChai(ChaiType.GINGER);
// makeChai("masala")

enum RandomEnum {
  Id = 1,
  NAME = "chai"
}

const enum Sugars {
  LOw = 1,
  MED = 2,
  HIGH = 3
}

let t: [string, number] = ["chai", 10];
t.push("extra")