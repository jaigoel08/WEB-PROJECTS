import { useState } from "react"
import Display from "./components/Display"
import NumberPad from "./components/NumberPad"

function App() {
  const[displayVal , setDisplayVal] = useState('')

  return (
    <>
    <center><h1>Calculator</h1></center>
     
     <Display textToShow={displayVal}/>
     <NumberPad displayVal= {displayVal} setDisplayVal = {setDisplayVal}/>
    </>
  )
}

export default App
