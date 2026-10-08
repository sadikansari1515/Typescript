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
  public flavour =  "masala";
  private secretIngredients = "Cardamom";
  reveal() {
    return this.secretIngredients;
  }

}

class Shop {
  protected shopName = "chai corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

class Wallet {
  #balance = 100;

  getBalance() {
    return this.#balance
  }
}

const w = new Wallet();

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if(value > 5) throw new Error("Too sweet")
      this._sugar = value;
  }
}

const c = new ModernChai();
c.sugar = 4;

class EkChai {
  static shopName = "Chaicode caffe"

  constructor(public flavour: string){}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make(): void {
    console.log("Brewing Chai");
    
  }
}

class Heater {
  heat(){}
}

class ChaiMaker {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat;
  }
}