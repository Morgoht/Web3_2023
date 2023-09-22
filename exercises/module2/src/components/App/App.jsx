import Button from "../Button/Button"
import Display from "../Display/Display"
import { useState } from "react"

function App() {
  const [value, setValue] = useState(0)

  const changeCount = (delta) => {
    setValue(value + delta)
  }

  

  return (
    <>
      <p> Hello Wordl</p>
      <Display display = {value}/>
      <Button label ="plus" data-delta="1" onClick={changeCount}/>
      <Button label ="reset" data-delta = {-value} onClick={changeCount}/>
      <Button label ="moins" data-delta="-1" onClick={changeCount}/>
    </>
  )
}

export default App
