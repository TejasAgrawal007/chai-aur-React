import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Stats from './components/stats'
import Testmonials from './components/Testmonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)


 

  return (
    <>
      <Navbar  title="iFitness" />
      <Hero />
      <Stats />
      <Testmonials />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
