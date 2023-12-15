import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>


          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl">
              <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg" onClick={() => setColor("red")}  style={{backgroundColor:"red"}}>RED</button>
              <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg" onClick={() => setColor("green")}  style={{backgroundColor:"green"}}>GREEN</button>
              <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg"  onClick={() => setColor("orange")} style={{backgroundColor:"orange"}}>orange</button>
              <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg"  onClick={() => setColor("lightgreen")} style={{backgroundColor:"lightgreen"}}>lightgreen</button>
              <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg"  onClick={() => setColor("lightseagreen")} style={{backgroundColor:"lightseagreen"}}>lightseagreen</button>
            </div>
          </div>


    </div>
  )
}

export default App
