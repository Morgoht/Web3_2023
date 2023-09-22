import Button from "../Button/Button"
import Display from "../Display/Display"
import { useState } from "react"

function App() {
  const recentValue = JSON.parse(localStorage.getItem("counter")) == null ? 0 :
    localStorage.getItem("counter")
   
   
      
  const [value, setValue] = useState(parseInt(recentValue))

  const changeCount = (delta) => {
    const newValue = value + delta
    console.log(value)
    localStorage.setItem("counter", JSON.stringify(newValue))
    setValue(newValue)
  }

  

  return (
    <>
      <p> Hello Wordl</p>
      <Display display = {value}/>
      <Button label ="plus" delta= "1" onClick={changeCount}/>
      <Button label ="reset" delta = {-value} onClick={changeCount}/>
      <Button label ="moins" delta="-1" onClick={changeCount}/>
    </>
  )
}

export default App
