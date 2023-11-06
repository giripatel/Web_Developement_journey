import { useState } from 'react'


function App() {
  const [color, setColor] = useState("#DCBFFF");


  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div  className='fixed flex flex-wrap justify-center  inset-x-0 px-0 ' >
        <div className='fixed flex flex-wrap justify-center gap-3 bottom-12 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:'red'}}  onClick={() => setColor("red")}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:'#557C55'}} onClick={() => setColor("#557C55")}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:'#FFFB73'}} onClick={() => setColor("#FFFB73")}>Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:'cyan'}} onClick={() => setColor("cyan")}>Cyan</button>
        </div>
      </div>
    </div>
  )
}

export default App
