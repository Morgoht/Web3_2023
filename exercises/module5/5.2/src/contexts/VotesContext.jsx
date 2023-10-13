import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

 
const Context = React.createContext(null)

const ProviderWrapper = ({children}) => {

    const [opinions, setOpinions] = useState([])

    const addOpinion = (name) => {
        console.log('add opinion');
        const newOpinion = {
            name : name,
            count : 0,
            id : uuidv4(),
        }
        setOpinions(opinions.concat(newOpinion))
    }
    

    const increaseByOne = (id) => {
        const newOpinions = [...opinions]
        const opinionToUpdate = newOpinions.find(
            (opinion) => opinion.id === id
        )
        opinionToUpdate.count +=1
        newOpinions.sort((a,b) => b.count - a.count)
        setOpinions(newOpinions)
    }
    

    const exposedValue = {
        increaseByOne,
        addOpinion,
        opinions
        
    }

    return <Context.Provider value={exposedValue}>
        {children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}