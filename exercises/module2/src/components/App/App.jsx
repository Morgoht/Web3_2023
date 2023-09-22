import Button from "../Button/Button"
import Display from "../Display/Display"
import { useState } from "react"

function App() {
  const [value, setValue] = useState(0)

  const increaseByOne = () => {
    setValue(value+1)
  }
  const decreaseByOne = () => {
    setValue(value - 1)
  }
  const reset = () => {
    setValue(0)
  }

  return (
    <>
      <p> Hello Wordl</p>
      <Display display = {value}/>
      <Button label ="plus" onClick={increaseByOne}/>
      <Button label ="reset" onClick={reset}/>
      <Button label ="moins" onClick={decreaseByOne}/>
    </>
  )
}

export default App
