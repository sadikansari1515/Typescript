

// let a = 12;
// a = "sadik";

// let arr1 = [12,82,"ana"];
let arr: [string, number] = ["sadik", 21,];

//enumerations (enums)
enum userRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin"
}

userRoles.ADMIN;

// any, unknown, void, undefined, null, never
let c: number; // datatype define krna
c = 13;

let a: unknown;
a = 15;
a = "sadik";

if(typeof a === "string") 
  a.toUpperCase();

function abcd() : void { // function ka return datatype define krna
  console.log("hey");
  
}

let a1: null;
a1 = null;

let b1: undefined;

function abc(): never { // infinite loop || never return
  while(true) {};
}


// type inference

let p = 5; // khud hi type find krta hai

// type annotations

let p1: number | boolean | string; // type defined krna 
p1 = 2;
p1 = false;
p1 = "hello";

function hello(a: number, b: string) : void {};

// interface and types 

interface User {
  name: string,
  email: string,
  password: string,
  gender?: string; // optional
}

function getData(obj: User) {
  obj.gender;
}

getData({name: "sadik", email: "sadik@gmail.com", password: "sadik", gender: "male"});

interface Admin extends User {
  admin: boolean;
}

function getData1(obj: Admin) {};

interface abcde {
  name: string;
}

interface abcde {
  email: string;
}

function haww(obj : abcde) {} // same name ke interface merge ho jayenge 

// type aliases
 
type arg = string | void;
let m1: arg;

// intersection types

let c1: string | void; // union

type User1 = {
  name: string;
  email: string;
}

type Admin1 = User1 & {
  getDetails(user: string) : void
}

function kaddu(a: Admin1) {};


// classes object 

class Bottle {
  constructor(public color: string, public size: string, public price: number) {

  }
}

let bt1 = new Bottle("blue","small", 200);

// this keyword 

class abcd1 {
  constructor(public name: string) {}
  
  changeName(name: string) {
    this.name = name;
  }

  printName() {
    this.changeName("hawww");
  }

}

// access modifier

// class bottleMaker {
//   public name: string = "milton";
// }

// class metalBottleMaker extends bottleMaker{
//   public material: string = "metal";
//   changeName() {
//     this.name = "halwa";
//   }
// }

// let m4 = new metalBottleMaker();

// class bottleMaker {
//   private name: string = "milton";
// }

// class metalBottleMaker extends bottleMaker{
//   public material: string = "metal";
//   changeName() {
//     this.name = "halwa";
//   }
// }

// let m4 = new metalBottleMaker();

// class bottleMaker {
//   protected name: string = "milton";
// }

// class metalBottleMaker extends bottleMaker{
//   public material: string = "metal";
//   changeName() {
//     this.name = "halwa";
//   }
// }

// let m4 = new metalBottleMaker();

// readonly

// class User {
//   constructor(public readonly name: string) {}
//   changeName() {
//     this.name = "hellow";
//   }
// }

// let u1 = new User("sadik");
// u1.changeName();


// class User {
//   constructor(public name: string, public age: number, public gender?: string) {}
//   changeName() {
//     this.name = "hellow";
//   }
// }

// let u1 = new User("sadik",21,"male");
// let u2 = new User("gadha",8);

// getter setter 

// class User {
//   constructor(public _name: string, public age: number, public gender?: string) {}
//   get name() {
//     return this._name;
//   }

//   set name(value: string) {
//     this._name = value;
//   }
// }

// let u1 = new User("sadik", 21, "male");

// static member

class Shery {
  static pi = 3.14;

  static getRandomNo() {
    return Math.random();
  }
}


//  callback functions

function abcdef(name: string, age: number, cb: (value: string) => void) {
  cb("hey");
}

abcdef("sadik", 21, (value: string) => {
  console.log(value);
})

// rest parameters

function friends(...arg: string[]) {
 console.log(arg);
 
}

friends("sa","da","fa");

let arr1 = [1,8,7,3,7,8];
let arr2 = [...arr1];

// function overloading 

function sammi(a: string): void;
function sammi(a: string, b: number): number;

function sammi(a: any, b?: any) {
  if(typeof a === "string" && typeof b === "undefined") {
    console.log("hey");
  }
  if(typeof a === "string" && typeof b === "number") {
    return 123;
  }
  else throw new Error("something is wrong");
  
}

sammi("meooow");
sammi("mewoow", 21);


// generic function

function oyye<t>(value: t) {
  console.log(value);
  
}

oyye<string>("hey")  // or
oyye("hey");

// generic interface

interface dog<t> {
 name: string;
 age: number;
 key: t;

}

function redDog(obj: dog<string>) : void{

}

redDog({name: "sadik",age: 21,key: "meoow"});

// generic class 

class bag <t> {
  constructor(public key: t){};
}

let q1 = new bag<string>("skybag");
let q2 = new bag<number>(21);