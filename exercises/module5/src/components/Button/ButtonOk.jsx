import { useContext } from "react"
import {Context as CounterContext} from '../../contexts/CounterContext'

const ButtonOk = () => {
    const {counter, increaseOk} = useContext(CounterContext)
    return (
        <div>
            <li>
                Ok : {counter.ok} <button onClick={increaseOk}>Vote</button>
            </li>
        </div>
    )
}

export default ButtonOk