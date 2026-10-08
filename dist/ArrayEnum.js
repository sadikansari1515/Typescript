// type inference
const chai = "masala";
// type annotations
const chaiFlavours = ["Masala", "Adrak"];
const chaiPrice = [10, 20];
const rating = [4.5, 5.0];
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
];
const cities = ["Delhi", "Jaipur"];
// cities.push("Pune");
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
// tuple
let chaiTuple;
chaiTuple = ["Masala", 10];
// chaiTuple = [20, "Masala"];
let userInfo;
userInfo = ["sadik", 100];
userInfo = ["shaan", 100, true];
const locations = [29.90, 87.89];
const chaiItems = ["Masala", 25];
//enum
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
var status;
(function (status) {
    status[status["PENDING"] = 0] = "PENDING";
    status[status["SERVED"] = 1] = "SERVED";
    status[status["CANCELLED"] = 2] = "CANCELLED";
})(status || (status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making ${type}`);
}
makeChai(ChaiType.GINGER);
// makeChai("masala")
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["Id"] = 1] = "Id";
    RandomEnum["NAME"] = "chai";
})(RandomEnum || (RandomEnum = {}));
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOw"] = 1] = "LOw";
    Sugars[Sugars["MED"] = 2] = "MED";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
let t = ["chai", 10];
t.push("extra");
export {};
//# sourceMappingURL=ArrayEnum.js.map