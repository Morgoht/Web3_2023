import { useState } from 'react'
import Dislpay from 'components/Display/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dislpay title = "Give Feedback"/>
    </>
  )
}

export default App
