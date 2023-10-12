import { useContext } from "react"
import {Context as CounterContext} from '../../contexts/CounterContext'

const ButtonGood = () => {
    const {counter, increaseGood} = useContext(CounterContext)
    return (
        <div>
            <li>
                Good : {counter.good} <button onClick={increaseGood}>Vote</button>
            </li>
        </div>
    )
}

export default ButtonGood