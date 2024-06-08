import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import ColorP from './components/ColorP'
function App() {
  const [money, setMoney] = useState(0)

  return (
     <>
     <div>
        <p>Money: {money}</p>
        <Child1 setMoney={setMoney}/>
        <Child2 setMoney={setMoney}/>
        <div className="colorP">
          <h2>ColorP</h2>
          <ColorP/>
        </div>
     </div>
   </>
  )
}

export default App
