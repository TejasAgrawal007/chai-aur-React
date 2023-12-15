import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){

  // let counter = 15;
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    console.log("Add Value -> " , Math.random());

    if (counter == 20) {
      exit(0);
    }else{
      counter = counter + 1;
    }

    setCounter(counter);
  }

  const removeValue = () => {
    if (counter == 0) {
      exit(0);
    }else{
      counter = counter - 1;
    }
    setCounter(counter);
  }

  return(
    
    <>

      <h1>Chai or Code</h1>
      <h2>Counter Value {counter}</h2>

      <button  onClick={addValue} >Add Value</button>
   
      <button  onClick={removeValue}>Add Value</button>

    </>

  )

}

export default App