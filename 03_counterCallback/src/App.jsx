import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const addValue= ()=>{
    setCounter((counter)=>counter+2)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
  }
  function removeValue(){
    setCounter((prevCounter)=>prevCounter-1)
    setCounter((prevCounter)=>prevCounter-1)
    setCounter((prevCounter)=>prevCounter-1)
    setCounter((prevCounter)=>prevCounter-1)
  }

  return (
    <>
        <h5>{counter}</h5>
        <button onClick={addValue}>
          Add+4
        </button>
        <h5>{counter}</h5>
        <button onClick={removeValue}>
          Subtract-4
        </button>
        
    </>
  )
}

export default App
