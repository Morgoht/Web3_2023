import { useContext } from "react"
import {Context as CounterContext} from '../../contexts/CounterContext'

const ButtonReset = () => {
    const {counter, resetAll} = useContext(CounterContext)
    return (
        <div>
            <button onClick={resetAll}>Reset scores</button>
        </div>
    )
}

export default ButtonReset