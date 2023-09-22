import { useState } from "react"

//il reagrde si la valeur existe
const fetchValue = (key, defaultValue)  => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : defaultValue
}
const persistValue =(key, value) => {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
}


    // faier une fonction useLocalStorage  qui défini une clé et une valeur initial.
const useLocalStorage = (key, initialValue) => {
   const currentValue = fetchValue(key, initialValue)
   const [stateValue, setStateValue] = useState(currentValue)

   const persistSetter = (newValue) => {
    persistValue(key,newValue)
    setStateValue(newValue)
   }
   return [stateValue, persistSetter]

    // il définit une variabel d'état
    // la fonction va return [variableEtat, Setter]
    //on pourra donc matcher la fonction avec la varibale d'état du composant app

    

}

export default useLocalStorage