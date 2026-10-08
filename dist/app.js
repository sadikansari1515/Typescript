// let a = 12;
// a = "sadik";
// let arr1 = [12,82,"ana"];
let arr = ["sadik", 21,];
//enumerations (enums)
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "super_admin";
})(userRoles || (userRoles = {}));
userRoles.ADMIN;
// any, unknown, void, undefined, null, never
let c; // datatype define krna
c = 13;
let a;
a = 15;
a = "sadik";
if (typeof a === "string")
    a.toUpperCase();
function abcd() {
    console.log("hey");
}
let a1;
a1 = null;
let b1;
function abc() {
    while (true) { }
    ;
}
// type inference
let p = 5; // khud hi type find krta hai
// type annotations
let p1; // type defined krna 
p1 = 2;
p1 = false;
p1 = "hello";
function hello(a, b) { }
;
function getData(obj) {
    obj.gender;
}
getData({ name: "sadik", email: "sadik@gmail.com", password: "sadik", gender: "male" });
function getData1(obj) { }
;
function haww(obj) { } // same name ke interface merge ho jayenge 
let m1;
// intersection types
let c1; // union
function kaddu(a) { }
;
// classes object 
class Bottle {
    color;
    size;
    price;
    constructor(color, size, price) {
        this.color = color;
        this.size = size;
        this.price = price;
    }
}
let bt1 = new Bottle("blue", "small", 200);
// this keyword 
class abcd1 {
    name;
    constructor(name) {
        this.name = name;
    }
    changeName(name) {
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
function abcdef(name, age, cb) {
    cb("hey");
}
abcdef("sadik", 21, (value) => {
    console.log(value);
});
// rest parameters
function friends(...arg) {
    console.log(arg);
}
friends("sa", "da", "fa");
let arr1 = [1, 8, 7, 3, 7, 8];
let arr2 = [...arr1];
function sammi(a, b) {
    if (typeof a === "string" && typeof b === "undefined") {
        console.log("hey");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("something is wrong");
}
sammi("meooow");
sammi("mewoow", 21);
// generic function
function oyye(value) {
    console.log(value);
}
oyye("hey"); // or
oyye("hey");
function redDog(obj) {
}
redDog({ name: "sadik", age: 21, key: "meoow" });
// generic class 
class bag {
    key;
    constructor(key) {
        this.key = key;
    }
    ;
}
let q1 = new bag("skybag");
let q2 = new bag(21);
export {};
//# sourceMappingURL=app.js.map