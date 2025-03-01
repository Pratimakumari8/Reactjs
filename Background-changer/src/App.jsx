import { useState } from 'react'


function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className = "w-full h-screen duration-200"
     style= {{backgroundColor: color}}>
      <div className = " fixed flex  flex-wrap   bottom-5 justify-center inset-x-0 px-2">
        <div className = "flex flex-wrap  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-fit mx-auto" >
          <button onClick = {() => setColor("red")}
          className = "outline-none px-4 py-1 rounded-full text-white " style = {{backgroundColor: "red"}}>Red
          </button>
          <button onClick = {() => setColor("blue")}
          className = "outline-none px-4 py-1 rounded-full text-white " style = {{backgroundColor: "blue"}}>blue
          </button>
          <button className = "outline-none px-4 py-1 rounded-full text-white" style = {{backgroundColor: "yellow"}}>yellow
          </button>
          <button className = "outline-none px-4 py-1 rounded-full text-white " style = {{backgroundColor: "orange"}}>orange
          </button>
          <button className = "outline-none px-4 py-1 rounded-full text-white " style = {{backgroundColor: "pink"}}>pink
          </button>
          <button className = "outline-none px-4 py-1 rounded-full text-white" style = {{backgroundColor: "olive"}}>olive
          </button>
          <button className = "outline-none px-4 py-1 rounded-full text-white" style = {{backgroundColor: "purple"}}>purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App