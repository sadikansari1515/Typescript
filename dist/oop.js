// class Chai {
//   flavour: string;
//   price: number;
//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//   }
// }
// const masalaChai = new Chai("Ginger", 20);
// masalaChai.flavour = "masala"
class Chai {
    flavour = "masala";
    secretIngredients = "Cardamom";
    reveal() {
        return this.secretIngredients;
    }
}
class Shop {
    shopName = "chai corner";
}
class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}
class Wallet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new Wallet();
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too sweet");
        this._sugar = value;
    }
}
const c = new ModernChai();
c.sugar = 4;
class EkChai {
    flavour;
    static shopName = "Chaicode caffe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName);
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Brewing Chai");
    }
}
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
export {};
//# sourceMappingURL=oop.js.map