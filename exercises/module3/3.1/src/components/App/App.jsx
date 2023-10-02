import { useState } from 'react'
import Dislpay from 'components/Display/Display'
import Buttons from 'components/Button/Buttons'
import Statistics from 'components/Statistics/Statistics'
import Loading from 'components/Loading/Loading'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {
    if(e.target.className === 'good') setGood(good +1)
    else if (e.target.className === 'neutral') setNeutral (neutral +1)
    else if (e.target.className === 'bad') setBad(bad + 1)
  }

  const statistics = [good,neutral,bad]
  
    return ( 
      <>
        <Dislpay title = "Give Feedback"/>
        <Buttons handler ={handleClick}/>
        <Dislpay title= "Statistics"/>
        <Statistics statistics = {statistics}  />
      </>
    )
}

export default App
