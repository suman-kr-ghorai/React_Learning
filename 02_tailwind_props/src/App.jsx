import { useState } from 'react'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username="Sayanwita" description="Kolkata"/>
    <Card username="Suman" description="Haldia"/>
    </>
  )
}

export default App
