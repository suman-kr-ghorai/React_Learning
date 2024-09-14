import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}></div>
     <div className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>
     <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Red"}} onClick={()=>setColor("red")} >Red</button>
     <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}} onClick={()=>setColor("green")} >Green</button>
     <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Blue"}} onClick={()=>setColor("blue")} >Blue</button>
     </div>
    </>
  )
}

export default App



