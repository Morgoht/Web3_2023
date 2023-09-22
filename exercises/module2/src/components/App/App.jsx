import Button from "../Button/Button"
import Display from "../Display/Display"
import { useState } from "react"

function App() {
  const recentValue = JSON.parse(localStorage.getItem("counter"))
  const [value, setValue] = useState(recentValue)

  const changeCount = (delta) => {
    setValue(value + delta)
    localStorage.setItem("counter", JSON.stringify(value))
  }

  

  return (
    <>
      <p> Hello Wordl</p>
      <Display display = {value}/>
      <Button label ="plus" delta="+1" onClick={changeCount}/>
      <Button label ="reset" delta = {-value} onClick={changeCount}/>
      <Button label ="moins" delta="-1" onClick={changeCount}/>
    </>
  )
}

export default App
