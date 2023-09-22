import Button from "../Button/Button"
import Display from "../Display/Display"
import { useState } from "react"
import useLocalStorage from "hooks/useLocalStorage"


const STORAGE_KEY = "counter"

function App() {

  const [value, setValue] = useLocalStorage(STORAGE_KEY,0)

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
