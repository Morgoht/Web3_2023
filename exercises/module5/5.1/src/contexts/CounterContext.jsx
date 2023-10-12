import React, {useState} from "react";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [counter , setCounter] = useState(
        {good : 0, bad : 0, ok : 0}
    )

    const increaseGood = () => {
        setCounter({...counter, good : counter.good +1})
    }
    const increaseBad = () => {
        setCounter({...counter, bad : counter.bad +1})
    }
    const increaseOk = () => {
        setCounter({...counter, ok : counter.ok +1})
    }
    const resetAll = () => {
        setCounter({good : 0, bad : 0, ok : 0})
    }

    const exposedValue = {
        counter,
        increaseGood,
        increaseBad,
        increaseOk,
        resetAll
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}


export {
    Context,
    ProviderWrapper,
} 