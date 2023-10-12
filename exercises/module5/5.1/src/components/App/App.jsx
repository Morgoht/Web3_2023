import { useState } from 'react'
import '../../App.css'
import ButtonGood from 'components/Button/ButtonGood'
import ButtonBad from 'components/Button/ButtonBad'
import ButtonOk from 'components/Button/ButtonOk'
import ButtonReset from 'components/Button/ButtonReset'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      Hello Wordl !
      <ul>
        <ButtonGood/>
        <ButtonBad/>
        <ButtonOk/>
      </ul>
      <ButtonReset/>
    </div>
  )
}

export default App
