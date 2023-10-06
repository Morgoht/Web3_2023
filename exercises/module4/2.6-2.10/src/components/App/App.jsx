import { useState } from 'react'
import Numbers from 'components/Numbers/Numbers'
import '../../main.css'

const App = () => {
  const [persons, setPersons] = useState([
    {  id: 0, name: 'Arto Hellas', phone: '00324567846'},
    {  id: 1, name: 'Amaury Andrade', phone: '0032457254'},
    {  id: 2, name: 'Sasha Lacroix', phone: '00326598127'},
    {  id: 3, name: 'Nico Deweer', phone: '00324562187'},
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }
  const handleNewPhone = (e) => {
    setNewPhone(e.target.value)
  }
  const handleNewSearch = (e) => {
    e.preventDefault()
    setNewSearch(e.target.value)
    const resultSearch = persons.filter(p => p.name.includes(newSearch))
    console.log(resultSearch)
    setPersons(resultSearch)
  }

  const addNewPerson = (e) => {
    e.preventDefault()

    const newPerson = {id: persons.length, name:newName, phone: newPhone}
    const names = persons.map(p => p.name)
    if(names.includes(newName)){
      return(
        alert(`${newName} is already added to phonebook`)
      )
    } else {

      console.log(newPerson)
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          filter shown with : <input value={newSearch} onChange={handleNewSearch}/>
        </div>

        
      </form>

      <h2>Add a new </h2>
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
      <h2>Numbers</h2>
      <Numbers persons={persons} />
      
    </div>
  )
}

export default App