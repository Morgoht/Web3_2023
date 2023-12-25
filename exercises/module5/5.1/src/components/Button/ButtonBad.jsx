import { useContext } from "react"
import {Context as CounterContext} from '../../contexts/CounterContext'

const ButtonBad = () => {
    const {counter, increaseBad} = useContext(CounterContext)
    return (
        <div>
            <li>
                Bad : {counter.bad} <button onClick={increaseBad}>Vote</button>
            </li>
        </div>
    )
}

export default ButtonBad