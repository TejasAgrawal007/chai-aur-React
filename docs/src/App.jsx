import { useState } from 'react'
import './App.css'
import Backgrond  from './Components/background'
import ForeGround from './Components/ForeGround'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800 ">
        <Backgrond />
        <ForeGround />
      </div>
    </>
  )
}

export default App
