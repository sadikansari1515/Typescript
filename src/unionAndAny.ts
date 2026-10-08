let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'middle' = 'pending'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'

airlineSeat = 'aisle'

const orders = ['12', '20', '25', '42']

let currentorder: string | undefined;

for(let order of orders) {
  if(order == '25') {
    currentorder = order
    break
  }
}

currentorder = '11';

console.log(currentorder);
