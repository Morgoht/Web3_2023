import { useState } from "react"
import personService from '../../services/persons'

const Addnew = ({persons, setPersons}) => {

    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const handleNewName = (e) => {
        setNewName(e.target.value)
      }
      const handleNewPhone = (e) => {
        setNewPhone(e.target.value)
      }
      

      const addNewPerson = (e) => {
        e.preventDefault()
    
        const names = persons.map(p => p.name)
        if(names.includes(newName)){
          return(
            alert(`${newName} is already added to phonebook`)
            )
          } else {
            const newId = persons.length
            const newPerson = { name:newName, number: newPhone}
            personService
            .create(newPerson)
              .then(response => {
                console.log(response)
                setPersons(persons.concat(response.data))
                setNewName('')
              })
          
        }
      }

    return(
        <form onSubmit={addNewPerson}>
            <div>
                name: <input  value={newName} onChange={handleNewName} />
                <br/>
                phone: <input value={newPhone} onChange={handleNewPhone} />    
            </div>
            <div>
                <button type="submit">
                    add
                </button>
            </div>
        </form>
    )
}
export default Addnew