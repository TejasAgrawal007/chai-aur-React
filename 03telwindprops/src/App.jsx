import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  let myInfo = {
    Name:"Tejas",
    Age:22
  }

  return (
    <>
      <h1 className='bg-blue-500 text-white rounded-2xl px-5 py-3' >Chai or React</h1>

      <Card username="Tejas" btnText="click Me" />
      <Card username="Dipti" btnText="Submit" />
      <Card username="Akash"  />

    </>
  )
}

export default App
