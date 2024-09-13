import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <button onClick={() => {
          if(count<10){
            setCount((count) => count + 1)}
          }}>
          add {count}
        </button>

        <div>{count}Hello</div>

        <button 
        onClick={
          () => {
          if(count>5)
            setCount((count) => count -1)
          }
       }>
          sub {count}
        </button>
       
    </>
  )
}

export default App
