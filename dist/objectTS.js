const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
};
// {
//   name: string,
//   price: number,
//   isHot: boolean
// }
let tea;
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
};
const adrakChai = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee;
const u = {
    username: "chaicode",
    password: "123"
};
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Masala chai",
    quantity: 2
});
const ChaiInfo = {
    name: "lemon tea",
    price: 30
};
export {};
//# sourceMappingURL=objectTS.js.map