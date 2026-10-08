import './App.css'
import Card from './components/Card'
import { ChaiCard } from './components/ChaiCard'
import ChaiList from './components/ChaiList'
import { Counter } from './components/counter'
import OrderForm from './components/OrderForm'

import type { Chai } from './Types'

const menu: Chai[] = [
  {id: 1, name: "masala", price: 25},
  {id: 2, name: "ginger", price: 30},
  {id: 3, name: "Lemon", price: 60},
]

function App() {

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name='headphone' price={4000}/>
        <ChaiCard name='iphone' price={40000}/>
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <div>
        <OrderForm 
          onSubmit={(order) => {
            console.log("placed", order.name, order.cups);
            
          }}/>
      </div>
      <div>
        <Card
          title='Chai aur Typescript'
          footer={<button>Order Now</button>}
          />
      </div>
      
    </>
  )
}

export default App
